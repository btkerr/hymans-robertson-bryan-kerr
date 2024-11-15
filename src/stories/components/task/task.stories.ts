import type { Meta, StoryObj } from "@storybook/angular";

import { TaskComponent } from "./task.component";

const meta: Meta<TaskComponent> = {
  title: "Technical Test/Components/Task",
  component: TaskComponent,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    imgSrc: {
      control: "select",
      options: [
        "upload-data",
        "see-my-documents",
        "whole-fund-update",
        "employer-funding-update",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Example: Story = {
  args: {
    imgSrc: "upload-data",
    title: "Title",
    summary: "Summary",
    linkText: "Link Text",
    linkUrl: "#0",
  },
};
