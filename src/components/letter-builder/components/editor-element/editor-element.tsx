import React from "react";
import {Card , CardBody , CardHeader} from "react-bootstrap";
import {
    BigImageElement,
    EmailElement,
    InfoItemSignUpElement,
    LetterData,
    ParagraphElement,
    TitleElement
} from "../../../../types/types";
import ParagraphInput from "../paragraph-input/paragraph-input";
import BigImageInput from "../big-image-input/big-image-input";
import TitleInput from "../title-input/title-input";
import {TypeElementInput} from "../type-element-input/type-element-input";
import InfoItemSignUpInput from "../info-item-sign-up-input/info-item-sign-up-input";

type Props = {
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
    selectedTab: EmailElement;
    setSelectedTab: React.Dispatch<React.SetStateAction<EmailElement>>;
}




export default function EditorElement({ letterData , setLetterData , selectedTab , setSelectedTab
                                      }: Props): JSX.Element {

    const renderList: Array<React.JSX.Element> = new Array<React.JSX.Element>();
    if (selectedTab) {
        renderList.push(
            <TypeElementInput letterData={ letterData } setLetterData={ setLetterData } selectedTab={ selectedTab }
                              setSelectedTab={ setSelectedTab }/>
        );

        if (selectedTab instanceof (TitleElement)) {
            renderList.push(
                <TitleInput element={ (selectedTab) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        } else if (selectedTab instanceof (BigImageElement)) {
            renderList.push(
                <BigImageInput element={ (selectedTab) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        } else if (selectedTab instanceof (ParagraphElement)) {
            renderList.push(
                <ParagraphInput element={ (selectedTab) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        } else if (selectedTab instanceof (InfoItemSignUpElement)) {
            renderList.push(
                <InfoItemSignUpInput element={ (selectedTab) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        }
    }

    return (
        <Card style={ {height : "100%"} }>
            <CardHeader className="fw-bold h5 py-3">Редактор элемента письма</CardHeader>
            <CardBody>
                { renderList }
            </CardBody>
        </Card>
    );
}
