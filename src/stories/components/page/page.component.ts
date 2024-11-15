import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

// These components have been developed for the technical assessment
import { BannerComponent } from "../banner/banner.component";
import { TaskComponent } from "../task/task.component";

// This is mock data, used to generate and populate the <task> component
import { mockTaskData } from "./mock-data";

@Component({
  selector: "page",
  standalone: true,
  imports: [CommonModule, BannerComponent, TaskComponent],
  template: `
    <main class="c-page">
      <!-- Created <banner> component for the assessment -->
      <banner
        [title]="'Welcome'"
        [titleDesc]="'What would you like to do?'"
        [hasOffset]="true"
      />
      <div class="c-page__content">
        <div class="container-xl p-4">
          <div class="row">
            <div class="col-12 col-sm-6 mb-4" *ngFor="let task of mockTaskData">
              <!-- Created <task> component for the assessment -->
              <task
                [imgSrc]="task.imgSrc"
                [title]="task.title"
                [summary]="task.summary"
                [linkText]="task.linkText"
                [linkUrl]="task.linkUrl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styleUrls: ["./page.css"],
})
export class PageComponent {
  mockTaskData = mockTaskData;
}
