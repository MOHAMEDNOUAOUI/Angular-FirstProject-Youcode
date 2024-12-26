import { Routes } from '@angular/router';
import { DashboardAdminComponent } from './features/dashboard-admin/dashboard-admin.component';
import { HomePageComponent } from './features/dashboard-admin/Pages/home-page/home-page.component';
import { SurveyComponent } from './features/survey/survey.component';
import { SurveyEditionComponent } from './features/survey-edition/survey-edition.component';

export const routes: Routes = [
    {
        path:'Dashboard',
        component: DashboardAdminComponent,
        children:[
            {path:'' , component:HomePageComponent},
            {path:'SurveyEdition/:id' , component:SurveyEditionComponent},
            {path:'Survey' , component:SurveyComponent}
        ]
    },
];
