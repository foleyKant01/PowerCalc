import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PowercalcServiceService } from 'src/app/services/powercalc-service.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.page.html',
  styleUrls: ['./view-property.page.scss'],
})
export class ViewPropertyPage implements OnInit {

  house: any;
  store: any;
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
    if(this.propertyType==='House'){
      this.Houseproperty()
    }
    if(this.propertyType==='Store'){
      this.Storeproperty()
    }
    if(this.propertyType==='Agency'){
      this.Agencyproperty()
    }
    if(this.propertyType==='Company'){
      this.Companyproperty()
    }
  }

  Houseproperty(): void {
    this.http.AllHouseDevice().subscribe({
      next: (response: any) => {
        this.house = response?.devices; // Stocker les produits dans le tableau
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
        this.store = response?.devices; // Stocker les produits dans le tableau
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
        this.agency = response?.devices; // Stocker les produits dans le tableau
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
        this.company = response?.devices; // Stocker les produits dans le tableau
        console.log(this.company)
      },
      error: (error) => {
        console.error('Failed to load products:', error);
      }
    });
  }

}
