import React from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {LetterData , TitleElement} from "../../../../types/types";

type Props = {
    element : TitleElement;
    letterData: LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function TitleInput( {element, letterData, setLetterData}: Props ) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Заголовок</FormLabel>
            <FormControl
                value={element.getValue()}
                type="text"
                name="title"
                id="titleInput"
                onChange={(value) => {
                    element.setValue(value.currentTarget.value)
                    setLetterData([...letterData]);
                } }
                required/>
        </FormGroup>
    );
}
