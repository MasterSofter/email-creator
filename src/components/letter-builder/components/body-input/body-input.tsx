import ReactQuill from "react-quill";
import React from "react";
import {FormGroup, FormLabel} from "react-bootstrap";

type Props = {
    body: string;
    handleReactQuillChange: (body: string) => void;
}

export default function BodyInput({ body, handleReactQuillChange }: Props) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Тело письма</FormLabel>
            <ReactQuill
                className={"border rounded-3"}
                theme={"snow"}
                value={body}
                id="reactQuill"
                onChange={handleReactQuillChange}/>
        </FormGroup>
    );
}
