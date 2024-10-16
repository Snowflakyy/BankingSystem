import * as S from "./elements"
const cardInfo = [
    {
        name:`Sell your workouts` ,
        description:`Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
    },
    {
        name:`Sell your workouts` ,
        description:`Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
    },
    {
        name:`Sell your workouts` ,
        description:`Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc eros...`,
    },
]
export const InfoSection = () =>{
    return(
    
        <S.ContentDiv>
                <S.HundredsWorkouts/>
                <S.CardDiv>

        {cardInfo.map((card, index) => {
        
            return (
              <S.Card
                key={index}
                description={card.description}
                name={card.name}
              />
    )})}
        </S.CardDiv>
            </S.ContentDiv>
        
    )
}