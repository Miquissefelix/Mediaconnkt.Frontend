import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2, forwardRef } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';

import { getStyle, rgbToHex } from '@coreui/utils';
import { TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { ModalModule } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilBullhorn ,cilTrash,cilPencil,cilSave} from '@coreui/icons';
import { AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective, FormCheckComponent, ButtonDirective,ButtonModule,AlertComponent  } from '@coreui/angular';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormModule } from '@coreui/angular';
import { Tabs2Module } from '@coreui/angular';
@Component({
    templateUrl: 'colors.component.html',
    standalone: true,
    imports: [Tabs2Module,TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent,TableModule, UtilitiesModule,ModalModule,ColComponent,IconDirective,AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective, FormCheckComponent, ButtonDirective,ButtonModule,AlertComponent,FormsModule,ReactiveFormsModule,FormModule, forwardRef(() => ThemeColorComponent)]
})
export class ColorsComponent implements OnInit, AfterViewInit {
  icons = {
    cilTrash,cilPencil,
    cilBullhorn,
    cilSave,
  
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
  }

  public themeColors(): void {
    Array.from(this.document.querySelectorAll('.theme-color')).forEach(
      (element: Element) => {
        const htmlElement = element as HTMLElement;
        const background = getStyle('background-color', htmlElement) ?? '#fff';
        const table = this.renderer.createElement('table');
        table.innerHTML = `
          <table class="table w-100">
            <tr>
              <td class="text-muted">HEX:</td>
              <td class="font-weight-bold">${rgbToHex(background)}</td>
            </tr>
            <tr>
              <td class="text-muted">RGB:</td>
              <td class="font-weight-bold">${background}</td>
            </tr>
          </table>
        `;
        this.renderer.appendChild(htmlElement.parentNode, table);
        // @ts-ignore
        // el.parentNode.appendChild(table);
      }
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.themeColors();
  }
}

@Component({
    selector: 'app-theme-color',
    template: `
    <c-col xl="2" md="4" sm="6" xs="12" class="my-4 ms-4">
      <div [ngClass]="colorClasses" style="padding-top: 75%;"></div>
      <ng-content></ng-content>
    </c-col>
  `,
    standalone: true,
    imports: [ColComponent, NgClass],
})
export class ThemeColorComponent implements OnInit {

  
  @Input() color = '';
  public colorClasses = {
    'theme-color w-75 rounded mb-3': true
  };

  @HostBinding('style.display') display = 'contents';

  ngOnInit(): void {
    this.colorClasses = {
      ...this.colorClasses,
      [`bg-${this.color}`]: !!this.color
    };
  }


}

