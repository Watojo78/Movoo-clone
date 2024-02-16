import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { GenresComponent } from './pages/genres/genres.component';

export const routes: Routes = [
    {
        path: 'movies',
        component: LayoutComponent,
        children: [
            {
                path: 'now-playing',
                component: NowPlayingComponent,
            },
            {
                path: 'upcoming',
                component: UpcomingComponent,
            },
            {
                path: 'popular',
                component: PopularComponent,
            },
            {
                path: 'top-rated',
                component: TopRatedComponent,
            },
            {
                path: 'genres',
                component: GenresComponent,
            }
        ] 
    },
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
];
