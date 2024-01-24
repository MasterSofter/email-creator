import React from 'react';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {MailData, TitleElement} from '../../../../types/types';

export default function TitleInput(props: {
  element: TitleElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>,
}): React.JSX.Element {
  return (
    <FormGroup className={'mb-3'}>
      <FormLabel className={'fw-semibold'}>Заголовок</FormLabel>
      <FormControl
        value={props.element.Title}
        type='text'
        name='title'
        id='titleInput'
        onChange={(value) => {
          props.element.Title = value.currentTarget.value
          props.setMailData({...props.mailData, elements: props.mailData.elements});
        }}
        required/>
    </FormGroup>
  );
}
