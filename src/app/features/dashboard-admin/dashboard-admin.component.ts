import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelAdminComponent } from "./components/panel-admin/panel-admin.component";

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [RouterOutlet, PanelAdminComponent],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {

}
