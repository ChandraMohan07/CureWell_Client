import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    alertify.set('notifier', 'position', 'top-right');
  }

  showAlertLog(message: string) {
    alertify.alert(message);
  }
}
