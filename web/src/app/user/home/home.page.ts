import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PowercalcServiceService } from 'src/app/services/powercalc-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  propertys: any[] = []; // Tableau pour stocker les produits
  data: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: PowercalcServiceService
    ) {  }

  ngOnInit() {
    // this.Readallaroperty()

  }

  // Readallaroperty(): void {
  //   this.http.ReadAllProperty().subscribe({
  //     next: (response: any) => {
  //       this.propertys = response || []; // Stocker les produits dans le tableau
  //       if(response?.products)  {
  //         this.data = response?.products
  //         // console.log(this.data)

  //       }
  //     },
  //     error: (error) => {
  //       console.error('Failed to load products:', error);
  //     }
  //   });
  // }

}
