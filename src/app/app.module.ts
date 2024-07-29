import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { CustomInterceptor } from './base/custom.interceptor';
import { AuthGuardService } from './base/guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule,
    CustomLayoutModule,
    // ToastrModule.forRoot({
    //   closeButton: false,
    //   timeOut: 3000,
    //   progressBar: true,
    //   preventDuplicates: true,
    //   resetTimeoutOnDuplicate: true,
    //   includeTitleDuplicates: true
    // }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
      multi: true,
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
