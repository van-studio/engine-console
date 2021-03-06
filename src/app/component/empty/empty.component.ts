import { Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `
    <nz-result nzStatus="404" nzTitle="404" nzSubTitle="抱歉，此页面未找到~">
      <div nz-result-extra>
        <button
          nz-button
          nzType="primary"
          [routerLink]="['./']"
        >
          返回
        </button>
      </div>
    </nz-result>
  `
})
export class EmptyComponent {
}
