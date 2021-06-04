import React from 'react';
import './PageAvailableTip.css'
import TipSmallVersion from "../componenten/Tips/TipSmallVersion";
import pictureCanal from "../images/pictureCanal.png";
import pictureCanalTwo from "../images/pictureCanalTwo.png";
import pictureCanalThree from "../images/pictureCanalThree.png";
import pictureCanalFour from "../images/pictureCanalFour.png";
import NavBar from "../componenten/navBar/NavBar";
import ReusableButton from "../componenten/button/ReusableButton";


function PageAvailableTip () {
    return (
        <div className="pageBackground">
            <NavBar id="navBarAvailableTip" />
            {/*<div id="pageAvailableBox">*/}
            {/*    <img src={amsterdam} alt="background"/>*/}
            {/*</div>*/}
                <div className="tipPageBox">
                    <TipSmallVersion
                        adres="Bloemgracht 4"
                        image={pictureCanal}
                    />
                    <TipSmallVersion
                        adres="Nieuwedijk 5"
                        image={pictureCanalTwo}
                    />
                    <TipSmallVersion
                        adres="Westermarkt 20"
                        image={pictureCanalThree}
                    />
                    <TipSmallVersion
                        adres="lijnbaansgracht 91"
                        image={pictureCanalFour}
                    />
                    <TipSmallVersion
                        adres="Bloemgracht 4"
                        image={pictureCanal}
                    />
                    <TipSmallVersion
                        adres="Nieuwedijk 5"
                        image={pictureCanalTwo}
                    />
                    <TipSmallVersion
                        adres="Westermarkt 20"
                        image={pictureCanalThree}
                    />
                    <TipSmallVersion
                        adres="lijnbaansgracht 91"
                        image={pictureCanalFour}
                    />
                </div>
                <div id="explainButton">
                <ReusableButton
                        buttonTitle="Uitleg"
                />
                </div>
        </div>

    )
}

export default PageAvailableTip;