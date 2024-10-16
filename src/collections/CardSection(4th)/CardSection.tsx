import * as S from "./elements";
import Gym from "../../../images/Frame267.png"
import { useEffect, useRef } from "react";
// title,description,iconPath
export const CardSection = () => {
    const cardRefs = useRef<Array<HTMLDivElement |null>>([]); 
     const cardText = [
    {
      title: "Share your progress",
      description: `Fusce volutpat lectus et nisl consectetur finibus.
             In vitae scelerisque augue, in varius eros. Nunc eros...`,
      iconPath: "M9 14.5L11 16.5L15.5 12M20 25V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9265 7.6146 18.362 7.32698C17.7202 7 16.8802 7 15.2 7H8.8C7.11984 7 6.27976 7 5.63803 7.32698C5.07354 7.6146 4.6146 8.07354 4.32698 8.63803C4 9.27976 4 10.1198 4 11.8V25L6.75 23L9.25 25L12 23L14.75 25L17.25 23L20 25Z",
    },
    {
      title: "Share your progress",
      description: `Fusce volutpat lectus et nisl consectetur finibus.
             In vitae scelerisque augue, in varius eros. Nunc eros...`,
             iconPath: "M9 14.5L11 16.5L15.5 12M20 25V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9265 7.6146 18.362 7.32698C17.7202 7 16.8802 7 15.2 7H8.8C7.11984 7 6.27976 7 5.63803 7.32698C5.07354 7.6146 4.6146 8.07354 4.32698 8.63803C4 9.27976 4 10.1198 4 11.8V25L6.75 23L9.25 25L12 23L14.75 25L17.25 23L20 25Z",

    },
    {
      title: "Share your progress",
      description: `Fusce volutpat lectus et nisl consectetur finibus.
             In vitae scelerisque augue, in varius eros. Nunc eros...`,
             iconPath: "M9 14.5L11 16.5L15.5 12M20 25V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9265 7.6146 18.362 7.32698C17.7202 7 16.8802 7 15.2 7H8.8C7.11984 7 6.27976 7 5.63803 7.32698C5.07354 7.6146 4.6146 8.07354 4.32698 8.63803C4 9.27976 4 10.1198 4 11.8V25L6.75 23L9.25 25L12 23L14.75 25L17.25 23L20 25Z",

    },
  ];
  useEffect(()=>{
    cardRefs.current[0]?.focus()
  },[])
  return (
    <S.Container>
      <S.H1>
        Tools to help you <br />
        <S.Span gradient="purpleToBlue"> reach your new form.</S.Span>
      </S.H1>
      <S.BodyLgMd>
        Donec vitae mi vulputate, suscipit urna in, malesuada nisl.<br/> Pellentesque
        laoreet pretium nisl, et pulvinar massa eleifend sed.
      </S.BodyLgMd>
      <S.CardContainerDiv>
        <S.CardContainer>
        {cardText.map((card, index) => {
          return (
            <S.Card
            cardRef={(el)=>( cardRefs.current[index]=el)}
              key={index}
              title={card.title}
              description={card.description}
              iconPath={card.iconPath}
            />
          );
        })}
        </S.CardContainer>
        <S.Image src={Gym}/>
      </S.CardContainerDiv>
    </S.Container>
  );
};
