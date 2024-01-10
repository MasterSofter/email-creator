import React from "react";
import {Card , CardBody , CardHeader} from "react-bootstrap";
import ListEmailElements from "./components/list-email-elements/list-email-elements";
import {LetterData} from "../../../../types/types";
import SaveButtons from "../save-buttons/save-buttons";

type Props = {
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
    letter: null | HTMLDivElement;
    set_is_BuiltLetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditorStructure({letter, set_is_BuiltLetter, letterData , setLetterData }: Props ): React.JSX.Element {
    return (
        <Card style={ {height : "100%", overflowY : "auto"} }>
            <CardHeader className="fw-bold h5 py-3 d-flex flex-row justify-content-between align-items-center">
                <span>Структура письма</span>
                <SaveButtons letter={letter} set_is_BuiltLetter={set_is_BuiltLetter}/>
            </CardHeader>
            <CardBody style={ {height : "100%", overflowY : "auto"} }>
                <ListEmailElements letterData={ letterData } setLetterData={ setLetterData }/>
            </CardBody>
        </Card>
    );
}
