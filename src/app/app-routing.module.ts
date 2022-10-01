import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componetns/contact/contact.component';
import { HomeComponent } from './componetns/home/home.component';
import { AboutComponent } from './componetns/about/about.component';
import { PostsComponent } from './componetns/posts/posts.component';
import { PostComponent } from './componetns/post/post.component';


const routes: Routes = [
{ path : "" , component: HomeComponent},
{ path:  'contact',  pathMatch: "full", component:  ContactComponent},
{ path:  'about',  pathMatch: "full", component:  AboutComponent},
{ path:  'posts',  pathMatch: "full", component:  PostsComponent},
{ path:  'post/:id',  pathMatch: "full", component:  PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
