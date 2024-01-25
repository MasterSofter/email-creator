import React, {useRef, useState} from "react";
import {
  BadgesElement,
  BigImageElement,
  ButtonElement,
  HighlightedParagraphElement,
  MailData,
  ParagraphElement,
  ProductCardElement,
  TitleElement
} from "./types/types";
import {Container, Row} from "react-bootstrap";
import MailEditor from "./components/mail-editor/mail-editor";
import NavBarHead from "./components/nav-bar-head/nav-bar-head";

// Подключение стиилей
import "./scss/style.scss";
import MailPreview from "./components/mail-preview/mail-preview";

const initialItems = [
  BigImageElement.Default(),
  BadgesElement.Default(),
  TitleElement.Default(),
  ParagraphElement.Default(),
  ButtonElement.Default(),
  ProductCardElement.Default(),
  HighlightedParagraphElement.Default()
];

/*
  Версия структуры письма - файла JSON, который сериализуется при сохранении
  Когда в дальнейшем будут добавлены новые элементы письма или изменены существующие - нужно поставить новую версию
  и обеспечить поддержку старых и новых файлов JSON.
*/
const VERSION: number = 0;

export default function App(): React.JSX.Element {
  const mail = useRef<null | HTMLDivElement>(null);
  const [mailData, setMailData] = useState<MailData>(new MailData(VERSION, initialItems));
  const [isBuiltMail, setIsBuiltMail] = useState<boolean>(false);

  return (
    <Container className="overflow-auto h-100 w-100" fluid>
      <Row className="mb-4">
        <NavBarHead is_builtLetter={isBuiltMail}/>
      </Row>
      <Row>
        <div className="col-editor col-xl-4 mb-5 mb-xl-0">
          <MailEditor mailData={mailData} setMailData={setMailData}/>
        </div>
        <div className="col col-mail-preview">
          <MailPreview mail={mail} is_builtLetter={isBuiltMail} set_is_BuiltLetter={setIsBuiltMail}
                       mailData={mailData} setMailData={setMailData}/>
        </div>
      </Row>
    </Container>
  );
}
