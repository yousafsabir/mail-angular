import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './pages/mail/mail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SidebarContactComponent } from './components/sidebar-contact/sidebar-contact.component';
import { SidebarCalanderComponent } from './components/sidebar-calander/sidebar-calander.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    SidebarComponent,
    MainComponent,
    SidebarContactComponent,
    SidebarCalanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
