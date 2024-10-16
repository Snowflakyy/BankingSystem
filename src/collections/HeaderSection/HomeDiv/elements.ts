import { css, styled } from "styled-components";
import Home from "../../../../images/Frame250.jpg";

import {
  H1Bd as _h1,
  BodyLg as _bodylg,
  BodyMdMd as _bodymd,
  Button as _button,
  Icon as _icon,
  Avatar as _avatar,
} from "../../../components";

export const HomeDiv = styled.div(
  () => css`
    max-width: 583px;
    width: 583px;
    height: auto;
    max-height: 755px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background-image: url(${require("../../../../images/Frame250.jpg")});
    background-size: cover;
    background-position: center;
  `
);
export const Container = styled.div(
  () => css`
    width: 453px;
    margin: 0px 82px 0px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 10px;
    &:last-child {
      margin-top: 30px;
    }
  `
);

export const HeadingDiv = styled.div(
  () => css`
    margin-top: 209px;
    margin-bottom: 24px;
    width: 100%;
  `
);
export const Heading = styled(_h1)(
  () => css`
    color: #fff;
  `
);

export const BodyDiv = styled.div(
  () => css`
    width: 100%;
    height: 104px;
    &:first-child {
      margin-bottom: 15px;
    }
  `
);
// styled(({ variant, subvariant, ...props }: BodyProps) => (
//   <_bodylg {...props} />
export const Body = styled(_bodylg)(
  () => css`
    color: #fff;
    margin-bottom: 15px;
  `
);
export const Button = styled(_button)(() => css``);
export const ButtonDiv = styled.div(
  () => css`
    display: flex;
    gap: 10px;
  `
);

export const Description = styled(_bodymd)(
  () => css`
    font-size: 16px;
    opacity: 0.5;
    color: #fff;
  `
);
export const Avatar = styled(_avatar)(() => css``);

export const DescDiv = styled.div(
  () => css`
    width: 100%;
    height: 175px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 94px;
  `
);
export const AvatarsDiv = styled.div(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  `
);
// export const H2 = styled(_H2)(
//     () => css`
//       color: white;
//       padding-bottom: 10px;
//     `
//   );
