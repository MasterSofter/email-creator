import React, {useRef, useState} from 'react';
import {
    BadgesElement,
    BigImageElement,
    ButtonElement,
    HighlightedParagraphElement,
    MailData,
    ParagraphElement,
    ProductCardElement,
    TitleElement
} from './types/types';
import {Container, Row} from 'react-bootstrap';
import MailEditor from './components/mail-editor/mail-editor';
import NavBarHead from './components/nav-bar-head/nav-bar-head';

// Подключение стиилей
import './scss/style.scss';
import MailPreview from './components/mail-preview/mail-preview';

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
    const [is_builtLetter, set_is_BuiltLetter] = useState<boolean>(false);

    return (
      <Container style={{height: '100vh', width: '100vw', maxWidth: '100wv'}} fluid>
          <Row>
              <NavBarHead is_builtLetter={is_builtLetter}/>
          </Row>
          <Row className="pt-4 d-flex" style={{height: '94vh'}}>
              <div className="col col-xl-4" style={{minWidth:'38rem'}}>
                  <MailEditor mailData={mailData} setMailData={setMailData}/>
              </div>
              <div className="col" style={{minWidth:'38rem'}}>
                  <MailPreview mail={mail} is_builtLetter={is_builtLetter} set_is_BuiltLetter={set_is_BuiltLetter}
                               mailData={mailData} setMailData={setMailData}/>
              </div>
          </Row>
      </Container>
    );
}
