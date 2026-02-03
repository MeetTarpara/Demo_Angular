import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { FormDemo } from './form-demo/form-demo';
import { ParentComponent } from './parent/parent';
import { PipeDirective } from './pipe-directive/pipe-directive';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'form',component:FormDemo},
    {path:'parent',component:ParentComponent},
    {path:'login',component:Login},

    {path:'pipe-directive',component:PipeDirective}
    
];
