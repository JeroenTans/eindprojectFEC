import React from 'react'
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import TipSmallVersion from "../componenten/Tips/TipSmallVersion";
import pictureCanal from "../images/pictureCanal.png";
import TipInMaking from "../componenten/Tips/TipInMaking";
import pictureCanalTwo from "../images/pictureCanalTwo.png";
import ReusableButton from "../componenten/button/ReusableButton";
import Group from "../componenten/group/Group";
import './PageGroup.css'

function PageGroup () {
    return (
        <div className="pageBackground">
            <NavBar/>
            <div className="completeBox">
                <div className="boxGroup">
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
                        <Group
                        className="makeTipPage"/>
                </div>
            </div>
            {/*<div>*/}
            {/*    <TipInMaking className="makeTipPage"/>*/}
            {/*</div>*/}
            <ReusableButton/>
        </div>
    )
}

export default PageGroup;