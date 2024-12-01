import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: 'category', component: CategoryComponent,
        children: [
            { path: ':id', component: ProductListComponent }
        ]
    },
    { path: 'product/:id', component: ProductComponent },
    { path: '', redirectTo: 'category', pathMatch: 'full' },
];
