import React from 'react';
import {MailData} from '../../types/types';
import {Card, CardBody, CardHeader} from 'react-bootstrap';
import SaveButtonsHtml from '../mail-editor/components/save-buttons-html/save-buttons-html';
import MailViewer from './mail-viewer';

export default function MailPreview(props: {
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
  mail: React.MutableRefObject<HTMLDivElement | null>;
  set_is_BuiltLetter: React.Dispatch<React.SetStateAction<boolean>>;
  is_builtLetter: boolean;
}): JSX.Element {
  return (
    <Card style={{height: '100%', overflowY: 'hidden'}}>
      <CardHeader className='fw-bold h5 py-2 d-flex flex-row justify-content-between align-items-center'>
        <span>Предосмотр письма</span>
        <SaveButtonsHtml mail={props.mail.current} set_is_BuiltLetter={props.set_is_BuiltLetter}/>
      </CardHeader>
      <CardBody style={{height: '100%', overflowY: 'hidden'}}>
        <figure className='device-browser'>
          <div className='device-browser-header'>
            <div className='device-browser-header-btn-list'>
              <span className='device-browser-header-btn-list-btn'/>
              <span className='device-browser-header-btn-list-btn'/>
              <span className='device-browser-header-btn-list-btn'/>
            </div>
            <div className='device-browser-header-browser-bar'>mail.mai.ru</div>
          </div>
          <div className='device-browser-frame d-flex flex-row text-center'>
            <div className={'device-browser-frame-middle-col d-flex flex-column'}>
              <div ref={props.mail} className='device-browser-frame-middle-col-letter mt-4 mb-3 mx-5'>
                <MailViewer mailData={props.mailData} is_builtLetter={props.is_builtLetter}/>
              </div>
            </div>
          </div>
        </figure>
      </CardBody>
    </Card>
  );
}