import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-03-image-card-01.jpg', title: 'Earthen Bottle', price: 48 },
    { id: 2, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-03-image-card-02.jpg', title: 'Nomad Tumbler', price: 35 },
    { id: 3, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-03-image-card-03.jpg', title: 'Focus Paper Refill', price: 89 },
    { id: 4, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-03-image-card-04.jpg', title: 'Machined Mechanical Pencil', price: 35 }
  ];

  router = inject(ActivatedRoute);

  ngOnInit(): void {
    // const categoryId = this.router.snapshot.paramMap.get('id');
    this.router.params.subscribe(params => {
      const categoryId = params['id'];
      this.products.forEach((p, index) => p.imageUrl = `https://tailwindui.com/plus/img/ecommerce-images/category-page-0${categoryId}-image-card-0${index + 1}.jpg`)
    })
  }
}
