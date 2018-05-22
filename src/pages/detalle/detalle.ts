import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoService } from '../../services/producto.service';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  producto = {id:null, nombre:null, descripcion:null, precio:null};
  id = null;
  successCallback = null;
  errorCallback = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public productoService: ProductoService) {
    this.id = navParams.get('id');
    if(this.id!=0){
      this.producto = productoService.getProducto(this.id);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
  addProducto(){
    if (this.id!=0) {
      //estamos editando
      this.productoService.editarProducto(this.producto);
      alert('Producto editado con exito!');
    }else{
      this.producto.id = Date.now();
      this.productoService.crearProducto(this.producto);
      alert('Producto creado con exito!');
    }
    this.navCtrl.pop();
  }
  borrarProducto(){
    this.productoService.borrarProducto(this.producto);
    alert('Producto eliminado con exito!');
    this.navCtrl.pop();
  }

}
