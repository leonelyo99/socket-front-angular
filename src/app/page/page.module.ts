import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule } from 'ngx-socket-io';
import { environment } from '../../environments/environment';
import { PageRoutingModule } from './page-routing.module';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    PageRoutingModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    SocketIoModule.forRoot({ url: environment.socketURL, options: {} })
  ],
  providers: [
    SocketService
  ]
})
export class PageModule { }
