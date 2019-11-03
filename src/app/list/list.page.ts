import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolicitacaoService } from '../service/solicitacao.service';
import { Solicitacao } from '../model/solicitacao';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit ,OnDestroy{
  private subscription: Subscription;
  solicitacoes: Solicitacao[];
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private solicitacaoService: SolicitacaoService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    this.popularLista();
  }


  popularLista(){ 
    this.subscription = this.solicitacaoService.getAll().subscribe(
      (solicitacoes: Solicitacao[]) => {
        this.solicitacoes = solicitacoes;
      },
      response => {
        console.log('response');
      }
    );
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
