import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

    //@ts-ignore
    userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
    is_user_logged_in = !!sessionStorage.getItem('infoLogin');


  public appPages = [
    { title: 'Home', url: '/user/home', icon: 'home' },
    { title: 'History', url: '/user/history', icon: 'compass' },
    { title: 'Notifications', url: '/user/notifications', icon: 'notifications' },
    // { title: 'Profile', url: '/user/profile', icon: 'person' },
    // { title: 'Favorites', url: '/user/favorites', icon: 'heart' },
    // { title: 'My Tickets', url: '/user/tickets', icon: 'ticket' },

  ];
  public labels = ['Change secret code'];
  
  constructor() { }

  logout(){
    $.removeCookie('isLoggedIn', { path: '/' });
    sessionStorage.removeItem('infoLogin')
    window.location.href = '/'
  }

  ngOnInit() {
    // console.log(this.userInfo);
    // throw new Error("Test Thrown Error");
  }


}
