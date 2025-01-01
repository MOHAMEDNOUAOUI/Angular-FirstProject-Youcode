import { Routes } from '@angular/router';
import { DashboardAdminComponent } from './features/dashboard-admin/dashboard-admin.component';
import { SurveyComponent } from './features/survey/survey.component';
import { SurveyEditionComponent } from './features/survey-edition/survey-edition.component';
import { ParticipateComponent } from './features/participate/participate.component';
import { HomePageComponent } from './features/participate/Pages/home-page/home-page.component';
import { AdminHomePage } from './features/dashboard-admin/Pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path:'Dashboard',
        component: DashboardAdminComponent,
        children:[
            {path:'' , component:AdminHomePage},
            {path:'SurveyEdition/:year' , component:SurveyEditionComponent},
            {path:'Survey' , component:SurveyComponent}
        ]
    },
    {
        path:'',
        component:HomePageComponent,
        children:[
        
        ]
    },
    {
        path:'Participate/:id',
        component:ParticipateComponent,
    },
    
];
