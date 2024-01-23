import {BaseEmailElement, HighlightedParagraphElement, MailData} from '../../../../types/types';
import {FormGroup, FormLabel} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import React from 'react';
import HighlightedParagraph from '../../../mail-preview/components/highlighted-paragraph/highlighted-paragraph';

type Props = {
  element : HighlightedParagraphElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function HighlightedParagraphInput({element, mailData, setMailData} : Props) : JSX.Element {
    return (
        <FormGroup className='mb-3'>
            <FormLabel className='fw-semibold'>Параграф</FormLabel>
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