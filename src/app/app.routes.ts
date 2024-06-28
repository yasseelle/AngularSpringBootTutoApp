import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [


    {
        path : "products",
        component : ProductComponent
    },
    {
        path : "customers",
        component : CustomersComponent
    }

];
