import { styled } from "~/theme";

export const StyledContent = styled.main(({ theme: { colors, devices } }) => ({
  backgroundColor: colors.red,

  [devices["desktop"]]: {
    backgroundColor: colors.red,
  },

  [devices["tablet"]]: {
    backgroundColor: "green",
  },
}));
