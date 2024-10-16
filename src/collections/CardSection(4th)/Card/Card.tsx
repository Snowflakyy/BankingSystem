import { HTMLDivProps } from "../../../types";
import * as S from "./elements";
interface CardProps extends HTMLDivProps {
  title?: string;
  description?: string;
  iconPath?: string;
  cardRef: React.Ref<HTMLDivElement>;
}
export const Card = ({
  title,
  description,
  iconPath,
  cardRef,
  ...props
}: CardProps) => {
  return (
    <S.Cardontainer tabIndex={0}>
      <S.Icon path={iconPath} fill="#0F1234" />
      <S.TextDiv>
        <S.H4>{title}</S.H4>
        <S.bodyDesc ref={cardRef}>{description}</S.bodyDesc>
      </S.TextDiv>
    </S.Cardontainer>
  );
};
