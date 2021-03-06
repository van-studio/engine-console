import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppShareModule } from "@share";
import { DashboardsComponent } from "./dashboards.component";
import { NavModule } from "../nav/nav.module";

const routes: Routes = [
  {
    path: "",
    component: DashboardsComponent,
    data: {
      title: null
    }
  }
];

@NgModule({
  imports: [
    NavModule,
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsComponent
  ],
  exports: [
    DashboardsComponent
  ]
})
export class DashboardsModule {
}
