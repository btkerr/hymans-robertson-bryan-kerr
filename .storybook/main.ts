import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  staticDirs: ["../public"],
  managerHead: (head) => `
    ${head}
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <style>
      .sidebar-header [title="Hymans Roberston"] img { max-width: 250px !important; }
      .sidebar-header > div { margin-right: 0 !important; }

      button[title="Change the background of the preview"],
      button[title="Apply a grid to the preview"],
      button[title="Change the size of the preview"],
      button[title="Enable measure"],
      button[title="Zoom in"],
      button[title="Zoom out"],
      button[title="Reset zoom"],
      button[title="Apply outlines to the preview"] { display: none; }
    </style>
  `,
  previewHead: (head) => `
    ${head}
    <script src="https://kit.fontawesome.com/2cfe8d77a1.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800&display=swap" rel="stylesheet">
  `,
};
export default config;
