import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PowercalcServiceService } from 'src/app/services/powercalc-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  house: any;
  store: any;
  device_invoice: any;
  agency: any;
  company: any;
  propertyType: string | undefined ;
  productUid: string | undefined;

  propertys: any[] = []; // Tableau pour stocker les produits
  data: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: PowercalcServiceService) {  }

  ngOnInit() {
    this.Houseproperty()
    this.Storeproperty()
    this.Agencyproperty()
    this.Companyproperty()

  }

  house_property = [
    {
      type: 'House'
    },
  ];
  store_property = [
    {
      type: 'Store'
    },
  ];
    agency_property = [
    {
      type: 'Agency'
    },
  ];
    company_property = [
    {
      type: 'Company'
    }
  ];

  Singleproperty(de_property: string): void {
    this.router.navigate(['/user/view-property', de_property]);
  }


  Houseproperty(): void {
    this.http.AllHouseDevice().subscribe({
      next: (response: any) => {
        this.house = response?.devices_info;
        console.log('ok')
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
        this.store = response?.devices_info;
        console.log('ok')
        console.log(this.store)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }

  Agencyproperty(): void {
    this.http.AllAgencyDevice().subscribe({
      next: (response: any) => {
        this.agency = response?.devices_info;
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
        this.company = response?.devices_info;
        console.log(this.company)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }


}
