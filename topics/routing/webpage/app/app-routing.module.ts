import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageSliderComponent } from './about/components/imageslider/imageslider.component';


const routes: Routes = [
{path: 'home',component:HomeComponent},
{path:'about',component:ImageSliderComponent},
{path:'contact',component:ContactComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for 404


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
