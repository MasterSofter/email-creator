import React from "react";
import {Card, CardBody, CardHeader} from "react-bootstrap";
import {MailData} from "../../types/types";
import ListEmailElements from "./components/list-email-elements/list-email-elements";
import ButtonsMailEditor from "./components/buttons-mail-editor/buttons-mail-editor";

export default function MailEditor(props: {
  mailData: MailData, setMailData:
    React.Dispatch<React.SetStateAction<MailData>>
}): React.JSX.Element {
  return (
    <Card style={{height: "100%", overflowY: "auto"}}>
      <CardHeader className="fw-bold h5 py-2 d-flex flex-row justify-content-between align-items-center">
        <span>Редактор шаблона письма</span>
        <ButtonsMailEditor mailData={props.mailData} setMailData={props.setMailData}/>
      </CardHeader>
      <CardBody style={{height: "100%", overflowY: "auto"}}>
        <ListEmailElements mailData={props.mailData} setMailData={props.setMailData}/>
      </CardBody>
    </Card>
  );
}
