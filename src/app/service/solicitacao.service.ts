import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Solicitacao } from '../model/solicitacao';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService extends CrudService<Solicitacao> {
  resourceUrl = environment.urlSolicitacao;

}
