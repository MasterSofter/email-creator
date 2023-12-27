import {ListGroup} from "react-bootstrap";
import React from "react";
import {GripVertical} from "react-bootstrap-icons";
import {
    BigImageElement ,
    EmailElement ,
    LetterData ,
    ParagraphElement ,
    TitleElement
} from "../../../../../../types/types";

type PropLetterData = {
    letterData : LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}
export default function ListEmailElements({letterData, setLetterData} : PropLetterData):React.JSX.Element {

    const dragItem = React.useRef<any>(null);
    const dragOverItem = React.useRef<any>(null);

    const onDragStart = (e : React.DragEvent<HTMLElement>, key: number) => {
        dragItem.current = key;
    }

    const onDragEnter = (e : React.DragEvent<HTMLElement>, key: number) => {
        dragOverItem.current = key;
    }

    const onDragEnd = (e : React.DragEvent<HTMLElement>, key: number) => {
        handleSorting();
    }

    const handleSorting = () => {
        let draggedItemContent = letterData.elements.splice(dragItem.current,1)[0];
        letterData.elements.splice(dragOverItem.current,0, draggedItemContent);

        dragItem.current = null;
        dragOverItem.current = null;

        setLetterData({...letterData, elements: letterData.elements});
    }

    return (
        <ListGroup id={"list-email-elements"} style={{maxHeight:"100%", overflowY:"auto"}}>

            {
                letterData.elements.map((value : EmailElement,key:number) : React.JSX.Element => {

                    let titleItem : string = "";
                    if(value instanceof (TitleElement))
                        titleItem = "Заголовок";
                    else if(value instanceof (BigImageElement))
                        titleItem = "Большая картинка";
                    else if(value instanceof (ParagraphElement))
                        titleItem = "Параграф";

                    return (
                        <ListGroup.Item onClick={ () => { setLetterData({...letterData, activeElement: value} ) } }
                                        action
                                        key={"element-" + key}
                                        eventKey={value.getType()}
                                        className={"d-flex flex-row justify-content-between align-items-center"}
                                        draggable
                                        onDragStart={(e) => onDragStart(e, key)}
                                        onDragEnter={(e) => onDragEnter(e, key)}
                                        onDragEnd={(e) => onDragEnd(e, key)}
                                        onDragOver={(e) => e.preventDefault()}
                        >
                            <h3>{titleItem}</h3>
                            <GripVertical size={ 32 }/>
                        </ListGroup.Item>
                    )

                })
            }


        </ListGroup>
    );
}