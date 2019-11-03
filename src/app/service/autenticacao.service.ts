import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/usuario";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AutenticacaoService {
  urlLogin = environment.urlLogin;
  constructor(private httpClient: HttpClient) {}

  login(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.urlLogin);
  }

  salvarCredenciais(usuario: Usuario) {
    sessionStorage.setItem("usuarioLogado", usuario.username);
    sessionStorage.setItem("matricula", usuario.id + "");
  }

  getUsuarioLogado(): string {
    return sessionStorage.getItem("usuarioLogado");
  }

  getUsuarioMatricula(): string {
    return sessionStorage.getItem("matricula");
  }

  apagarCredenciais() {
    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('matricula');
    console.log('logout');
  }

}
