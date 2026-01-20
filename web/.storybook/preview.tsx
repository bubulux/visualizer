import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    themes: {
      default: "dark",
      list: [
        { name: "light", class: "", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#252525" },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
          { value: "side-by-side", icon: "sidebar", title: "Side by side" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      if (theme === "side-by-side") {
        return (
          <div style={{ display: "flex", gap: "2rem" }}>
            <div
              style={{
                flex: 1,
                padding: "1rem",
              }}
            >
              <Story />
            </div>
            <div
              className="dark"
              style={{
                flex: 1,
                padding: "1rem",
              }}
            >
              <Story />
            </div>
          </div>
        );
      }

      return (
        <div
          className={theme === "dark" ? "dark" : ""}
          style={{
            padding: "1rem",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
