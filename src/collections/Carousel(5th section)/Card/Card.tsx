import { HTMLDivProps } from "../../../types";
import * as S from "./elements";

interface CardProps extends HTMLDivProps {
  title?: string;
  description?: string;
  name?: string;
  fanCount?: string;
}
export const Card = ({
  title,
  description,
  name,
  fanCount,
  ...props
}: CardProps) => {
  return (
    <S.Card>
      <S.CardContainer>
        <S.Image />
        <S.Heading>{title}</S.Heading>
        <S.HeadingDesc>{description}</S.HeadingDesc>
        <S.SubscriberInfoDiv>
          <S.SubscriberDiv>
            <S.Avatar src="" />
            <S.SubsDescDiv>
              <S.SubscirberName>{name}</S.SubscirberName>
              <S.SubscirberFans>{fanCount}</S.SubscirberFans>
            </S.SubsDescDiv>
          </S.SubscriberDiv>
          <S.ButtonDiv>
            <S.Button
              viewBox="0 0 16 16"
              fill="none"
              stroke="#0F1324"
              strokeOpacity={0.6}
              variant="tertiary"
              iconPath="M3.33398 5.2C3.33398 4.0799 3.33398 3.51984 3.55197 3.09202C3.74372 2.71569 4.04968 2.40973 4.426 2.21799C4.85383 2 5.41388 2 6.53398 2H9.46732C10.5874 2 11.1475 2 11.5753 2.21799C11.9516 2.40973 12.2576 2.71569 12.4493 3.09202C12.6673 3.51984 12.6673 4.0799 12.6673 5.2V14L8.00065 11.3333L3.33398 14V5.2Z"
            />
            <S.Button
              viewBox="0 0 16 16"
              fill="none"
              stroke="#0F1324"
              strokeOpacity={0.6}
              variant="tertiary"
              iconPath="M4.33408 11.3335H11.5536C12.1869 11.3335 12.5035 11.3335 12.7616 11.2191C12.9891 11.1182 13.1839 10.9557 13.3238 10.7499C13.4825 10.5164 13.5392 10.2049 13.6525 9.58179L14.553 4.6289C14.5923 4.41295 14.6119 4.30497 14.5816 4.22066C14.555 4.14669 14.5031 4.0845 14.435 4.04509C14.3575 4.00016 14.2478 4.00016 14.0283 4.00016H3.33408M1.33398 1.3335H2.21159C2.37338 1.3335 2.45428 1.3335 2.5197 1.36305C2.57737 1.3891 2.62643 1.43102 2.66115 1.48392C2.70054 1.54393 2.71316 1.62384 2.73839 1.78365L4.59624 13.55C4.62147 13.7098 4.63409 13.7897 4.67349 13.8497C4.70821 13.9026 4.75727 13.9446 4.81493 13.9706C4.88036 14.0002 4.96126 14.0002 5.12305 14.0002H12.6673"
            />
            <S.Button
              stroke="#fff"
              strokeOpacity={1}
              viewBox="0 0 16 16"
              fill="none"
              variant="secondary"
              iconPath="M3.33398 8.00016H12.6673M12.6673 8.00016L8.00065 3.3335M12.6673 8.00016L8.00065 12.6668"
            >
              Subscribe
            </S.Button>
          </S.ButtonDiv>
        </S.SubscriberInfoDiv>
      </S.CardContainer>
    </S.Card>
  );
};
