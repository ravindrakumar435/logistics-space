import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { PrimeuiModule } from './primeui/primeui.module';



@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    PrimeuiModule
  ],
  exports:[TopNavComponent,PrimeuiModule]
})
export class SharedModule { }
