import { Injectable, Query } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class ProductoService{
    constructor(
        //public afDB: AngularFireDatabase
    ){

    }
    productos = [{id:'3', nombre:'CD Docto Krapula', descripcion:'Bombea', precio:12},
                {id:'1', nombre:'CD Mago de Oz', descripcion:'Barakaldo', precio:15},
                {id:'2', nombre:'CD Type O Negative', descripcion:'Slow, Deep and Hard ', precio:10},
                {id:'4', nombre:'CD Sonata Arctica', descripcion:'Unia', precio:11}];
    public getProductos(){
        return this.productos;
        // this.afDB.database.ref('test/').on('value', function(snapshot){
        //     return snapshotToArray(snapshot)
        // })
        //return this.afDB.list('test/').valueChanges();
    }
    public getProducto(id){
        return this.productos.filter(function(e, i){return e.id==id})[0] || {id:null, nombre:null, descripcion:null, precio:null};
        //return this.afDB.list('test/').valueChanges().filter(function(e, i){return e.forEach(id)==id})[0] || {id:null, nombre:null, descripcion:null, precio:null};
      }
    public crearProducto(producto){
        this.productos.push(producto);
        //this.afDB.database.ref('test/'+producto.id).set(producto);
    }
    public editarProducto(producto){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id==producto.id) {
                this.productos[i]=producto;   
            }            
        }
    }
    public borrarProducto(producto){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id==producto.id) {
                this.productos.splice(i,1);   
            }            
        }
    }
    
}