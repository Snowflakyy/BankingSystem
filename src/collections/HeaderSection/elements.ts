import {css, styled } from "styled-components";
import {TeleDiv as _tele} from "./TeleDiv"
import { HomeDiv as _home } from "./HomeDiv";
export const Container = styled.div(()=>css`
position:relative;
width:100%;
max-width:1440px;
margin:0px 30px;
height:auto;
max-height:755px;
display:grid;
grid-template-columns:583fr 781fr;
padding: 30px 50px;
row-gap:18px;
`)
export const Home = styled(_home)(() => css``)
export const Tele = styled(_tele)(() => css``)



