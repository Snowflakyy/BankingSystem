import * as S from "./elements";
import Phone from "../../../images/iPhone13Pro.png";
export const PhoneSection = () => {
  return (
    <S.PhoneContainer>
      <S.PhoneDiv>
        <S.PhoneImg1 src={Phone} />
        <S.PhoneImgRotated1 src={Phone} transform={90} origin="center left" />
      </S.PhoneDiv>
      <S.ContentDiv>
        <S.DescDiv>
          <S.H1>A home for your fitness journey.</S.H1>
          <S.BodyDesc>
            Donec vitae mi vulputate, suscipit urna in, malesuada nisl,
            ellentesque laoreet pretium.
          </S.BodyDesc>
          <S.ButtonDiv>
            <S.Button
              fill="#14151A"
              variant="primary"
              iconPath="M4.16602 10.0001H15.8327M15.8327 10.0001L9.99935 4.16675M15.8327 10.0001L9.99935 15.8334"
            >
              Get Started
            </S.Button>
            <S.Button
              fill="#14151A"
              variant="tertiary"
              iconPath="M4.16602 10.0001H15.8327M15.8327 10.0001L9.99935 4.16675M15.8327 10.0001L9.99935 15.8334"
            >
              Learn more
            </S.Button>
          </S.ButtonDiv>
        </S.DescDiv>
      </S.ContentDiv>
      <S.PhoneDiv>
      <S.PhoneImgRotated2 src={Phone} transform={270} origin="center right" />
      <S.PhoneImg2 src={Phone} />
      </S.PhoneDiv>
      <S.WhiteBack/>
    </S.PhoneContainer>
  );
};
