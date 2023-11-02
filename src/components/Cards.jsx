import { CardImage, CardSub, CardTitle } from "../styles/Cards.styles";
import { COLORS, GlobalContainer } from "../styles/Global.styles";
import PaidIcon from '@mui/icons-material/Paid';
import StarIcon from '@mui/icons-material/Star';

const Cards = ({image, title, sub, topBox, fanFav, index}) => {
    /* Icon styling */
    const iconStyle = {
        transform: `translate(0px, 7px)`,
    }


    return (
        <GlobalContainer>
            <div style={{aspectRatio: "2/3"}}>
                <CardImage src={image}/>
                <div style={{padding: "0.75rem", height: "25%"}}>
                    <CardSub>
                        {topBox ? <PaidIcon style={{fill: `${COLORS.greenMoney}`, ...iconStyle}}/> : ""}
                        {fanFav ? <StarIcon style={{fill: `${COLORS.starGold}`, ...iconStyle}}/> : ""}
                        &ensp;{sub}
                    </CardSub>
                    <div style={{display: "flex", flexDirection: "row", paddingLeft: "0.65rem"}}>
                        {index + 1}.&ensp;
                        <CardTitle>{title}</CardTitle>
                    </div>
                </div>
            </div>
        </GlobalContainer>
    );
}

export default Cards;