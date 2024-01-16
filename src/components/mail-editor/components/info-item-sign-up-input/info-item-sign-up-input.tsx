import React from 'react';
import {SignUpElement, MailData, Stations,} from '../../../../types/types';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

type Props = {
  element: SignUpElement;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function InfoItemSignUpInput({element, mailData, setMailData}: Props): JSX.Element {
  return (
        <FormGroup className=''>
            <div className='mb-3'>
                <FormLabel className='fw-semibold'>Заголовок</FormLabel>
                <FormControl
                    value={element.Title}
                    type='text'
                    name='title'
                    id='titleInput'
                    onChange={(event) => {
                        element.Title = event.currentTarget.value;
                      setMailData({...mailData, elements: mailData.elements});
                    }}
                    required/>
            </div>

            <div className='mb-3'>
                <FormLabel className='fw-semibold'>Текст</FormLabel>
                <ReactQuill
                    className='border rounded-3'
                    theme='snow'
                    value={element.Text}
                    id='reactQuill'
                    onChange={(value) => {
                        element.Text = value;
                      setMailData({...mailData, elements: mailData.elements});
                    }}/>
            </div>

            <div className='mb-3'>
                <FormLabel className='fw-semibold'>URL изображения</FormLabel>
                <FormControl
                    value={element.ImageUrl}
                    type='text'
                    name='image'
                    id='imageInput'
                    onChange={(event) => {
                        element.ImageUrl = event.currentTarget.value;
                      setMailData({...mailData, elements: mailData.elements});
                    }}
                    required/>
            </div>

            <div className='mb-3'>
              <FormLabel className='fw-semibold'>URL ссылки для кнопки</FormLabel>
              <FormControl
                value={element.ButtonUrl}
                type='text'
                name='button-url'
                id='buttonUrl-input'
                onChange={(event) => {
                  element.ButtonUrl = event.currentTarget.value;
                  setMailData({...mailData, elements: mailData.elements});
                }}
                required/>
            </div>

            <div className='d-flex flex-row mb-3'>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Возраст</FormLabel>
                    <FormControl
                        value={element.Age}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.Age = event.currentTarget.value;
                          setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Количество дней</FormLabel>
                    <FormControl
                        value={element.AmountOfDays}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.AmountOfDays = event.currentTarget.value;
                          setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>

                <div>
                    <FormLabel className='fw-semibold'>Станция метро</FormLabel>
                    <DropdownButton title={element.MetroStation ? element.MetroStation.name : 'Нет'}>

                      <Dropdown.Item
                        title={'Нет'}
                        key={'dropDownItem-' + 'none'}
                        onClick={(value) => {
                          element.MetroStation = null;
                          setMailData({...mailData, elements: mailData.elements});
                        }}
                      >{'Нет'}</Dropdown.Item>

                      {
                            Stations.map((value, index) => {
                                return (
                                    <Dropdown.Item
                                        title={value.name}
                                        key={'dropDownItem-' + index}
                                        onClick={(value) => {
                                            for (let i = 0; i < Stations.length; i++) {
                                                if (value.currentTarget.title === Stations[i].name)
                                                    element.MetroStation = Stations[i];
                                            }
                                          setMailData({...mailData, elements: mailData.elements});
                                        }}
                                    >{value.name}</Dropdown.Item>
                                );
                            })
                        }
                    </DropdownButton>
                </div>
            </div>

            <div className='d-flex flex-row'>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Период</FormLabel>
                    <FormControl
                        value={element.Periods[0]}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.Periods[0] = event.currentTarget.value;
                            setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>
                <div>
                    <FormLabel className='fw-semibold'>Период</FormLabel>
                    <FormControl
                        value={element.Periods[1]}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.Periods[1] = event.currentTarget.value;
                          setMailData({...mailData, elements: mailData.elements});
                        }}
                        required/>
                </div>
            </div>
        </FormGroup>
    );
}