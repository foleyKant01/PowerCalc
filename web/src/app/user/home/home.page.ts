import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  propertys: any[] = []; // Tableau pour stocker les produits
  data: any;

  constructor(private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    // this.Readallaroperty()

  }

  type_property = [
    {
      type: 'House'
    },
    {
      type: 'Store'
    },
    {
      type: 'Agency'
    },
    {
      type: 'Company'
    }
  ];

  Singleproperty(type: string): void {
    this.router.navigate(['/user/view-property', type]);
  }

}
