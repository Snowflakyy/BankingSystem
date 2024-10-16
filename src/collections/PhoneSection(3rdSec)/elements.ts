import { styled, css } from "styled-components";
import {
  H1Bd as _h1bd,
  BodyLg as _bodylg,
  Button as _button,
  Image as _image,
} from "../../components";
import GradientFill from "../../../images/Frame218.png";
export const PhoneContainer = styled.div(
  () => css`
    width: 100%;
    height: 1292px;
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    background-image: url(${require("../../../images/Frame218.png")});
    background-size: cover;
    position: relative;
  `
);
export const PhoneDiv = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    overflow: hidden;
    $:last-child {
    }
  `
);
export const PhoneImg = styled(_image)(
  () => css`
    width: 352px;
    height: 713px;
    position: absolute;
    object-fit: contain;
    max-width: 100%;
  `
);
export const PhoneImg1 = styled(PhoneImg)(
  () => css`
    bottom: 35%;
  `
);
export const PhoneImgRotated1 = styled(PhoneImg)(
  () => css`
    bottom: 0;
  `
);
export const PhoneImg2 = styled(PhoneImg)(
  () => css`
    bottom: 0;
  `
);
export const PhoneImgRotated2 = styled(PhoneImg)(
  () => css`
    bottom: 65%;
  `
);
export const ContentDiv = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  `
);
export const DescDiv = styled.div(
  () => css`
    width: 70%;
  `
);
export const Button = styled(_button)(
  () => css`
    color: #14151a;
  `
);
export const ButtonDiv = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  `
);

export const H1 = styled(_h1bd)(
  () => css`
    color: #14151a;
    margin: 0px 145px 16px 142px;
  `
);
export const BodyDesc = styled(_bodylg)(
  () => css`
    opacity: 0.5;
    color: #14151a;
    margin: 0px 135px 16px 132px;
  `
);
export const Image = styled(_image)(
  () => css`
    width: 315.904px;
    height: 683.532px;
    flex-shrink: 0;
  `
);
export const WhiteBack = styled.div(
  () => css`
    width: 100%;
    padding: 193px 0px;
    background: radial-gradient(
      146.39% 162.2% at 50% 162.2%,
      #fff 49.16%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    bottom: 0;
  `
);
