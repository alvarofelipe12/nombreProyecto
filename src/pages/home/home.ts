import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { ProductoService } from '../../services/producto.service';
//import { DetallePage } from '../detalle/detalle';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos=[];
  items:Observable<any[]>;
  @ViewChild('myNav') nav: NavController
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    //public database: AngularFireDatabase,
    public productoService: ProductoService,
    public platform: Platform
  ) {
    this.productos = productoService.getProductos();
  }
  public goToDetail(id){
    // this.navCtrl.push(DetallePage, {id:id});
  }
  public crearProducto(){
    // this.navCtrl.push(DetallePage, {id:0});
  }
  ionViewDidLoad() {  
    //Verifica si ya se encuentra lista la plataforma  
    this.platform.ready().then(() => {
          //Realiza el llamado al plugin e invoca segun el resultado la funcion correspondiente
          (<any>window).MiPlugin.saludo('Mundo!!!', this.successCallback, this.errorCallback);
    });
  }

  //Funcion para desplegar la respuesta cuando es satisfactorio
  successCallback(message){
      alert(message);
  }

  //Funcion si hubo un error
  errorCallback(){
      alert("Hubo un error");
  }
}