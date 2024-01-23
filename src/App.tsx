import React, {useRef, useState} from 'react';
import {
    AboutElement,
    BadgesElement,
    BigImageElement,
    MailData,
    ParagraphElement,
    SignUpElement,
    TitleElement
} from './types/types';
import {Container, Row} from 'react-bootstrap';
import MailEditor from './components/mail-editor/mail-editor';
import NavBarHead from './components/nav-bar-head/nav-bar-head';

// Подключение стиилей
import './scss/style.scss';
import MailPreview from './components/mail-preview/mail-preview';

const initialItems = [
    new BigImageElement(null, null),
    new BadgesElement(null),
    new TitleElement(null),
    new ParagraphElement(null),
    new SignUpElement(null),
    new AboutElement(null)
];

export default function App(): React.JSX.Element {
    const mail = useRef<null | HTMLDivElement>(null);
    const [mailData, setMailData] = useState<MailData>(new MailData(0, initialItems));
    const [is_builtLetter, set_is_BuiltLetter] = useState<boolean>(false);

    return (
      <Container style={{height: '100vh', width: '100vw', maxWidth: '100wv'}} fluid>
          <Row style={{}}>
              <NavBarHead is_builtLetter={is_builtLetter}/>
          </Row>
          <Row className="pt-4" style={{height: '94vh'}}>
              <div className="col-editor">
                  <MailEditor mailData={mailData} setMailData={setMailData}/>
              </div>
              <div className="col-preview">
                  <MailPreview mail={mail} is_builtLetter={is_builtLetter} set_is_BuiltLetter={set_is_BuiltLetter}
                               mailData={mailData} setMailData={setMailData}/>
              </div>
          </Row>
      </Container>
    );
}
