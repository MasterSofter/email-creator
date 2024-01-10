import {
    EmailElement,
    LetterData
} from "../../../../../../../types/types";
import React, {useEffect, useState} from "react";
import {Reorder, animate, MotionValue , useMotionValue} from "framer-motion";
import {Accordion} from "react-bootstrap";
import {GripVertical, TrashFill} from "react-bootstrap-icons";
import EditorElement from "../../../../editor-element/editor-element";

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

function useRaisedShadow(value: MotionValue<number>) {
    const boxShadow = useMotionValue(inactiveShadow);

    useEffect(() => {
        let isActive = false;
        value.onChange((latest) => {
            const wasActive = isActive;
            if (latest !== 0) {
                isActive = true;
                if (isActive !== wasActive) {
                    animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
                }
            } else {
                isActive = false;
                if (isActive !== wasActive) {
                    animate(boxShadow, inactiveShadow);
                }
            }
        });
    }, [value, boxShadow]);

    return boxShadow;
}

type Props = {
    element: EmailElement;
    removeTab : (element : EmailElement) => void;
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
}

export const Item = ({ element, removeTab, letterData, setLetterData}: Props) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    const [_dragListener, setDragListener] = useState<boolean>(true);

    return (
        <Reorder.Item
                dragListener={ _dragListener }
                value={element}
                id={element.getElementKey()}
                className={"d-flex flex-row justify-content-between"}
                style={ { color: "#858585" ,
                      backgroundColor: "white" ,
                      width : "100%" ,
                      fontWeight : "600",
                      fontSize : "18px",
                      boxShadow, y }}
        >
            <GripVertical className={"grip-vertical-icon ps-0 pe-2 py-0"}
                          style={{backgroundColor:"transparent", color: "#b0b0b0"}}/>
            <Accordion
                onMouseEnter={()=> setDragListener(false)}
                onMouseLeave={() => setDragListener(true)}
                id={`accordion-${element.getElementKey()}`}
                style={{width : "100%", cursor : "default"}}>
                <Accordion.Item eventKey={`accordion-${element.getElementKey()}`}>
                    <Accordion.Header className={"d-flex flex-row justify-content-between"}>
                        <span>{element.getName()}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <EditorElement element={element} letterData={letterData} setLetterData={setLetterData}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <TrashFill className={"trash-fill-icon ps-3 pe-0 py-1"}
                       style={{backgroundColor:"transparent", color: "#b0b0b0", cursor : "pointer"}}
                       onClick={ () => {
                           removeTab(element);
                       } }/>
        </Reorder.Item>
    );
};
