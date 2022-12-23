import { keyframes, styled } from "~/theme";

const spin = keyframes`
  from {
    transform: translateY(-50%) rotate(0deg);
  }

  to {
    transform: translateY(-50%) rotate(360deg);
  }
`;

export const StyledSpinner = styled.div(({ theme: { colors, rem } }) => ({
  animation: `${spin} 0.5s linear infinite`,
  border: `${rem(10)} solid ${colors.orange}`,
  borderRadius: "50%",
  borderTopColor: "transparent",
  height: rem(60),
  left: 0,
  marginInline: "auto",
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  width: rem(60),
}));
