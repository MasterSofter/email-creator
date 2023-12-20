import React, {ChangeEvent} from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

type Props = {
    image: string;
    handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageInput( { image, handleInputChange }: Props ) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Основное изображение</FormLabel>
            <FormControl onChange={handleInputChange} value={image} type="text" name="image" id="imageInput" required/>
        </FormGroup>

    );
}
