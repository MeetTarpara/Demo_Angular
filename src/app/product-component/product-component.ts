// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../Services/productService';
// import { Product } from '../Models/productModel';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-product-component',
//   imports: [CommonModule],
//   templateUrl: './product-component.html',
//   styleUrl: './product-component.css',
// })

// export class ProductComponent implements OnInit {

//   products: Product[] = [];

//   constructor(private productService: ProductService) {}
 
//   ngOnInit(): void {
//     this.productService.getProducts().subscribe({
//       next: (data) => {
//         this.products = data;
//       },
//       error: (err) => {
//         console.error('Error fetching products', err);
//       }
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/productService';
import { Product } from '../Models/productModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-component.html',
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  // ADD FORM MODEL
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0
  };

  // EDIT ROW STATE
  editedProductId: number | null = null;
  editedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
      this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }

 
  addProduct() {
    if (!this.newProduct.name || this.newProduct.price <= 0) {
      return;
    }

    this.productService.addProduct(this.newProduct).subscribe( {
      next: (data) => {
        console.log('product added : ',data);
        this.newProduct = { id: 0, name: '', price: 0 };
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error Adding products', err);
      },
      complete: () => {
        console.log("Obserevable Completed")
      }
    });
  }


  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error deleting product', err);
      }
    })
  }

  editRow(product: Product) {
    this.editedProductId = product.id;
    this.editedProduct = { ...product };
  }

  saveRow() {
    if (!this.editedProduct) return;

    this.productService.updateProduct(
      this.editedProduct.id,
      this.editedProduct
    ).subscribe(() => {
      this.cancelEdit();
      this.loadProducts();
    });
  }

  cancelEdit() {
    this.editedProductId = null;
    this.editedProduct = null;
  }

}
