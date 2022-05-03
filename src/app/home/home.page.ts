import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  data: any = {};
  
  constructor(private router: Router, private constants: AppConstants) {}
  
  ngOnInit() { 
  }
  

  submitData() {
    if (!this.data.name) {
      this.constants.showAlert('Error', 'Please enter a name');
      return;
    }
    
    if (!this.data.address) {
      this.constants.showAlert('Error', 'Please enter an address');
      return;
    }

    if (!this.data.item) {
      this.constants.showAlert('Error', 'Please enter an item');
      return;
    }

    this.constants.tempData.push(this.data);

    this.router.navigate(['/view-details'])
  }

}
