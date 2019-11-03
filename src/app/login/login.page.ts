import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Usuario } from "../model/usuario";
import { Router } from "@angular/router";
import { AutenticacaoService } from "../service/autenticacao.service";
import { Subscription } from "rxjs";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit ,OnDestroy {
 
  usuario: Usuario = new Usuario();
  showMenu: boolean = false;
  private subscription: Subscription;

  constructor(
    private route: Router,
    private authService: AutenticacaoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
  }

  salvar(form: NgForm) {
    if (form.invalid) {
      this.presentToast("Campos obrigatórios *");
    } else {
      let inscricao = this.authService.login().subscribe(
        (usuarios: Usuario[]) => {
          let usuario = usuarios.some(
            u =>
              u.username === this.usuario.username &&
              u.password === this.usuario.password
          );
          if (usuario) {
            this.salvarSessao(usuarios);
            this.usuario = new Usuario();
            this.route.navigate(["/home"]);
          } else {
            this.presentToast("Credenciais inválidas");
          }

          inscricao.unsubscribe();
        },
        response => {
          console.log(response);
          inscricao.unsubscribe();
          this.presentToast("Ocorreu um erro interno");
        }
      );
    }
  }

  salvarSessao(usuarios: Usuario[]){
    let usuario = usuarios.find(elemento => {
      return elemento.username === this.usuario.username;
    });
    this.authService.salvarCredenciais(usuario);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      position: "top",
      color: "danger"
    });
    toast.present();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
