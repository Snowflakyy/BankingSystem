import { css, styled } from "styled-components";
import {
  H1Bd as _H1,
  BodyLg as _body,
  SpanElement as _span,
  Image as _image,
} from "../../components";
import { Card as _card } from "./Card";
export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
);
export const Span = styled(_span)(() => css``);
export const H1 = styled(_H1)(
  () => css`
    margin: 123px 0px 16px 0px;
    text-align: center;
  `
);
export const BodyLgMd = styled(_body)(
  () => css`
    opacity: 0.5;
  `
);
export const Card = styled(_card)(() => css``);
export const CardContainer = styled.div(
  () => css`
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
  `
);
export const CardContainerDiv = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 6fr 6fr;
    margin: 83px 48px 0px 139px;
  `
);

export const Image = styled(_image)(
  () => css`
    width: 666px;
    height: 784px;
    flex-shrink: 0;
  `
);
