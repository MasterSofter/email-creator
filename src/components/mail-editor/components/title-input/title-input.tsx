import React from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {MailData , TitleElement} from "../../../../types/types";

type Props = {
  element : TitleElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function TitleInput( {element, mailData, setMailData}: Props ) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Заголовок</FormLabel>
            <FormControl
                value={element.Title}
                type="text"
                name="title"
                id="titleInput"
                onChange={(value) => {
                    element.Title = value.currentTarget.value
                  setMailData({...mailData, elements : mailData.elements});
                } }
                required/>
        </FormGroup>
    );
}
