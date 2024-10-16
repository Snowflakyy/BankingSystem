import { css, styled } from "styled-components";
import {
  H3Bd as _h3bd,
  SpanElement as _span,
  BodyLg as _bodylg,
  Button as _button,
  Image as _image,
} from "../../../../components";

export const CardContainer = styled.div(
  () => css`
    border-radius: 32px;
    border: 1px solid rgba(10, 15, 41, 0.08);
    background: #d6e7f9;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    width: 1200px;
    height: 534px;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 589fr 526fr;
    position: relative;
    overflow: hidden;
  `
);

export const ContentDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    margin: 114px 58px 114px 0px;
  `
);
export const TitleDiv = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 7fr 5fr;
  `
);
export const Title = styled(_h3bd)(() => css``);
export const Span = styled(_span)(() => css``);
export const DescriptionDiv = styled.div(
  () => css`
    margin: 24px 0px 32px 0px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `
);
export const Description = styled(_bodylg)(
  () => css`
    color: rgba(15, 18, 52, 0.6);
    width: 90%;
  `
);
export const ButtonDiv = styled.div(
  () => css`
    display: flex;
    justify-content: start;
  `
);
export const Button = styled(_button)(() => css``);
export const ImageDiv = styled.div(
  () => css`
    margin-left: 27px;
  `
);
export const Image = styled(_image)(
  () => css`
    width: 476.16px;
    height: 710.76px;
    display: flex;
    align-items: flex-start;
  `
);
