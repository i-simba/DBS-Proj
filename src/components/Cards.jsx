import { CardContainer, CardImage, CardSub, CardTitle } from "../styles/Cards.styles";
import { COLORS } from "../styles/Global.styles";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import StarIcon from '@mui/icons-material/Star';

const Cards = ({image, title, sub, bday, topBox, fanFav, person, index}) => {
    /* Icon styling */
    const iconStyle = {
        transform: `translate(0px, 7px)`,
    }


    return (
        <CardContainer>
            <div style={{aspectRatio: person ? "1/1" : "2/3"}}>
                {person ? <CardImage src={image} style={{borderRadius: "50%"}}/> 
                        : <CardImage src={image}/>}
                <div style={{padding: "0.75rem", height: person ? "50%" : "30%"}}>
                    {person ? (
                            <CardSub>
                                <CalendarMonthIcon style={{fill: `${COLORS.blueCalendar}`, ...iconStyle}}/>
                                &ensp;{bday}&emsp;|&ensp;{sub} yo
                            </CardSub>
                        ) : (
                            <CardSub>
                                {topBox ? <PaidIcon style={{fill: `${COLORS.greenMoney}`, ...iconStyle}}/> : ""}
                                {fanFav ? <StarIcon style={{fill: `${COLORS.starGold}`, ...iconStyle}}/> : ""}
                                &ensp;{sub}
                            </CardSub>
                        )}
                    <div style={{display: "flex", flexDirection: "row", paddingLeft: "0.65rem"}}>
                        {person ? '' : `${index + 1}`}
                        {person ? '' : '.'}
                        &ensp;
                        <CardTitle>{title}</CardTitle>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
}

export default Cards;