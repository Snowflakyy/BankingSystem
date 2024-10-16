import { css, styled } from "styled-components";
import {
  H1Bd as _h1,
  SpanElement as _span,
  H4Md as _h4,
  BodyLg as _bodylg,
  Button as _button,
  Icon as _icon,
} from "../../components";
export const FooterContainer = styled.div(
  () => css`
    width: 1392px;
    height: 517px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #ebedef;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `
);

export const Logo = styled(_h4)(() => css``);
export const Title = styled(_h1)(() => css``);
export const Span = styled(_span)(() => css``);
export const listHeader = styled(_bodylg)(() => css``);
export const listItem = styled(_bodylg)(
  () => css`
    opacity: 0.5;
  `
);
export const Icon = styled(_icon)(
  () => css`
    width: 24px;
    height: 24px;
  `
);

export const LogoTitleDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
  `
);
export const ContactsMediaDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
  `
);
export const ContactsDiv = styled.div(
  () => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `
);
export const List = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    & ${listHeader}:first-child {
      margin-top: 9px;
    }
  `
);
export const MediaDiv = styled.div(
  () => css`
    display: flex;
    gap: 16px;
  `
);

export const ButtonsIosAppStore = styled(_button)(() => css``);
