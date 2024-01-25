import React from "react";
import {MailData} from "../../types/types";
import {Card, CardBody, CardHeader} from "react-bootstrap";
import SaveButtonsHtml from "../mail-editor/components/save-buttons-html/save-buttons-html";
import MailViewer from "./mail-viewer";

export default function MailPreview(props: {
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
  mail: React.MutableRefObject<HTMLDivElement | null>;
  set_is_BuiltLetter: React.Dispatch<React.SetStateAction<boolean>>;
  is_builtLetter: boolean;
  mailData: MailData;
}): JSX.Element {
  return (
    <Card style={{height: "100%", overflow: "hidden"}}>
      <CardHeader className="fw-bold h5 py-2 d-flex flex-row justify-content-between align-items-center">
        <span>Предосмотр письма</span>
        <SaveButtonsHtml mail={props.mail.current} set_is_BuiltLetter={props.set_is_BuiltLetter}/>
      </CardHeader>
      <CardBody className="overflow-y-auto">
        <div ref={props.mail}>
          <MailViewer mailData={props.mailData} is_builtLetter={props.is_builtLetter}/>
        </div>
      </CardBody>
    </Card>
  );
}