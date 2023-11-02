import { CardImage, CardSub, CardTitle } from "../styles/Cards.styles";
import { GlobalContainer } from "../styles/Global.styles";

const Cards = ({image, title, sub}) => {


    return (
        <GlobalContainer>
            <div style={{aspectRatio: "2/3"}}>
                <CardImage src={image}/>
                <div style={{padding: "0.75rem", height: "20%"}}>
                    <CardSub>{sub}</CardSub>
                    <CardTitle>{title}</CardTitle>
                </div>
            </div>
        </GlobalContainer>
    );
}

export default Cards;