import { Component, OnInit, OnDestroy } from "@angular/core";
import { SolicitacaoService } from "src/app/service/solicitacao.service";
import { Subscription } from "rxjs";
import { Solicitacao } from "src/app/model/solicitacao";
import { ActivatedRoute } from "@angular/router";
import { Status } from 'src/app/util/enum/status.enum';

@Component({
  selector: "app-detalhamento",
  templateUrl: "./detalhamento.component.html",
  styleUrls: ["./detalhamento.component.scss"]
})
export class DetalhamentoComponent implements OnInit, OnDestroy {
  solicitacao: Solicitacao = new Solicitacao();
  status:string;
  private subscription: Subscription;
  
  constructor(
    private solicitacaoService: SolicitacaoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params["id"];
      this.popularLista(id);
    });
  }

  popularLista(id: number) {
    this.subscription = this.solicitacaoService.getAll().subscribe(
      (solicitacoes: Solicitacao[]) => {
        this.solicitacao = solicitacoes.find(elemento => {
          return elemento.id == id;
        });
        this.status = Status[this.solicitacao.status];
      },
      response => {
        console.log(response);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
