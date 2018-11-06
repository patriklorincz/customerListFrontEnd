import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';
import { CustomercreationComponent } from '../customercreation/customercreation.component';

const routes : Routes = [
    {
        path: 'customers',
        component: CustomersComponent
    },
    {
        path: 'customerdetails/:id',
        component: CustomerdetailsComponent
    },
    {
        path: 'customercreation',
        component: CustomercreationComponent
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
