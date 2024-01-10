import React from "react";
import Logo from "./components/logo/logo";
import Title from "./components/title/title";
import {BigImageElement, InfoItemSignUpElement, LetterData, ParagraphElement, TitleElement} from "../../types/types";
import {BigImage} from "./components/bigimage/bigimage";
import {Paragraph} from "./components/paragraph/paragraph";
import InfoItemSignUp from "./components/info-item-sign-up/info-item-sign-up";

type Props = {
    letterData: LetterData;
    is_builtLetter: boolean;
}


export default function LetterViewer({letterData, is_builtLetter}: Props): React.JSX.Element {
    return (
        <div style={{
            width: '100%',
            margin: 0,
            padding: 0
        }}
        >
            <table align="center"
                   border={0}
                   cellSpacing={0}
                   cellPadding={0}
                   role="presentation"
                   style={{
                       color: '#1C1E23',
                       fontFamily: 'Helvetica, sans-serif, Arial',
                       margin: 'auto',
                       padding: 0,
                       width: '94%',
                       minWidth: '580px',
                       maxWidth: '600px'
                   }}
            >
                <tbody>
                <Logo is_builtLetter={is_builtLetter}/>
                {
                    letterData.map((value, key) => (
                        value instanceof (TitleElement)
                            ? <Title key={key} title={value.getValue()}/>
                            : value instanceof (BigImageElement)
                                ? <BigImage key={key} url={value.getValue()} is_builtLetter={is_builtLetter}/>
                                : value instanceof (ParagraphElement)
                                    ? <Paragraph key={key} text={value.getValue()}/>
                                    : value instanceof (InfoItemSignUpElement)
                                        ? <InfoItemSignUp key={key}
                                                          text={value.getValue().text}
                                                          title={value.getValue().title}
                                                          imageUrl={value.getValue().imageUrl}
                                                          age={value.getValue().age}
                                                          amountOfDays={value.getValue().amountOfDays}
                                                          metroImageUrl={value.getValue().metroStation.imageUrl}
                                                          periods={value.getValue().periods}
                                                          is_builtLetter={is_builtLetter}
                                        /> : <></>
                    ) )
                }
                </tbody>
            </table>
        </div>
    );
}

