import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbRouterComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

import { TableModule, UtilitiesModule } from '@coreui/angular';
import { ModalModule ,ButtonDirective,ButtonModule} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilDevices ,cilTrash,cilPencil} from '@coreui/icons';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';
@Component({
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, BreadcrumbComponent, BreadcrumbItemComponent, NgClass, BreadcrumbRouterComponent,TableModule, UtilitiesModule,FormsModule,FormModule,ReactiveFormsModule,ModalModule,IconDirective,ButtonDirective,ButtonModule]
})
export class BreadcrumbsComponent implements OnInit {
  public items = <any>[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', url: '/', attributes: { title: 'Home' } },
      { label: 'Library', url: '/' },
      { label: 'Data', url: '/dashboard/' },
      { label: 'CoreUI', url: '/' }
    ];

    setTimeout(() => {
      this.items = [
        { label: 'CoreUI', url: '/' },
        { label: 'Data', url: '/dashboard/' },
        { label: 'Library', url: '/' },
        { label: 'Home', url: '/', attributes: { title: 'Home' } }
      ];
    }, 5000);
  }

  icons = {
    cilTrash,cilPencil,
    cilDevices,
  
  };
}
