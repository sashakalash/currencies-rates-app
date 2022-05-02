import { ComponentType } from '@angular/cdk/portal';
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';

import { INotificationData } from 'src/app/core/interfaces/notification-data.interface';
import { INotification } from '../interfaces/notification.interface';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  private data: INotificationData;
  public host: ViewContainerRef;

  private addDynamicComponent(component: ComponentType<INotification>): void {
    const factory = this.factoryResolver.resolveComponentFactory(component);
    const notification = factory.create(this.host.injector);
    notification.instance.data = this.data;
    notification.instance.closeEmitter?.subscribe(res => this.hideNotification());
    this.host.insert(notification.hostView);
    this.host.element.nativeElement.parentElement.classList.toggle('host');
  }

  public showNotification(component: ComponentType<INotification>, data: INotificationData): void {
    this.data = data;
    this.addDynamicComponent(component);
    // setTimeout(() => this.hideNotification(), this.data.delay);
  }

  public showConfirmationDialog(component: ComponentType<INotification>, data: INotificationData): void {
    this.data = data;
    this.addDynamicComponent(component);
  }

  public hideNotification(): void {
    this.host.element.nativeElement.parentElement.classList.toggle('host');
    this.host.clear();
  }

}
