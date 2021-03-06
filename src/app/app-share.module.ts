import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzResultModule } from "ng-zorro-antd/result";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { ComponentModule } from "./component/component.module";
import { DirectiveModule } from "./directive/directive.module";
import { NzTreeModule } from "ng-zorro-antd/tree";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzAutocompleteModule } from "ng-zorro-antd/auto-complete";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzListModule } from "ng-zorro-antd/list";
import { NzNotificationModule } from "ng-zorro-antd/notification";

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzSpaceModule,
    NzPageHeaderModule,
    NzCardModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzInputModule,
    NzAvatarModule,
    NzBadgeModule,
    NzTableModule,
    NzDividerModule,
    NzPopoverModule,
    NzDropDownModule,
    NzTagModule,
    NzSelectModule,
    NzResultModule,
    NzEmptyModule,
    NzTreeModule,
    NzModalModule,
    NzFormModule,
    NzTypographyModule,
    NzCheckboxModule,
    NzAutocompleteModule,
    NzUploadModule,
    NzTabsModule,
    NzDrawerModule,
    NzStatisticModule,
    NzListModule,
    NzNotificationModule,
    ComponentModule,
    DirectiveModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppShareModule {
}
