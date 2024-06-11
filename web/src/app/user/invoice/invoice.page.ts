import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PowercalcServiceService } from 'src/app/services/powercalc-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  house: any;
  store: any;
  device_invoice: any;
  devices_info: any;
  total_invoice: any;
  agency: any;
  company: any;
  propertyType: string | undefined ;
  productUid: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private http: PowercalcServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propertyType = params['type']; // (+) converts string 'id' to a number
      console.log(this.propertyType)
    });
    this.Choose()
  }

  Choose(): void{
    if(this.propertyType==='house'){
      this.Houseproperty()
    }
    if(this.propertyType==='store'){
      this.Storeproperty()
    }
    if(this.propertyType==='agency'){
      this.Agencyproperty()
    }
    if(this.propertyType==='company'){
      this.Companyproperty()
    }
  }

  Houseproperty(): void {
    this.http.AllHouseDevice().subscribe({
      next: (response: any) => {
        this.house = response?.devices;
        console.log(this.house)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }

  Storeproperty(): void {
    this.http.AllStoreDevice().subscribe({
      next: (response: any) => {
        this.total_invoice = response?.total_invoice;
        console.log(this.total_invoice)
        this.devices_info = response?.devices_info;
        console.log(this.devices_info)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }

  Agencyproperty(): void {
    this.http.AllAgencyDevice().subscribe({
      next: (response: any) => {
        this.agency = response?.devices;
        console.log(this.agency)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }

  Companyproperty(): void {
    this.http.AllCompanyDevice().subscribe({
      next: (response: any) => {
        this.company = response?.devices;
        console.log(this.company)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }

}
