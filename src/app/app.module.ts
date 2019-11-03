import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './auth/interceptor.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrudService } from './service/crud.service';
import { SolicitacaoService } from './service/solicitacao.service';
import { AutenticacaoService } from './service/autenticacao.service';
import { NeedAuthGuard } from './auth/needAuthGuard';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CrudService,
    SolicitacaoService,
    AutenticacaoService,
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
