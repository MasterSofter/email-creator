import React from "react";
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
    element : EmailElement;
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function EditorElement({element, letterData , setLetterData }: Props): JSX.Element {
    const renderList: Array<React.JSX.Element> = new Array<React.JSX.Element>();
    if (element) {
        renderList.push(
            <TypeElementInput element={element} letterData={ letterData } setLetterData={ setLetterData }/>
        );

        if (element instanceof (TitleElement)) {
            renderList.push(
                <TitleInput element={ (element) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        } else if (element instanceof (BigImageElement)) {
            renderList.push(
                <BigImageInput element={ (element) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        } else if (element instanceof (ParagraphElement)) {
            renderList.push(
                <ParagraphInput element={ (element) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        } else if (element instanceof (InfoItemSignUpElement)) {
            renderList.push(
                <InfoItemSignUpInput element={ (element) } letterData={ letterData } setLetterData={ setLetterData }/>
            );
        }
    }

    return (
        <div style={ {textAlign : "left"} }>
            { renderList }
        </div> );
    }
