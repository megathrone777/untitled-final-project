import { Example } from "~/components";
import { StyledContent } from "./emotion";

const Layout: React.FC = () => (
  <>
    Header
    <StyledContent>
      <Example />
    </StyledContent>
    Footer
  </>
);

export { Layout };
