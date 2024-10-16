import { styled, css } from "styled-components";
import { Image as _image } from "../../components";

export const HandDiv = styled.div(
  () => css`
    width: 100%;
  `
);
export const HandImg = styled(_image)(
  () => css`
    width: 1440px;
    height: 1286px;
    flex-shrink: 0;
  `
);
