import React from 'react'
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import TipSmallVersion from "../componenten/Tips/TipSmallVersion";
import pictureCanal from "../images/pictureCanal.png";
import Group from "../componenten/group/Group";
import './PageGroup.css'
import ExplainText from "../componenten/explainText/ExplainText";

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
            <ExplainText/>
        </div>
    )
}

export default PageGroup;