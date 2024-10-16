import * as S from "./elements";
import {AvatarJane} from "../../../images/Avatars/Avatar1.png"
import Phone from "../../../images/iPhone13Pro.png";
export const MockUp = () => {
  return (
    <S.Page>
    <S.Container>
      <S.H1Bd>Sample Text</S.H1Bd>
      <S.H1Bd> Sample <S.Span gradient="purpleToBlue">Text</S.Span></S.H1Bd>
      <S.H3Bd>Sample Text</S.H3Bd>
      <S.H4Md>Sample Text</S.H4Md>
      <S.BodyLg>Sample Text</S.BodyLg>
      <S.BodyMdSb>Sample Text</S.BodyMdSb>
      <S.BodyMdMd>Sample Text</S.BodyMdMd>
      <S.BodyMdRg> Sample Text</S.BodyMdRg>
      <S.Button
        fill="#14151A"
        variant="primary"
        iconPath="M4.16602 10.0001H15.8327M15.8327 10.0001L9.99935 4.16675M15.8327 10.0001L9.99935 15.8334"
      >
        Sample Text
      </S.Button>
      <S.Button
        fill="#fff"
        variant="secondary"
        iconPath="M4.16602 10.0001H15.8327M15.8327 10.0001L9.99935 4.16675M15.8327 10.0001L9.99935 15.8334"
      >
        Sample Text
      </S.Button>
      <S.Button
        fill="#14151A"
        variant="tertiary"
        iconPath="M4.16602 10.0001H15.8327M15.8327 10.0001L9.99935 4.16675M15.8327 10.0001L9.99935 15.8334"
      >
        Sample Text
      </S.Button>
      <S.NavbarLink to="/">Sample Text</S.NavbarLink>
      <S.Avatar src="../../../images/Avatars/Avatar1.png"></S.Avatar>
      <S.Image src={Phone}/>
    </S.Container>
    </S.Page>
  );
};
