import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
export const routes: Routes = [
   // {path: '',component: HelloComponent},
   {path: 'hello', component:HelloComponent},
    {path: '',redirectTo: 'hello', pathMatch:'full'},
    {path: 'second/:id', component: SecondComponent},
    {path: 'third', component:ThirdComponent}
];