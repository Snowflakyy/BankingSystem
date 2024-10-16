import { css, styled } from "styled-components";
import {
  H3Bd as _h3bd,
  BodyMdRg as _bodymdrg,
  BodyMdSb as _bodymdsb,
  Button as _button,
} from "../MockUp/elements";
import { Card as _card } from "./components/Card";
import { HundredsWorkouts as _hundreds } from "./components/HundredsWorkouts";

export const ContentDiv = styled.div(()=>css`
    display:flex;
    flex-direction:column;
    gap:24px;
    align-items:center;
    `)
export const CardDiv = styled.div(
  () => css`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0px 120px 24px 120px;
  `
);
export const HundredsWorkouts = styled(_hundreds)(()=>css`

`)
export const Card = styled(_card)(() => css``);
