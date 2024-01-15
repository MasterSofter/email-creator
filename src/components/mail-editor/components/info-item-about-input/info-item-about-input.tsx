import {BaseEmailElement, AboutElement, MailData} from '../../../../types/types';
import {FormGroup, FormLabel} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import React from 'react';

type Props = {
  element : AboutElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function InfoItemAboutElementInput({element, mailData, setMailData} : Props) : JSX.Element {
    return (
        <FormGroup className='mb-3'>
            <FormLabel className='fw-semibold'>Текст</FormLabel>
            <ReactQuill
                className='border rounded-3'
                theme='snow'
                value={element.Text}
                id='reactQuill'
                onChange={(value) => {
                    element.Text = value;
                    setMailData({...mailData, elements: mailData.elements});
                } }/>
        </FormGroup>
    );
}