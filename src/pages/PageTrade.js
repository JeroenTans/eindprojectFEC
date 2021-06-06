import React from 'react';
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import TipInMaking from "../componenten/Tips/TipInMaking";
import TipSmallVersion from "../componenten/Tips/TipSmallVersion";
import pictureCanal from "../images/pictureCanal.png"
import pictureCanalTwo from "../images/pictureCanalTwo.png"
import ReusableButton from "../componenten/button/ReusableButton";


function PageTrade () {
    return (

        <div className="pageBackground">
            <NavBar/>
            <div className="box">
                <div className="whatToDo">Opgeslagen Tips</div>
                <div className="whatToDo">Maak uw tip</div>
            </div>
            <div className="completeBox">
                <div className="boxTrade">
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                            />
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                        />
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                        />
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                        />
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                        />
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                        />
                        <TipSmallVersion
                            image={pictureCanal}
                            adres="Lijnbaansgracht 91"
                        />
                    <TipSmallVersion
                        image={pictureCanal}
                        adres="Lijnbaansgracht 91"
                    />
                </div>
                    <div className="makeTipBoxPage">
                        <TipInMaking
                            uploadImage={pictureCanalTwo}
                            className="makeTipPage"/>
                    </div>
                </div>
            <ReusableButton/>
        </div>

    )
}

export default PageTrade