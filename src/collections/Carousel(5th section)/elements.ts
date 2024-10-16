import { css, styled } from "styled-components";
import { Card as _card } from "./Card";
import {
  H1Bd as _h1bd,
  BodyLg as _bodylg,
  Button as _button,
  SpanElement as _span,
} from "../../components";
import { CarouselProps } from "./Carousel";

export const Card = styled(_card)(
  () => css`
    flex-shrink: 0; /* Prevent the card from shrinking */
    transition: transform 0.5s ease;
  `
);
export const SectionContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    margin-top: 90px;
  `
);
export const CarouselButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 44px;
  `
);
export const Container = styled.div(
  () => css`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 431px 862px;
    height: 573px;
    overflow: hidden;
  `
);
export const HeadingDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & div:last-child {
      margin-top: auto;
    }
    background: white;
  `
);
export const ButtonDiv = styled.div(
  () => css`
    display: flex;
    flex-diretion: row;
    justify-content: flex-start;
    gap: 8px;
  `
);

export const CarouselDiv = styled.div<CarouselProps>`
  width: 400%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  gap: 24px;
  transition: transform 3s ease-in-out; /* Apply transition to the transform property */
  transform: translateX(${({ slide }) => (-slide * (360 + 24)) / 3}px);
  grid-column: 2;
  position: relative;
  z-index: -1;
`;

export const Button = styled(_button)(
  () => css`
    padding: var(--spacing-sm, 6px) 10px;

    gap: var(--spacing-xxs, 2px);
  `
);
export const Heading = styled(_h1bd)(() => css``);
export const Span = styled(_span)(() => css``);
export const Description = styled(_bodylg)(
  () => css`
    opacity: 0.5;
  `
);
