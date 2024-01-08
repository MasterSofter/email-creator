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
    letterData : LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
    selectedTab : EmailElement;
    setSelectedTab:  React.Dispatch<React.SetStateAction<EmailElement>>;
}

export function TypeElementInput({letterData, setLetterData, selectedTab, setSelectedTab} : Props) : React.JSX.Element {
    const types : string[] = ["Заголовок", "Параграф", "Баольшая картинка", "Блок \"Записаться\""];

    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Тип элемента</FormLabel>
            <DropdownButton id="dropdown-basic-button" title={selectedTab.getName()}>
                {
                    types.map((value, index) => {
                        return (
                            <Dropdown.Item
                                title={value}
                                key = {"dropDownItem-" + index}
                                onClick={(value) => {
                                    let indexElement = letterData.indexOf(selectedTab);
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
                                    setSelectedTab(letterData[indexElement]);
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
