import React from 'react';
import {FormGroup, FormLabel} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
    BadgesElement,
    BigImageElement,
    BaseEmailElement,
    AboutElement,
    SignUpElement,
    MailData,
    ParagraphElement,
    TitleElement
} from '../../../../types/types';

type Props = {
    element: BaseEmailElement;
    mailData: MailData;
    setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export function TypeElementInput({element, mailData, setMailData}: Props): JSX.Element {
    const types: string[] = ['Заголовок', 'Параграф', 'Баольшая картинка', 'Блок \'Записаться\'', 'Блок \'About\'', 'Бейджи'];

    return (
        <FormGroup className={'mb-3'}>
            <FormLabel className={'fw-semibold'}>Тип элемента</FormLabel>
            <DropdownButton id='dropdown-basic-button' title={element.Name}>
                {
                    types.map((value, index) => {
                        return (
                            <Dropdown.Item
                                title={value}
                                key={'dropDownItem-' + index}
                                onClick={(value) => {
                                    let indexElement = mailData.elements.indexOf(element);
                                    switch (value.currentTarget.title) {
                                        case 'Заголовок' : {
                                            mailData.elements[indexElement] = new TitleElement(null);
                                            break;
                                        }
                                        case 'Параграф' : {
                                            mailData.elements[indexElement] = new ParagraphElement(null);
                                            break;
                                        }
                                        case 'Баольшая картинка' : {
                                            mailData.elements[indexElement] = new BigImageElement(null);
                                            break;
                                        }
                                        case 'Бейджи' : {
                                            mailData.elements[indexElement] = new BadgesElement(null);
                                            break;
                                        }
                                        case 'Блок \'Записаться\'' : {
                                            mailData.elements[indexElement] = new SignUpElement(null);
                                            break;
                                        }
                                        case 'Блок \'About\'' : {
                                            mailData.elements[indexElement] = new AboutElement(null);
                                            break;
                                        }
                                    }
                                    setMailData({...mailData, elements : mailData.elements});
                                }}
                            >{value}</Dropdown.Item>
                        );
                    })
                }
            </DropdownButton>
        </FormGroup>
    );
}
