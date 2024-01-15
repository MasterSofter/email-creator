import {BadgesElement, MailData} from '../../../../types/types';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import React from 'react';

type Props = {
  element: BadgesElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function BadgesInput({element, mailData, setMailData}: Props): JSX.Element {
    return (
        <FormGroup className=''>
            <div className='d-flex flex-row mb-3'>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Бейдж</FormLabel>
                    <FormControl
                        value={element.Badges[0].text}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.Badges[0].text = event.currentTarget.value;
                            setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Бейдж</FormLabel>
                    <FormControl
                        value={element.Badges[1].text}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.Badges[1].text = event.currentTarget.value;
                            setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Бейдж</FormLabel>
                    <FormControl
                        value={element.Badges[2].text}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.Badges[2].text = event.currentTarget.value;
                            setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>
            </div>
        </FormGroup>
    );
}