import { Component } from '@angular/core';

interface Product {
  productName: string;
  productCategory: string;
  productPrice: string;
  productDescription: string;
  productEnterDate: string;
  productExpireDate: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formtest';
  productData:Product={
    productName: '',
    productCategory: '',
    productPrice: '',
    productDescription: '',
    productEnterDate : '',
    productExpireDate:''
  }

   
  productsList: Product={
    productName: '',
    productCategory: '',
    productPrice: '',
    productDescription: '',
    productEnterDate: '',
    productExpireDate: ''
  };


  ngOnInit():void{
    console.log(this.productsList);

  }

  addProductDetails(){
    this.productsList=this.productData
    console.log(this.productsList);
    
  // Save the updated productsList to localStorage

    
  }



}
