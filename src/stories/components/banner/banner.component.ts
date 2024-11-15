import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "banner",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="title || titleDesc"
      [ngClass]="{
        'c-banner': true,
        'text-white': true,
        'has-offset': hasOffset
      }"
    >
      <div class="container-xl px-4">
        <h1 class="d-flex flex-column gap-1">
          <span class="fs-1 u-roboto-bold">{{ title }}</span>
          <span class="fs-5 u-roboto-regular">{{ titleDesc }}</span>
        </h1>
      </div>
    </div>
  `,
  styleUrls: ["./banner.css"],
})
export class BannerComponent {
  @Input() title: string = "Title";
  @Input() titleDesc: string = "Title Description";
  @Input() hasOffset: boolean = false;
}
