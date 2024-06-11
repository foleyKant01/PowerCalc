import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowercalcServiceService {

  private apiUrl = 'mysql+pymysql://root:@localhost/powercalc';


  constructor(private http: HttpClient, private api: HttpClient) { }


  CreateUser(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://127.0.0.1:5000/api/user/createuser", body, httpOptions)
  }

  LoginUser(body:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post('http://127.0.0.1:5000/api/user/loginuser', body, httpOptions);
  }

  AddDeviceStore(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://127.0.0.1:5000/api/property/AddDeviceStore", body, httpOptions)
  }

  AddDeviceHouse(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://127.0.0.1:5000/api/property/AddDeviceHouse", body, httpOptions)
  }

  AddDeviceAgency(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://127.0.0.1:5000/api/property/AddDeviceAgency", body, httpOptions)
  }

  AddDeviceCompany(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://127.0.0.1:5000/api/property/AddDeviceCompany", body, httpOptions)
  }

  GenerateInvoice(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://127.0.0.1:5000/api/property/GenerateInvoice", body, httpOptions)
  }


  AllStoreDevice(): Observable<any>{
    return this.http.get<any[]>("http://127.0.0.1:5000/api/property/AllStoreDevice")
  }

  AllHouseDevice(): Observable<any>{
    return this.http.get<any[]>("http://127.0.0.1:5000/api/property/AllHouseDevice")
  }

  AllAgencyDevice(): Observable<any>{
    return this.http.get<any[]>("http://127.0.0.1:5000/api/property/AllAgencyDevice")
  }

  AllCompanyDevice(): Observable<any>{
    return this.http.get<any[]>("http://127.0.0.1:5000/api/property/AllCompanyDevice")
  }

}




