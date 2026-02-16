import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { FormDemo } from './form-demo/form-demo';
import { ParentComponent } from './parent/parent';
import { PipeDirective } from './pipe-directive/pipe-directive';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { ProductComponent } from './product-component/product-component';
import { RxjsDemo } from './rxjs-demo/rxjs-demo';
import { Login2Component } from './login-2-component/login-2-component';
import { Register2Component } from './register-2-component/register-2-component';
import { PersonComponent } from './person-component/person-component';

export const routes: Routes = [

    {path:'',component:Login2Component},
    {path:'login2',component:Login2Component},
    {path:'register',component:Register2Component},

    {path:'login',component:Login},

    {   
        path: 'dashboard',
        component: Dashboard,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
          {
            path: 'home',
            component: Home,
          },
          {
            path: 'about',
            component: About,
          },
          {
            path: 'form',
            component: FormDemo,
          },
          {
            path: 'parent',
            component: ParentComponent,
          },
          { 
            path: 'pipe-directive',
            component: PipeDirective,
          },
          { 
            path: 'product',
            component: ProductComponent,
          },
          { 
            path: 'rxjs',
            component:RxjsDemo,
          },
          { 
            path: 'login2',
            component:Login2Component,
          },
          { 
            path: 'person',
            component:PersonComponent,
          }
        
        ]
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    
];
