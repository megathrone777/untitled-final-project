import { styled } from "~/theme";

export const StyledContent = styled.main(({ theme: { colors, devices } }) => ({
  backgroundColor: colors.tomato,

  [devices["desktop"]]: {
    backgroundColor: colors.orange,
  },

  [devices["tablet"]]: {
    backgroundColor: "green",
  },
}));
