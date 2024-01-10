import React, {useEffect, useRef} from "react";
import {Reorder} from "framer-motion";
import {EmailElement, EmptyElement, LetterData} from "../../../../../../types/types";
import {Item} from "./components/item";
import {Button} from "react-bootstrap";
import {removeItem} from "./components/array-utils";
import {PlusSquareFill} from "react-bootstrap-icons";

type PropLetterData = {
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function ListEmailElements({ letterData , setLetterData}: PropLetterData): React.JSX.Element {

    const removeTab = (element: EmailElement) => {
        setLetterData(removeItem(letterData , element));
    };

    const addTab = () => {
        setLetterData([...letterData , new EmptyElement()]);
    };

    const a = useRef();

    useEffect(() => {
        document.addEventListener('mouseenter', function (event) {
           console.log(event.currentTarget);
        }, false);
    },[a]);

    return (
        <Reorder.Group
            axis="y"
            onReorder={ setLetterData }
            values={ letterData }
            className={ "border border-1 rounded-3 text-center align-items-center" }
            style={ {
                backgroundColor : "rgba(243,243,243,0.63)" ,
                height : "100%" ,
                width : "100%" ,
                overflowY : "auto"
            } }
            layoutScroll
        >
            { letterData.map((element , index) => (
                <Item key={ element.getElementKey() } element={ element } removeTab={removeTab} letterData={letterData} setLetterData={setLetterData}/>
            )) }
            <Button
                className={"border-0 my-5 text-center fs-1 fw-bold px-4"}
                style={{backgroundColor:"transparent", color: "#dedede"}}
                size="lg"
                onClick={ () => {
                    addTab()
                } }
            >
                <PlusSquareFill className={"plus-circle-fill"}/>
            </Button>
        </Reorder.Group>
    );
}
