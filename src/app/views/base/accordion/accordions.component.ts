import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective,ButtonDirective,ButtonModule } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

import { TableModule, UtilitiesModule } from '@coreui/angular';
import { ModalModule } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import {  cilTrash,cilPencil,cilLocationPin,cilFolderOpen,cilDevices,cilSave} from '@coreui/icons';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-accordions',
    templateUrl: './accordions.component.html',
    styleUrls: ['./accordions.component.scss'],
    standalone: true,
    imports: [IconDirective,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective,TableModule, UtilitiesModule,ModalModule,FormsModule,ReactiveFormsModule,FormModule ,ButtonDirective,ButtonModule,RouterLink]
})
export class AccordionsComponent {

  items = [1, 2, 3, 4];

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getAccordionBodyText(value: string|number) {
    const textSample = `
      <strong>This is the <mark>#${value}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }

  icons = {
    cilTrash,cilPencil,
    cilLocationPin,
    cilFolderOpen,
    cilDevices,
    cilSave
  
  };
}
