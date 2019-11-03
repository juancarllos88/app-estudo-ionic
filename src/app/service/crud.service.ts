import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Generic } from './generics/generic.interface';
import { Solicitacao } from '../model/solicitacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> implements Generic<T>{

  resourceUrl: string;

  constructor(private httpClient : HttpClient) { }

  create(model: T) {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }
  getAll():Observable<T[]> {
    return this.httpClient.get<T[]>(this.resourceUrl);
  }
  update(id: number, model: T) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }

  


}
