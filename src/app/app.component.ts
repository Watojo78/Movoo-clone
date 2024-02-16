import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { SearchComponent } from "./shared/search/search.component";
import { SettingsComponent } from "./shared/settings/settings.component";


@Component({
    selector: 'movoo-clone',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LayoutComponent, SidebarComponent, SearchComponent, SettingsComponent]
})
export class AppComponent {
  title = 'movoo-clone';
}
