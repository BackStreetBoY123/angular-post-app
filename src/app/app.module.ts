import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componetns/navbar/navbar.component';
import { AboutComponent } from './componetns/about/about.component';
import { ContactComponent } from './componetns/contact/contact.component';
import { PostsComponent } from './componetns/posts/posts.component';
import { PostComponent } from './componetns/post/post.component';
import { FooterComponent } from './componetns/footer/footer.component';
import { HomeComponent } from './componetns/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    PostsComponent,
    PostComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
