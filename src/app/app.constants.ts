import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {

    constructor(private alertController: AlertController) {}
    public tempData = [];
    
    public showAlert(header: string, message: string) {
        this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
}