import { NotificationService } from 'src/app/core/services/notification.service';
import { Component, Input } from '@angular/core';
import { INotificationData } from 'src/app/core/interfaces/notification-data.interface';
import { INotification } from 'src/app/core/interfaces/notification.interface';

const DEFAULT_NOTIFICATION_DATA: INotificationData = {
  delay: 3000,
  text: 'Unknown notification'
};
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements INotification {

  @Input() data: INotificationData = DEFAULT_NOTIFICATION_DATA;

  constructor(public notificationService: NotificationService) {}
}
