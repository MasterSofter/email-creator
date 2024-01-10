import React from "react";
import {FormGroup , FormLabel} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
    BigImageElement,
    EmailElement,
    InfoItemSignUpElement,
    LetterData,
    ParagraphElement,
    TitleElement
} from "../../../../types/types";

type Props = {
    element : EmailElement;
    letterData : LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export function TypeElementInput({element, letterData, setLetterData} : Props) : React.JSX.Element {
    const types : string[] = ["Заголовок", "Параграф", "Баольшая картинка", "Блок \"Записаться\""];

    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Тип элемента</FormLabel>
            <DropdownButton id="dropdown-basic-button" title={element.getName()}>
                {
                    types.map((value, index) => {
                        return (
                            <Dropdown.Item
                                title={value}
                                key = {"dropDownItem-" + index}
                                onClick={(value) => {
                                    let indexElement = letterData.indexOf(element);
                                    switch (value.currentTarget.title){
                                        case "Заголовок" :
                                        {
                                            letterData[indexElement] = new TitleElement();
                                            break;
                                        }
                                        case "Параграф" :
                                        {
                                            letterData[indexElement] = new ParagraphElement();
                                            break;
                                        }
                                        case "Баольшая картинка" :
                                        {
                                            letterData[indexElement] = new BigImageElement();
                                            break;
                                        }
                                        case "Блок \"Записаться\"" :
                                        {
                                            letterData[indexElement] = new InfoItemSignUpElement();
                                            break;
                                        }
                                    }
                                    setLetterData([...letterData]);
                                } }
                            >{value}</Dropdown.Item>
                        );
                    })
                }
            </DropdownButton>
        </FormGroup>
    );
}
