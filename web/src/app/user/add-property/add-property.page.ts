import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {




  constructor(private modalController: ModalController) { }
  ngOnInit(): void {
    
  }

  property_form: FormGroup = new FormGroup({
    p_name: new FormControl(null, Validators.required),
    d_name: new FormControl(null, Validators.required),
    d_amperage: new FormControl(null, Validators.required),
    d_wattage: new FormControl(null, Validators.required),
    d_operating_time: new FormControl(null, Validators.required),
  })

  

  type_property= [
    {type: 'House'},
    {type: 'Store'},
    {type: 'Agency'},
    {type: 'Company'},
    
  ]
  
}
