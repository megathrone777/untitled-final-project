import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  marginInline: "auto",
  maxWidth: rem(300),
  textAlign: "center",
}));

export const StyledTitle = styled.h1(({ theme: { colors, rem } }) => ({
  color: colors.orange,
  fontSize: rem(22),
  marginBottom: rem(15),
  padding: rem(8),
}));
