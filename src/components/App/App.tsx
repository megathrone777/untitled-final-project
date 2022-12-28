import { ThemeProvider } from "@emotion/react";

import { Layout } from "~/components";
import { GlobalStyle, theme } from "~/theme";

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <Layout />
  </ThemeProvider>
);

export { App };
