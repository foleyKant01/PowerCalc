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
    de_usage_time: new FormControl(null, Validators.required),
  });

  type_property = [
    {
      "type": "House",
      "devices": [
        {"name": "Refrigerator", "amperage": "1.5A", "wattage": "150W"},
        {"name": "Freezer", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Oven", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Microwave", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Electric stove", "amperage": "15.0A", "wattage": "3000W"},
        {"name": "Extractor hood", "amperage": "0.5A", "wattage": "75W"},
        {"name": "Dishwasher", "amperage": "10.0A", "wattage": "1800W"},
        {"name": "Washing machine", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Dryer", "amperage": "15.0A", "wattage": "3000W"},
        {"name": "Television", "amperage": "0.5A", "wattage": "120W"},
        {"name": "DVD/Blu-ray player", "amperage": "0.2A", "wattage": "20W"},
        {"name": "Game console", "amperage": "0.8A", "wattage": "90W"},
        {"name": "Desktop computer", "amperage": "1.0A", "wattage": "300W"},
        {"name": "Laptop", "amperage": "0.5A", "wattage": "65W"},
        {"name": "Router/modem", "amperage": "0.2A", "wattage": "10W"},
        {"name": "Electric heating system", "amperage": "20.0A", "wattage": "4000W"},
        {"name": "Air conditioning", "amperage": "15.0A", "wattage": "3500W"},
        {"name": "Fan", "amperage": "0.5A", "wattage": "50W"},
        {"name": "Lighting (lamps, chandeliers, bulbs)", "amperage": "0.1A", "wattage": "60W"},
        {"name": "Vacuum cleaner", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Iron", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Coffee machine", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Toaster", "amperage": "7.5A", "wattage": "1500W"},
        {"name": "Blender", "amperage": "3.0A", "wattage": "600W"},
        {"name": "Food processor", "amperage": "3.0A", "wattage": "600W"},
        {"name": "Electric kettle", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Water heater", "amperage": "15.0A", "wattage": "3000W"},
        {"name": "Hair dryer", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Electric shaver", "amperage": "0.2A", "wattage": "10W"},
        {"name": "Electric toothbrushes", "amperage": "0.1A", "wattage": "5W"}
      ]
    },
    {
      "type": "Store",
      "devices": [
        {"name": "Lighting (ceiling lights, spotlights, neon lights)", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Display refrigerators", "amperage": "2.0A", "wattage": "200W"},
        {"name": "Display freezers", "amperage": "2.0A", "wattage": "200W"},
        {"name": "Cash registers", "amperage": "0.5A", "wattage": "50W"},
        {"name": "POS computers", "amperage": "1.0A", "wattage": "150W"},
        {"name": "Barcode scanners", "amperage": "0.2A", "wattage": "10W"},
        {"name": "Electric labelers", "amperage": "0.5A", "wattage": "30W"},
        {"name": "Electronic scales", "amperage": "0.5A", "wattage": "30W"},
        {"name": "Air conditioning/heating", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Surveillance systems (cameras, screens)", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Audio systems (speakers, amplifiers)", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Credit card machines", "amperage": "0.5A", "wattage": "30W"},
        {"name": "Display televisions", "amperage": "1.0A", "wattage": "150W"},
        {"name": "Coffee machines", "amperage": "5.0A", "wattage": "1000W"}
      ]
    },
    {
      "type": "Agency",
      "devices": [
        {"name": "Desktop computers", "amperage": "1.0A", "wattage": "300W"},
        {"name": "Laptops", "amperage": "0.5A", "wattage": "65W"},
        {"name": "Printers", "amperage": "2.0A", "wattage": "500W"},
        {"name": "Photocopiers", "amperage": "2.5A", "wattage": "600W"},
        {"name": "Scanners", "amperage": "0.5A", "wattage": "50W"},
        {"name": "Fax machines", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Routers/modems", "amperage": "0.2A", "wattage": "10W"},
        {"name": "Landline phones", "amperage": "0.1A", "wattage": "5W"},
        {"name": "Lighting", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Air conditioning", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Electric heaters", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Television or projection screens", "amperage": "1.0A", "wattage": "150W"},
        {"name": "Videoconference systems", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Coffee machines", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Electric kettles", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Fans", "amperage": "1.0A", "wattage": "50W"},
        {"name": "Security systems (cameras, alarms)", "amperage": "1.0A", "wattage": "100W"}
      ]
    },
    {
      "type": "Company",
      "devices": [
        {"name": "Computer servers", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Data storage systems", "amperage": "3.0A", "wattage": "600W"},
        {"name": "Communication networks", "amperage": "2.0A", "wattage": "400W"},
        {"name": "Desktop and laptop computers", "amperage": "1.0A", "wattage": "300W"},
        {"name": "Network equipment (routers, switches)", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Printers and copiers", "amperage": "2.5A", "wattage": "600W"},
        {"name": "Telecommunication equipment", "amperage": "1.5A", "wattage": "300W"},
        {"name": "Lighting", "amperage": "1.0A", "wattage": "100W"},
        {"name": "HVAC systems", "amperage": "15.0A", "wattage": "3000W"},
        {"name": "Video conferencing systems", "amperage": "2.0A", "wattage": "400W"},
        {"name": "Security systems", "amperage": "1.0A", "wattage": "100W"},
        {"name": "Audio/visual equipment", "amperage": "1.0A", "wattage": "200W"},
        {"name": "Coffee machines", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Electric kettles", "amperage": "10.0A", "wattage": "2000W"},
        {"name": "Refrigerators", "amperage": "1.5A", "wattage": "150W"},
        {"name": "Microwaves", "amperage": "5.0A", "wattage": "1000W"},
        {"name": "Dishwashers", "amperage": "10.0A", "wattage": "1800W"}
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


  Adddevicestore(){
    this.http.AddDeviceStore(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        // if (reponse.status === "success") {
        //   console.log("Redirection vers la page home");
        //   this.router.navigate(['/auth','success']);
        // } else {
        //   console.log("Échec de la connexion, réponse:", reponse);
        // }
      }
    })
  }

  Adddevicehouse(){
    this.http.AddDeviceHouse(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        // if (reponse.status === "success") {
        //   console.log("Redirection vers la page home");
        //   this.router.navigate(['/auth','success']);
        // } else {
        //   console.log("Échec de la connexion, réponse:", reponse);
        // }
      }
    })
  }
  Adddeviceagency(){
    this.http.AddDeviceAgency(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        // if (reponse.status === "success") {
        //   console.log("Redirection vers la page home");
        //   this.router.navigate(['/auth','success']);
        // } else {
        //   console.log("Échec de la connexion, réponse:", reponse);
        // }
      }
    })
  }
  Adddevicecompany(){
    this.http.AddDeviceCompany(this.property_form.value).subscribe({
      next: (reponse:any)=>{
        console.log("OK");
        console.log(this.selectedProperty)
        console.log(reponse);
        // if (reponse.status === "success") {
        //   console.log("Redirection vers la page home");
        //   this.router.navigate(['/auth','success']);
        // } else {
        //   console.log("Échec de la connexion, réponse:", reponse);
        // }
      }
    })
  }
}
