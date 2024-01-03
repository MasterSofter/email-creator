import ReactQuill from "react-quill";
import React from "react";
import {FormGroup, FormLabel} from "react-bootstrap";
import {LetterData , ParagraphElement} from "../../../../types/types";


type Props = {
    element : ParagraphElement;
    letterData: LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function ParagraphInput({element, letterData, setLetterData} : Props) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Параграф</FormLabel>
            <ReactQuill
                className={"border rounded-3"}
                theme={"snow"}
                value={element.getValue()}
                id="reactQuill"
                onChange={(value) => {
                    element.setValue(value)
                    setLetterData([...letterData]);
                } }/>
        </FormGroup>
    );
}
