import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { SettingsComponent } from "../shared/settings/settings.component";
import { SearchComponent } from "../shared/search/search.component";

@Component({
    selector: 'layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [SidebarComponent, RouterOutlet, SettingsComponent, SearchComponent]
})
export class LayoutComponent {

}
