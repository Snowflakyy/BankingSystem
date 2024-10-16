import * as S from "./elements";
import Frame from "../../../../../images/Frame260.png";
export const HundredsWorkouts = () => {
  return (
    <S.CardContainer>
      <S.ImageDiv>
        <S.Image src={Frame} />
      </S.ImageDiv>
      <S.ContentDiv>
        <S.TitleDiv>
          <S.Title>
            Hundreds of
            <S.Span gradient="purpleToBlue"> new workouts to try.</S.Span>
          </S.Title>
        </S.TitleDiv>
        <S.DescriptionDiv>
          <S.Description>
            No matter what project you're working on, we've got you covered with
            the best wireframe kits for any platform.
          </S.Description>
          <S.Description>
            Use a set of text and color styles, customize and apply changes to
            all pages at once. Create a unique look in just a few minutes.
          </S.Description>
        </S.DescriptionDiv>
        <S.ButtonDiv>
          <S.Button
            variant="secondary"
            iconPath="M4.16602 9.99984H15.8327M15.8327 9.99984L9.99935 4.1665M15.8327 9.99984L9.99935 15.8332"
            viewBox="0 0 20 20"
            fill="none"
            stroke="white"
            strokeOpacity={1}
          >
            Visit the workout shop
          </S.Button>
        </S.ButtonDiv>
      </S.ContentDiv>
    </S.CardContainer>
  );
};
