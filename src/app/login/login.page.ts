import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() { }

  public autenticar(): void {
    console.log("Autenticação...");    
    this.navController.navigateRoot("/monitoramento", { animationDirection: "forward" });
  }

}
