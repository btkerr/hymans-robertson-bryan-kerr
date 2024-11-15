import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "task",
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="c-task">
      <img
        [src]="'images/' + imgSrc + '.png'"
        alt=""
        aria-hidden
        class="c-task__img"
      />
      <div class="c-task__content">
        <header *ngIf="title" class="c-task__header">
          <h2 class="c-task__header-title">{{ title }}</h2>
        </header>
        <div class="c-task__body">
          <p>
            {{ summary }}
          </p>
        </div>
        <footer *ngIf="linkText && linkUrl" class="c-task__footer">
          <a href="{{ linkUrl }}" class="d-inline-flex align-items-center gap-1"
            ><span>{{ linkText }}</span>
            <i class="fa-solid fa-chevron-right"></i
          ></a>
        </footer>
      </div>
    </article>
  `,
  styleUrls: ["./task.css"],
})
export class TaskComponent {
  @Input() imgSrc: string = "upload-data";
  @Input() title!: string;
  @Input() summary!: string;
  @Input() linkText!: string;
  @Input() linkUrl!: string;
}
