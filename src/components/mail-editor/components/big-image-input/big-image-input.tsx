import React from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {BigImageElement , MailData} from "../../../../types/types";

type Props = {
  element : BigImageElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function BigImageInput({element, mailData, setMailData}: Props ) : React.JSX.Element {
    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>URL изображения</FormLabel>
            <FormControl
                value={element.Url}
                type="text"
                name="image"
                id="imageInput"
                onChange={(value) => {
                    element.Url = value.currentTarget.value;
                  setMailData({...mailData, elements: mailData.elements});
                } }
                required/>
        </FormGroup>
    );
}
