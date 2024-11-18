import { Component } from '@angular/core';
import { TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent ,ColComponent,ButtonDirective,ButtonModule} from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { ModalModule } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilDevices ,cilTrash,cilPencil,cilSave} from '@coreui/icons';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';
@Component({
    templateUrl: 'typography.component.html',
    standalone: true,
    imports: [
        TextColorDirective,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        TableModule, UtilitiesModule,ModalModule,IconDirective,ColComponent,ButtonDirective,ButtonModule,FormsModule,ReactiveFormsModule,FormModule
    ],
})
export class TypographyComponent {
  constructor() {}

  icons = {
    cilTrash,cilPencil,
    cilDevices,
    cilSave,
  
  };
}
