import { useState } from "react";
import * as S from "./elements";
import React from "react";
import Slider from "react-slick";
import { HTMLDivProps } from "../../types";

export interface CarouselProps extends HTMLDivProps {
  slide: number;
}
export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };
  const cardInfo = [
    {
      title: `4-Week Workout Split`,
      description: `Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
      name: `John Doe`,
      fanCount: `51.2k fans`,
    },
    {
      title: `4-Week Workout Split`,
      description: `Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
      name: `John Doe`,
      fanCount: `51.2k fans`,
    },
    {
      title: `4-Week Workout Split`,
      description: `Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
      name: `John Doe`,
      fanCount: `51.2k fans`,
    },
    {
      title: `ivan`,
      description: `Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
      name: `John Doe`,
      fanCount: `51.2k fans`,
    },
  ];
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % cardInfo.length);
  };
  const prevSlide = () => {
    setSlide((slide - 1 + cardInfo.length) % cardInfo.length);
  };
  return (
    <S.SectionContainer>
      <S.CarouselButtons>
        <S.Button
          variant="primary"
          fill="black"
          iconPath="M15.8327 9.99984H4.16602M4.16602 9.99984L9.99935 15.8332M4.16602 9.99984L9.99935 4.1665"
          onClick={prevSlide}
        />
        <S.Button
          variant="primary"
          fill="black"
          iconPath="M4.16602 9.99984H15.8327M15.8327 9.99984L9.99935 4.1665M15.8327 9.99984L9.99935 15.8332"
          onClick={nextSlide}
        />
      </S.CarouselButtons>
      <S.Container>
        <S.HeadingDiv>
          <S.Heading>
            Find{" "}
            <S.Span gradient="purpleToBlue">
              new <br />
              new ways to train.
            </S.Span>
          </S.Heading>
          <S.Description>
            Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
            Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed.
          </S.Description>
          <S.ButtonDiv>
            <S.Button
              variant="secondary"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#fff"
              strokeOpacity={1}
              iconPath="M4.16602 9.99984H15.8327M15.8327 9.99984L9.99935 4.1665M15.8327 9.99984L9.99935 15.8332"
            >
              Visit the workout shop
            </S.Button>
            <S.Button
              variant="tertiary"
              viewBox="0 0 20 20"
              stroke="#0F1324"
              strokeOpacity={0.6}
              fill="none"
              iconPath="M9.99935 16.6668H4.33268C3.39926 16.6668 2.93255 16.6668 2.57603 16.4852C2.26243 16.3254 2.00746 16.0704 1.84767 15.7568C1.66602 15.4003 1.66602 14.9336 1.66602 14.0002V6.00016C1.66602 5.06674 1.66602 4.60003 1.84767 4.24351C2.00746 3.92991 2.26243 3.67494 2.57603 3.51515C2.93255 3.3335 3.39926 3.3335 4.33268 3.3335H4.66602C6.53286 3.3335 7.46628 3.3335 8.17932 3.69681C8.80652 4.01639 9.31646 4.52632 9.63604 5.15353C9.99935 5.86657 9.99935 6.79999 9.99935 8.66683M9.99935 16.6668V8.66683M9.99935 16.6668H15.666C16.5994 16.6668 17.0661 16.6668 17.4227 16.4852C17.7363 16.3254 17.9912 16.0704 18.151 15.7568C18.3327 15.4003 18.3327 14.9336 18.3327 14.0002V6.00016C18.3327 5.06674 18.3327 4.60003 18.151 4.24351C17.9912 3.92991 17.7363 3.67494 17.4227 3.51515C17.0661 3.3335 16.5994 3.3335 15.666 3.3335H15.3327C13.4658 3.3335 12.5324 3.3335 11.8194 3.69681C11.1922 4.01639 10.6822 4.52632 10.3627 5.15353C9.99935 5.86657 9.99935 6.79999 9.99935 8.66683"
            />
          </S.ButtonDiv>
        </S.HeadingDiv>
        <S.CarouselDiv slide={slide}>
          {cardInfo.map((card, index) => {
            const startIndex = slide;
            const visibleCardCount = 3;
            const endIndex = startIndex + visibleCardCount;

            if (index >= startIndex && index < endIndex) {
              return (
                <S.Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  name={card.name}
                  fanCount={card.fanCount}
                  style={{
                    transform: `translateX(${-(slide * (360 + 24))}px)`, // Adjust translation based on card width and gap
                    display:
                      index >= startIndex && index < endIndex
                        ? "block"
                        : "none", // Hide cards outside the range // Show only cards within the range
                  }}
                />
              );
            }

            return null;
          })}
        </S.CarouselDiv>
        {/* <S.CarouselDiv slide={slide}>
  {Array.from({ length: 3 }).map((_, idx) => {
    // Compute the card index using the modulo operator to create a repeating effect
    const cardIndex = (slide + idx) % cardInfo.length;
    const card = cardInfo[cardIndex];

    return (
      <S.Card
        key={cardIndex + idx * cardInfo.length} // Unique key for each instance
        title={card.title}
        description={card.description}
        name={card.name}
        fanCount={card.fanCount}
        style={{
          display: 'block',
          transition: `3s ease-in-out`,
          // Always display the card in the loop
        }}
      />
    );
  })}
</S.CarouselDiv> */}
      </S.Container>
    </S.SectionContainer>
  );
};
