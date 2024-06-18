import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PowercalcServiceService } from 'src/app/services/powercalc-service.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {

  selectedProperty: string | null = null;

  constructor(private modalController: ModalController,
    private alertController: AlertController,
    private router: Router,
    private http: PowercalcServiceService
  ) { }

  ngOnInit(): void {

  }

  property_form: FormGroup = new FormGroup({
    p_name: new FormControl(null, Validators.required),
    de_name: new FormControl(null, Validators.required),
    de_amperage: new FormControl(null, Validators.required),
    de_wattage: new FormControl(null, Validators.required),
    de_usage_time: new FormControl(null, Validators.pattern('^[0-9]*$')),
    de_usage_day: new FormControl(null, Validators.pattern('^[0-9]*$')),
  });

  validateNumeric(event: any) {
    const input = event.target;
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, '');
  }

  type_property = [
    {
      "type": "House",
      "devices": [
        {"name": "Refrigerator", "amperage": "1.5", "wattage": "150"},
        {"name": "Freezer", "amperage": "1.0", "wattage": "100"},
        {"name": "Oven", "amperage": "10.0", "wattage": "2000"},
        {"name": "Microwave", "amperage": "5.0", "wattage": "1000"},
        {"name": "Electric stove", "amperage": "15.0", "wattage": "3000"},
        {"name": "Extractor hood", "amperage": "0.5", "wattage": "75"},
        {"name": "Dishwasher", "amperage": "10.0", "wattage": "1800"},
        {"name": "Washing machine", "amperage": "10.0", "wattage": "2000"},
        {"name": "Dryer", "amperage": "15.0", "wattage": "3000"},
        {"name": "Television", "amperage": "0.5", "wattage": "120"},
        {"name": "DVD/Blu-ray player", "amperage": "0.2", "wattage": "20"},
        {"name": "Game console", "amperage": "0.8", "wattage": "90"},
        {"name": "Desktop computer", "amperage": "1.0", "wattage": "300"},
        {"name": "Laptop", "amperage": "0.5", "wattage": "65"},
        {"name": "Router/modem", "amperage": "0.2", "wattage": "10"},
        {"name": "Electric heating system", "amperage": "20.0", "wattage": "4000"},
        {"name": "Air conditioning", "amperage": "15.0", "wattage": "3500"},
        {"name": "Fan", "amperage": "0.5", "wattage": "50"},
        {"name": "Lighting (lamps, chandeliers, bulbs)", "amperage": "0.1", "wattage": "60"},
        {"name": "Vacuum cleaner", "amperage": "5.0", "wattage": "1000"},
        {"name": "Iron", "amperage": "10.0", "wattage": "2000"},
        {"name": "Coffee machine", "amperage": "5.0", "wattage": "1000"},
        {"name": "Toaster", "amperage": "7.5", "wattage": "1500"},
        {"name": "Blender", "amperage": "3.0", "wattage": "600"},
        {"name": "Food processor", "amperage": "3.0", "wattage": "600"},
        {"name": "Electric kettle", "amperage": "10.0", "wattage": "2000"},
        {"name": "Water heater", "amperage": "15.0", "wattage": "3000"},
        {"name": "Hair dryer", "amperage": "10.0", "wattage": "2000"},
        {"name": "Electric shaver", "amperage": "0.2", "wattage": "10"},
        {"name": "Electric toothbrushes", "amperage": "0.1", "wattage": "5"}
      ]
    },
    {
      "type": "Store",
      "devices": [
        {"name": "Lighting (ceiling lights, spotlights, neon lights)", "amperage": "1.0", "wattage": "100"},
        {"name": "Display refrigerators", "amperage": "2.0", "wattage": "200"},
        {"name": "Display freezers", "amperage": "2.0", "wattage": "200"},
        {"name": "Cash registers", "amperage": "0.5", "wattage": "50"},
        {"name": "POS computers", "amperage": "1.0", "wattage": "150"},
        {"name": "Barcode scanners", "amperage": "0.2", "wattage": "10"},
        {"name": "Electric labelers", "amperage": "0.5", "wattage": "30"},
        {"name": "Electronic scales", "amperage": "0.5", "wattage": "30"},
        {"name": "Air conditioning/heating", "amperage": "10.0", "wattage": "2000"},
        {"name": "Surveillance systems (cameras, screens)", "amperage": "1.0", "wattage": "100"},
        {"name": "Audio systems (speakers, amplifiers)", "amperage": "1.0", "wattage": "100"},
        {"name": "Credit card machines", "amperage": "0.5", "wattage": "30"},
        {"name": "Display televisions", "amperage": "1.0", "wattage": "150"},
        {"name": "Coffee machines", "amperage": "5.0", "wattage": "1000"}
      ]
    },
    {
      "type": "Agency",
      "devices": [
        {"name": "Desktop computers", "amperage": "1.0", "wattage": "300"},
        {"name": "Laptops", "amperage": "0.5", "wattage": "65"},
        {"name": "Printers", "amperage": "2.0", "wattage": "500"},
        {"name": "Photocopiers", "amperage": "2.5", "wattage": "600"},
        {"name": "Scanners", "amperage": "0.5", "wattage": "50"},
        {"name": "Fax machines", "amperage": "1.0", "wattage": "100"},
        {"name": "Routers/modems", "amperage": "0.2", "wattage": "10"},
        {"name": "Landline phones", "amperage": "0.1", "wattage": "5"},
        {"name": "Lighting", "amperage": "1.0", "wattage": "100"},
        {"name": "Air conditioning", "amperage": "10.0", "wattage": "2000"},
        {"name": "Electric heaters", "amperage": "10.0", "wattage": "2000"},
        {"name": "Television or projection screens", "amperage": "1.0", "wattage": "150"},
        {"name": "Videoconference systems", "amperage": "1.0", "wattage": "100"},
        {"name": "Coffee machines", "amperage": "5.0", "wattage": "1000"},
        {"name": "Electric kettles", "amperage": "10.0", "wattage": "2000"},
        {"name": "Fans", "amperage": "1.0", "wattage": "50"},
        {"name": "Security systems (cameras, alarms)", "amperage": "1.0", "wattage": "100"}
      ]
    },
    {
      "type": "Company",
      "devices": [
        {"name": "Computer servers", "amperage": "5.0", "wattage": "1000"},
        {"name": "Data storage systems", "amperage": "3.0", "wattage": "600"},
        {"name": "Communication networks", "amperage": "2.0", "wattage": "400"},
        {"name": "Desktop and laptop computers", "amperage": "1.0", "wattage": "300"},
        {"name": "Network equipment (routers, switches)", "amperage": "1.0", "wattage": "100"},
        {"name": "Printers and copiers", "amperage": "2.5", "wattage": "600"},
        {"name": "Telecommunication equipment", "amperage": "1.5", "wattage": "300"},
        {"name": "Lighting", "amperage": "1.0", "wattage": "100"},
        {"name": "HVAC systems", "amperage": "15.0", "wattage": "3000"},
        {"name": "Video conferencing systems", "amperage": "2.0", "wattage": "400"},
        {"name": "Security systems", "amperage": "1.0", "wattage": "100"},
        {"name": "Audio/visual equipment", "amperage": "1.0", "wattage": "200"},
        {"name": "Coffee machines", "amperage": "5.0", "wattage": "1000"},
        {"name": "Electric kettles", "amperage": "10.0", "wattage": "2000"},
        {"name": "Refrigerators", "amperage": "1.5", "wattage": "150"},
        {"name": "Microwaves", "amperage": "5.0", "wattage": "1000"},
        {"name": "Dishwashers", "amperage": "10.0", "wattage": "1800"}
      ]
    }
  ];

  onPropertyChange(event: any) {
    this.selectedProperty = event?.detail?.value;
    this.property_form.controls['p_name'].setValue(this.selectedProperty);
    this.property_form.controls['de_name'].reset();
    this.property_form.controls['de_amperage'].reset();
    this.property_form.controls['de_wattage'].reset();
  }

  onDeviceChange(event: any) {

    const selectedDeviceName = event?.detail?.value;
    const property = this.type_property.find(
      (p) => p.type === this.selectedProperty
    );
    const selectedDevice = property?.devices.find(
      (device) => device?.name === selectedDeviceName
    );

    if (selectedDevice) {
      this.property_form.controls['de_amperage'].setValue(selectedDevice?.amperage);
      this.property_form.controls['de_wattage'].setValue(selectedDevice?.wattage);
    }
  }

  getDevices(): any[] {
    const property = this.type_property.find(
      (p) => p.type === this.selectedProperty
    );
    return property ? property.devices : [];
  }

  async onSubmit() {

    if (this.property_form.valid) {
      console.log(this.property_form.value);

      const alert = await this.alertController.create({
        header: 'Confirm Submission',
        message: 'Do you really want to submit the form?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Form submission cancelled');
            }
          },
          {
            text: 'OK',
            handler: () => {
              if(this.selectedProperty === 'Store'){
                this.Adddevicestore()
                console.log('Form submitted');
                this.modalController.dismiss();
                this.router.navigate(['/user/add-property']);
              }
              if(this.selectedProperty === 'House'){
                this.Adddevicehouse()
                console.log('Form submitted');
                this.modalController.dismiss();
                this.router.navigate(['/user/add-property']);
              }
              if(this.selectedProperty === 'Agency'){
                this.Adddeviceagency()
                console.log('Form submitted');
                this.modalController.dismiss();
                this.router.navigate(['/user/add-property']);
              }
              if(this.selectedProperty === 'Company'){
                this.Adddevicecompany()
                console.log('Form submitted');
                this.modalController.dismiss();
                this.router.navigate(['/user/add-property']);
              }

            }
          }
        ]
      });
      await alert.present();
    }
     else {
      console.log('Form is incomplete');
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please complete all fields',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
          },
        ]
      });

      await alert.present();
    }

  }


  Adddevicestore(){
    this.http.AddDeviceStore(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        window.location.reload();
      }

    })
  }

  Adddevicehouse(){
    this.http.AddDeviceHouse(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        window.location.reload();

      }
    })
  }
  Adddeviceagency(){
    this.http.AddDeviceAgency(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        window.location.reload();

      }
    })
  }
  Adddevicecompany(){
    this.http.AddDeviceCompany(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        window.location.reload();

      }
    })
  }
}
