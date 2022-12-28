import { Global, ThemeProvider } from "@emotion/react";

import { Layout } from "~/components";
import { globalStyles, theme } from "~/theme";

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <Global styles={globalStyles} />
    <Layout />
  </ThemeProvider>
);

export { App };
