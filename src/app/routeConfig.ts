import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details page'
    }
];

export default routeConfig;