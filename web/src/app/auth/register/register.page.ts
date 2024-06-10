import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PowercalcServiceService } from 'src/app/services/powercalc-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private router: Router, private http: PowercalcServiceService ) { }


  ngOnInit() {
  }

  createuser: FormGroup = new FormGroup(
    {
      fullname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    }
  )

  Createuser(){
    this.http.CreateUser(this.createuser.value).subscribe({
      next: (reponse:any)=>{
        console.log(reponse);
        if (reponse.status === "success") {
          console.log("Redirection vers la page home");
          this.router.navigate(['/auth','success']);
        } else {
          console.log("Échec de la connexion, réponse:", reponse);
        }
      }
    })
  }



}
