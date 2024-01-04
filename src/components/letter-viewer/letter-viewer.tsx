import React from "react";
import Logo from "./components/logo/logo";
import Title from "./components/title/title";
import {BigImageElement , LetterData , ParagraphElement , TitleElement} from "../../types/types";
import {BigImage} from "./components/bigimage/bigimage";
import {Paragraph} from "./components/paragraph/paragraph";

type Props = {
    letterData: LetterData;
    is_builtLetter : boolean;
}

export default function LetterViewer({letterData, is_builtLetter}: Props): React.JSX.Element {
    return (
        <div style={ {
            width : '100%' ,
            margin : 0 ,
            padding : 0
        } }
        >
            <table align="center"
                   border={ 0 }
                   cellSpacing={ 0 }
                   cellPadding={ 0 }
                   role="presentation"
                   style={ {
                       color : '#1C1E23' ,
                       fontFamily : 'Helvetica, sans-serif, Arial' ,
                       margin : 'auto' ,
                       padding : 0 ,
                       width : '94%' ,
                       minWidth : '200px' ,
                       maxWidth : '600px'
                   } }
            >
                <tbody>
                <Logo is_builtLetter={is_builtLetter}/>
                {
                    letterData.map((value , key) => {
                        if (value instanceof (TitleElement))
                            return <Title key={ key } title={ value.getValue() }/>
                        else if (value instanceof (BigImageElement))
                            return <BigImage key={ key } url={ value.getValue() } is_builtLetter={is_builtLetter}/>
                        else if (value instanceof (ParagraphElement))
                            return <Paragraph key={ key } text={ value.getValue() }/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

