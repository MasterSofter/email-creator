import React from 'react';
import {
    BadgesElement,
    BigImageElement,
    BaseEmailElement,
    AboutElement,
    SignUpElement,
    MailData,
    ParagraphElement,
    TitleElement
} from '../../../../types/types';
import ParagraphInput from '../paragraph-input/paragraph-input';
import BigImageInput from '../big-image-input/big-image-input';
import TitleInput from '../title-input/title-input';
import {TypeElementInput} from '../type-element-input/type-element-input';
import InfoItemSignUpInput from '../info-item-sign-up-input/info-item-sign-up-input';
import InfoItemAboutInput from '../info-item-about-input/info-item-about-input';
import BadgesInput from "../badges-input/badges-input";

type Props = {
    element: BaseEmailElement;
    mailData: MailData;
    setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function EditorElement({element, mailData, setMailData}: Props): JSX.Element {
    const renderList: Array<React.JSX.Element> = new Array<React.JSX.Element>();
    if (element) {
        renderList.push(
            <TypeElementInput key={`${element.ElementKey}-${renderList.length}`} element={element} mailData={mailData} setMailData={setMailData}/>
        );
        if (element instanceof (TitleElement)) {
            renderList.push(
                <TitleInput key={`${element.ElementKey}-${renderList.length}`} element={(element)} mailData={mailData} setMailData={setMailData}/>
            );
        } else if (element instanceof (BigImageElement)) {
            renderList.push(
                <BigImageInput key={`${element.ElementKey}-${renderList.length}`} element={(element)} mailData={mailData} setMailData={setMailData}/>
            );
        } else if (element instanceof (BadgesElement)) {
            renderList.push(
                <BadgesInput key={`${element.ElementKey}-${renderList.length}`} element={(element)} mailData={mailData} setMailData={setMailData}/>
            );
        } else if (element instanceof (ParagraphElement)) {
            renderList.push(
                <ParagraphInput key={`${element.ElementKey}-${renderList.length}`} element={(element)} mailData={mailData} setMailData={setMailData}/>
            );
        } else if (element instanceof (SignUpElement)) {
            renderList.push(
                <InfoItemSignUpInput key={`${element.ElementKey}-${renderList.length}`} element={(element)} mailData={mailData} setMailData={setMailData}/>
            );
        } else if (element instanceof (AboutElement)) {
            renderList.push(
                <InfoItemAboutInput key={`${element.ElementKey}-${renderList.length}`} element={(element)} mailData={mailData} setMailData={setMailData}/>
            );
        }
    }

    return (
        <div style={{textAlign: 'left'}}>
            {renderList}
        </div>);
}
