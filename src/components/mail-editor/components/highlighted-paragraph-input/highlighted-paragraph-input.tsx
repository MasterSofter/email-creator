import {HighlightedParagraphElement, MailData} from '../../../../types/types';
import {FormGroup, FormLabel} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import React from 'react';

export default function HighlightedParagraphInput(props: {
  element: HighlightedParagraphElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>
}): JSX.Element {
  return (
    <FormGroup className='mb-3'>
      <FormLabel className='fw-semibold'>Параграф</FormLabel>
      <ReactQuill
        className='border rounded-3'
        theme='snow'
        value={props.element.Text}
        id='reactQuill'
        onChange={(value) => {
          props.element.Text = value;
          props.setMailData({...props.mailData, elements: props.mailData.elements});
        }}/>
    </FormGroup>
  );
}