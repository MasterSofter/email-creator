import React, {ChangeEvent} from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

type Props = {
    title: string;
    handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function TitleInput( { title, handleInputChange }: Props ) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Основной заголовок</FormLabel>
            <FormControl onChange={handleInputChange} value={title} type="text" name="title" id="titleInput" required/>
        </FormGroup>
    );
}
