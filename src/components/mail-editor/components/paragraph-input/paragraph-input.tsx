import React from 'react';
import ReactQuill from 'react-quill';
import {FormGroup, FormLabel} from 'react-bootstrap';
import {MailData , ParagraphElement} from '../../../../types/types';

type Props = {
  element : ParagraphElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function ParagraphInput({element, mailData, setMailData} : Props) : JSX.Element {
    return (
        <FormGroup className={'mb-3'}>
            <FormLabel className={'fw-semibold'}>Параграф</FormLabel>
            <ReactQuill
                className={'border rounded-3'}
                theme={'snow'}
                value={element.Text}
                id='reactQuill'
                onChange={(value) => {
                    element.Text = value
                    setMailData({...mailData, elements: mailData.elements});
                } }/>
        </FormGroup>
    );
}
