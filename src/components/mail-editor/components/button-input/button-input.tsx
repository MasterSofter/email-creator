import {ButtonAlign, ButtonElement, MailData} from '../../../../types/types';
import React from 'react';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {Justify, JustifyLeft, JustifyRight} from 'react-bootstrap-icons';

export default function ButtonInput(props: { element: ButtonElement, mailData: MailData, setMailData: React.Dispatch<React.SetStateAction<MailData>> }): JSX.Element {
  return (
    <FormGroup className="mb-3">
      <div className="d-flex flex-row">
        <div className="me-5">
          <FormLabel className="fw-semibold">URL ссылки для кнопки</FormLabel>
          <FormControl
            value={props.element.ButtonUrl}
            type="text"
            name="button-url"
            id="buttonUrl-input"
            onChange={(event) => {
              props.element.ButtonUrl = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>

        <div className="me-5">
          <FormLabel className="fw-semibold">Текст кнопки</FormLabel>
          <FormControl
            value={props.element.ButtonText}
            type="text"
            name="button-url"
            id="buttonUrl-input"
            onChange={(event) => {
              props.element.ButtonText = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>

        <div>
          <div style={{display: 'inline-block', marginTop: '35px'}}>
            <JustifyLeft onClick={(event) => {
              props.element.ButtonAlign = ButtonAlign.Left;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }} className={`justify-btn me-4 ${props.element.ButtonAlign === ButtonAlign.Left ? 'selected' : ''}`} size="40" />

            <Justify onClick={(event) => {
              props.element.ButtonAlign = ButtonAlign.Center;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }} className={`justify-btn me-4 ${props.element.ButtonAlign === ButtonAlign.Center ? 'selected' : ''}`} size="40"/>

            <JustifyRight onClick={(event) => {
              props.element.ButtonAlign = ButtonAlign.Right;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }} className={`justify-btn me-4 ${props.element.ButtonAlign === ButtonAlign.Right ? 'selected' : ''}`} size="40"/>
          </div>
        </div>
      </div>
    </FormGroup>
  );
}