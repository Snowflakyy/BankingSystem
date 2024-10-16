import { css, styled } from "styled-components";
import {
  H4Md as _H4,
  BodyLg as _body,
  Icon as _icon,
} from "../../../components";

export const Icon = styled(_icon)(
  () => css`
    width: 24px;
    height: 32px;
    flex-shrink: 0;
    transition: stroke-opacity 0.3s ease;
  `
);
export const Cardontainer = styled.div(
  () => css`
    display: flex;
    width: 615px;
    padding: 32px;
    align-items: flex-start;
    gap: 24px;
    border-radius: 20px;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    &:focus {
      border-radius: 20px;
      border: 1px solid rgba(10, 15, 41, 0.16);
      background: #d6e7f9;
      box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
      transition: background 0.3s ease;
    }
    &:focus-within ${Icon} {
      stroke-opacity: 1;
    }
  `
);
export const TextDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `
);
export const H4 = styled(_H4)(() => css``);
export const bodyDesc = styled(_body)(
  () => css`
    color: rgba(15, 18, 52, 0.6);
    font-feature-settings: "cv12" on, "cv13" on;
  `
);
