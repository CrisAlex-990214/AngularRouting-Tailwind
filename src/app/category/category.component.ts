import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent {
  categories = [
    { id: 1, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg', title: 'Desk and Office', description: 'Work from home accessories' },
    { id: 2, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg', title: 'Self-Improvement', description: 'Journals and note-taking' },
    { id: 3, imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg', title: 'Travel', description: 'Daily commute essentials' }
  ];

  router = inject(Router);
  route = inject(ActivatedRoute);

  displayProducts(categoryId: number) {
    this.router.navigate([categoryId], { relativeTo: this.route });
  }
}
