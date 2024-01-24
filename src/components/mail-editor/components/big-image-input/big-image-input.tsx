import React from 'react';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {BigImageElement, MailData} from '../../../../types/types';

export default function BigImageInput(props: {
  element: BigImageElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>
}): JSX.Element {
  return (
    <div>
      <FormGroup className={'mb-3'}>
        <FormLabel className={'fw-semibold'}>URL изображения</FormLabel>
        <FormControl
          value={props.element.ImageUrl}
          type='text'
          name='image'
          id='imageInput'
          onChange={(value) => {
            props.element.ImageUrl = value.currentTarget.value;
            props.setMailData({...props.mailData, elements: props.mailData.elements});
          }}
          required/>
      </FormGroup>

      <FormGroup>
        <FormLabel className={'fw-semibold'}>URL адрес ссылки</FormLabel>
        <FormControl
          value={props.element.Address}
          type='text'
          name='image'
          id='imageInput'
          onChange={(value) => {
            props.element.Address = value.currentTarget.value;
            props.setMailData({...props.mailData, elements: props.mailData.elements});
          }}
          required/>
      </FormGroup>
    </div>
  );
}
