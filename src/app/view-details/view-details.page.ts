import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {
  data : any = [];
  constructor(private router: Router, private constants: AppConstants) {}

  ngOnInit() {
    this.data = this.constants.tempData;
    
    if (!this.data.length) this.goBack();
  }

  goBack() {        
    this.router.navigate(['/home'])
  }

  deleteAll() {
    this.constants.tempData = [];
    this.constants.showAlert('Information', 'Saved data has been deleted');
    this.goBack();
  }

}
