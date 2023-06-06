import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [AboutComponent, HomeComponent, ContactComponent, GalleryComponent, HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class PageModule { }
