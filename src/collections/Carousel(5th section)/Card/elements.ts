import { styled, css } from "styled-components";
import {
  BodyLg as _bodyLg,
  BodyMdRg as _bodyMdRg,
  Avatar as _avatar,
  BodyMdMd as _bodyMdMd,
  Image as _image,
  Button as _button,
} from "../../../components";

export const Card = styled.div(
  () => css`
    width: 360px;
    height: 509px;
    flex-shrink: 0;
    border-radius: 32px;
    background: #ebedef;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `
);
export const CardContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    margin: 10px 10px 12px 17px;
    & div:last-child {
      margin-top: 29px;
    }
  `
);
export const Image = styled(_image)(
  () => css`
    width: 340px;
    height: 336px;
    flex-shrink: 0;
    border-radius: 22px;
    margin-top: auto;
  `
);
export const Heading = styled(_bodyLg)(() => css``);
export const HeadingDesc = styled(_bodyMdRg)(
  () => css`
    opacity: 0.5;
  `
);

export const SubscirberName = styled(_bodyMdMd)(() => css``);
export const SubscirberFans = styled(_bodyMdMd)(
  () => css`
    font-size: 12px;
    opacity: 0.5;
  `
);

export const Button = styled(_button)(
  () => css`
    padding: 6px 10px;
  `
);
export const SubscriberInfoDiv = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 5fr 7fr;
  `
);
export const SubscriberDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 10px;
    justify-content: center;
    position: relative;
    margin-right: 12px;
  `
);
export const SubsDescDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
  `
);
export const Avatar = styled(_avatar)(
  () => css`
    && {
      width: 32px;
      height: 32px;
    }
  `
);

export const ButtonDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
  `
);
