import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeuiModule } from './shared/primeui/primeui.module';



// routing
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './modules/auth/services/auth.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    PrimeuiModule 
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}