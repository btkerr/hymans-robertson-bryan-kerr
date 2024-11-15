import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, within } from "@storybook/test";
import { mockTaskData } from "./mock-data";

import { PageComponent } from "./page.component";

const meta: Meta<PageComponent> = {
  title: "Technical Test/Dashboard",
  component: PageComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<PageComponent>;

export const UserInterface: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if the h1 contains the welcome message
    const welcomeMessage = canvas.getByText("Welcome");
    await expect(welcomeMessage).toBeInTheDocument();

    // Check if the tasks are rendered
    const tasks = canvas.getAllByRole("article");
    await expect(tasks.length).toBe(mockTaskData.length);

    // Check if the task titles are rendered correctly
    mockTaskData.forEach(async (task) => {
      const taskTitle = canvas.getByText(task.title);
      await expect(taskTitle).toBeInTheDocument();
    });

    // Check if the first task link is present
    const firstTaskLink = canvas.getAllByRole("link", { name: /View app/i })[0];
    await expect(firstTaskLink).toBeInTheDocument();
  },
};
