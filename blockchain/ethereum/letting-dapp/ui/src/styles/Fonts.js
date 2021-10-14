import { createGlobalStyle } from "styled-components";
import IBMPlexSansCondensedBold from "../assets/fonts/IBMPlexSansCondensed-Bold.ttf";
import IBMPlexSansCondensedLight from "../assets/fonts/IBMPlexSansCondensed-Light.ttf";
import IBMPlexSansCondensedMedium from "../assets/fonts/IBMPlexSansCondensed-Medium.ttf";
import IBMPlexSansCondensedRegular from "../assets/fonts/IBMPlexSansCondensed-Regular.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "IBMPlexSansCondensed-Bold";
    src: url(${IBMPlexSansCondensedBold}) format("woff2");
    src: url(${IBMPlexSansCondensedBold}) format("woff");
  }
  @font-face {
    font-family: "IBMPlexSansCondensed-Light";
    src: url(${IBMPlexSansCondensedLight}) format("woff2");
    src: url(${IBMPlexSansCondensedLight}) format("woff");
  }
  @font-face {
    font-family: "IBMPlexSansCondensed-Medium";
    src: url(${IBMPlexSansCondensedMedium}) format("woff2");
    src: url(${IBMPlexSansCondensedMedium}) format("woff");
  }
  @font-face {
    font-family: "IBMPlexSansCondensed-Regular";
    src: url(${IBMPlexSansCondensedRegular}) format("woff2");
    src: url(${IBMPlexSansCondensedRegular}) format("woff");
  }
`;
