import styled, { css } from "styled-components";
import {
  H3Bd as _h3bd,
  BodyMdRg as _bodymdrg,
  BodyMdSb as _bodymdsb,
  Button as _button,
} from "../../../MockUp/elements";

export const CardContainer = styled.div(
  () => css`
    border-radius: 32px;
    border: 1px solid rgba(10, 15, 41, 0.08);
    background: #ebedef;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    width: 384px;
    height: 421px;
    flex-shrink: 0;
  `
);
export const CardContent = styled.div(
  () => css`
    margin: 40px;
    display: flex;
    flex-direction: column;
    & ${Button}:first-child {
      align-self: flex-start;
    }
  `
);

export const CardTitle = styled(_h3bd)(
  () => css`
    font-size: 32px;
    margin-top: 24px;
    text-align: center;
  `
);

export const CardDesc = styled(_bodymdrg)(
  () => css`
    margin-top: 117px;
    opacity: 0.5;
  `
);
export const LearnMore = styled(_bodymdsb)(
  () => css`
    margin-top: 16px;
    opacity: 0.5;
  `
);
//to be reimplemented as button
export const Button = styled(_button)(() => css``);
