import React from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {BigImageElement , LetterData} from "../../../../types/types";

type Props = {
    element : BigImageElement;
    letterData: LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function BigImageInput({element, letterData, setLetterData}: Props ) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>URL изображения</FormLabel>
            <FormControl
                value={element.getValue()}
                type="text"
                name="image"
                id="imageInput"
                onChange={(value) => {
                    element.setValue(value.currentTarget.value)
                    setLetterData([...letterData]);
                } }
                required/>
        </FormGroup>
    );
}
