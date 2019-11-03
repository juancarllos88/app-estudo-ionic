import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AutenticacaoService } from '../service/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {


  usuarioLogado:string;
  matricula:string;
  constructor(private authService: AutenticacaoService,private router: Router) {}

  ngAfterViewInit(){
  }

  ionViewWillEnter(){
    this.usuarioLogado = this.authService.getUsuarioLogado();
    this.matricula = this.authService.getUsuarioMatricula();
  }
  ngOnDestroy() {
  }

  ngOnInit() {
  }

  logout(){
    this.authService.apagarCredenciais();
    //this.router.navigate(['login']);
  }

}
