import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';


const routes: Routes = [
  {path: "", component:LandingPageComponent},
  {path: "landing", component:LandingPageComponent},
  { path: "recom", component: RecommendationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { 

  
}
