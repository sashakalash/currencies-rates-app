import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsHostComponent } from './components/notifications-host/notifications-host.component';
import { ConfirmationDialodComponent } from './components/confirmation-dialod/confirmation-dialod.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RateListComponent } from './components/rate-list/rate-list.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastDirective } from './directives/toast.directive';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from './reducers/root-store.module';
import { StatusPipe } from './core/pipes/status.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NotificationsHostComponent,
    LoginComponent,
    NotFoundComponent,
    ContentWrapperComponent,
    ToastDirective,
    ToastComponent,
    NotificationsHostComponent,
    ConfirmationDialodComponent,
    RateListComponent,
    StatusPipe,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RootStoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
