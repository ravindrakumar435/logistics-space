import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule} from 'primeng/inputtext';
import { DialogModule} from 'primeng/dialog';
import { TableModule} from 'primeng/table';
import { ConfirmPopupModule} from 'primeng/confirmpopup';
import { ToastModule} from 'primeng/toast';
import { MenuModule} from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar';
import { DropdownModule} from 'primeng/dropdown';
import { OverlayPanelModule} from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { TimelineModule} from 'primeng/timeline';
import { CardModule} from 'primeng/card';
import { TooltipModule} from 'primeng/tooltip';
import { FileUploadModule} from 'primeng/fileupload'
import { GalleriaModule} from 'primeng/galleria';
import { InputTextareaModule} from 'primeng/inputtextarea'
import { InputNumberModule} from 'primeng/inputnumber' ;




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    StyleClassModule,
    RippleModule,
    InputTextModule,
    DialogModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    DropdownModule,
    OverlayPanelModule,
    CalendarModule,
    TimelineModule,
    CardModule,
    FileUploadModule,
    GalleriaModule,
    InputTextareaModule,
    InputNumberModule
  ]
})
export class PrimeuiModule { }
