import React from 'react';
import ReactQuill from 'react-quill';
import {FormGroup, FormLabel} from 'react-bootstrap';
import {MailData, ParagraphElement} from '../../../../types/types';

export default function ParagraphInput(props: {
  element: ParagraphElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>
}): JSX.Element {
  return (
    <FormGroup className={'mb-3'}>
      <FormLabel className={'fw-semibold'}>Параграф</FormLabel>
      <ReactQuill
        className={'border rounded-3'}
        theme={'snow'}
        value={props.element.Text}
        id='reactQuill'
        onChange={(value) => {
          props.element.Text = value
          props.setMailData({...props.mailData, elements: props.mailData.elements});
        }}/>
    </FormGroup>
  );
}
