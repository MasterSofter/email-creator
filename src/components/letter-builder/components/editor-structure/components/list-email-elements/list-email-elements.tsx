import React from "react";
import {Reorder} from "framer-motion";
import {EmailElement , LetterData} from "../../../../../../types/types";
import {Item} from "./components/item";

type PropLetterData = {
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
    selectedTab: EmailElement;
    setSelectedTab: React.Dispatch<React.SetStateAction<EmailElement>>;
}

export default function ListEmailElements({ letterData , setLetterData , selectedTab , setSelectedTab
                                          }: PropLetterData): React.JSX.Element {

    return (
        <Reorder.Group
            axis="y"
            onReorder={ setLetterData }
            values={ letterData }
            className={ "border border-1 rounded-3" }
            style={ {
                backgroundColor : "rgba(243,243,243,0.63)" ,
                height : "100%" ,
                width : "100%" ,
                overflowY : "auto"
            } }
            layoutScroll
        >
            { letterData.map((item , index) => (
                <Item key={ item.getElementKey() } item={ item } isSelected={ selectedTab === item }
                      setSelectedTab={ setSelectedTab }/>
            )) }
        </Reorder.Group>
    );
}
