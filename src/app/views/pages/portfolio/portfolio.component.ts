import { Component } from '@angular/core';
import {NavbarModule} from '@coreui/angular';
import { ContainerComponent,CollapseModule } from '@coreui/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarModule,ContainerComponent,CollapseModule,RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  isCollapsed = true;
}
