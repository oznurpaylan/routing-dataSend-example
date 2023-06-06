import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { AdminHomeComponent } from './admin-page/home/home.component';
import { MemberComponent } from './admin-page/member/member.component';
import { LayoutComponent } from './page/layout/layout.component';
import { AdminLayoutComponent } from './admin-page/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'hakkimizda', component: AboutComponent },
      { path: 'iletisim', component: ContactComponent },
      { path: 'galeri', component: GalleryComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'uyeler', component: MemberComponent }, //adminin altında tanımlamakiçin yol---> admin/uyeler
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
