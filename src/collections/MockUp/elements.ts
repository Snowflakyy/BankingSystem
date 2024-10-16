import styled, { css } from "styled-components";
import {
  H1Bd as _h1,
  H3Bd as _h3bd,
  H4Md as _h4md,
  BodyLg as _bodylg,
  BodyMdMd as _bodymdmd,
  BodyMdRg as _bodymdrg,
  BodyMdSb as _bodymdsb,
  SpanElement as _span,
  Avatar as _avatar,
  Button as _button,
  Icon as _icon,
  Image as _image,
} from "../../components";
import { NavLink } from "react-router-dom";

export const Page = styled.div(
  () => css`
    background-color: #b3e6d3;
    height: 100vh;
  `
);
export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    gap: 30px;
  `
);
export const H1Bd = styled(_h1)(() => css``);
export const Span = styled(_span)(() => css``);
export const H3Bd = styled(_h3bd)(() => css``);
export const H4Md = styled(_h4md)(() => css``);
export const BodyLg = styled(_bodylg)(() => css``);
export const BodyMdMd = styled(_bodymdmd)(() => css``);
export const BodyMdRg = styled(_bodymdrg)(() => css``);
export const BodyMdSb = styled(_bodymdsb)(() => css``);
export const Image = styled(_image)(
  () => css`
    width: 315px;
    height: 683px;
    flex-shrink: 0;
  `
);
export const Avatar = styled(_avatar)(() => css``);
export const Button = styled(_button)(() => css``);
export const NavbarLink = styled(NavLink)(
  () => css`
    text-decoration: none;
    dispay: inline-flex;
    ${H4Md} {
      color: inherit;
    }
  `
);
export const Icon = styled(_icon)(() => css``);
