import * as S from "./elements"
import AvatarJane from "../../../../images/Avatars/Avatar1.png"
export const HomeDiv =({...props})=>{
    const avatars = Array.from({ length: 9 });
    return <S.HomeDiv>
        <S.Container>
            <S.HeadingDiv>
                <S.Heading gradient="none">A new home for your fitness journey.</S.Heading>
            </S.HeadingDiv>
            <S.BodyDiv>
                <S.Body>Donec vitae mi vulputate, suscipit urna in,
                     malesuada nisl, ellentesque laoreet pretium.</S.Body>
                     <S.ButtonDiv>
                     <S.Button fill="#14151A" variant="primary" iconPath="M4.16602 9.99999H15.8327M15.8327 9.99999L9.99935 4.16666M15.8327 9.99999L9.99935 15.8333">Get Started</S.Button>
                     <S.Button  fill="#fff" variant="tertiary" iconPath="M4.16602 9.99999H15.8327M15.8327 9.99999L9.99935 4.16666M15.8327 9.99999L9.99935 15.8333">Get Started</S.Button>
                     </S.ButtonDiv>
            </S.BodyDiv>
            <S.DescDiv>
                <S.Description >Trusted by 100k+ people</S.Description>
                <S.AvatarsDiv>
                {avatars.map((_, index) => (
                        <S.Avatar key={index} src={AvatarJane} />
                    ))}
                    </S.AvatarsDiv>
            </S.DescDiv>
        </S.Container>
    </S.HomeDiv>
}