import type { Meta, StoryObj } from "@storybook/angular";

import { BannerComponent } from "./banner.component";

const meta: Meta<BannerComponent> = {
  title: "Technical Test/Components/Banner",
  component: BannerComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;
type Story = StoryObj<BannerComponent>;

export const Example: Story = {
  args: {
    title: "Title",
    titleDesc: "Title Description",
  },
};
