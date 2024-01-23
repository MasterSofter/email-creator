import React from 'react';
import {FormGroup, FormLabel} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
    HighlightedParagraphElement,
    BadgesElement,
    BaseEmailElement,
    BigImageElement,
    MailData,
    ParagraphElement,
    ProductCardElement,
    TitleElement
} from '../../../../types/types';

type Props = {
    element: BaseEmailElement;
    mailData: MailData;
    setMailData: React.Dispatch<React.SetStateAction<MailData>>;
}

export default function TypeElementInput({element, mailData, setMailData}: Props): JSX.Element {
    const types: string[] = ['Заголовок', 'Параграф', 'Баольшая картинка', 'Карточка товара', 'Выделенный параграф', 'Бейджи'];

    return (
      <FormGroup className={'mb-3'}>
          <FormLabel className={'fw-semibold'}>Тип элемента</FormLabel>
          <DropdownButton id="dropdown-basic-button" title={element.Name}>
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
                                      mailData.elements[indexElement] = new TitleElement(null, mailData.elements[indexElement].index);
                                      break;
                                  }
                                  case 'Параграф' : {
                                      mailData.elements[indexElement] = new ParagraphElement(null, mailData.elements[indexElement].index);
                                      break;
                                  }
                                  case 'Баольшая картинка' : {
                                      mailData.elements[indexElement] = new BigImageElement(null, mailData.elements[indexElement].index);
                                      break;
                                  }
                                  case 'Бейджи' : {
                                      mailData.elements[indexElement] = new BadgesElement(null, mailData.elements[indexElement].index);
                                      break;
                                  }
                                  case 'Карточка товара' : {
                                      mailData.elements[indexElement] = new ProductCardElement(null, mailData.elements[indexElement].index);
                                      break;
                                  }
                                  case 'Выделенный параграф' : {
                                      mailData.elements[indexElement] = new HighlightedParagraphElement(null, mailData.elements[indexElement].index);
                                      break;
                                  }
                              }
                              setMailData({...mailData, elements: mailData.elements});
                          }}
                        >{value}</Dropdown.Item>
                      );
                  })
              }
          </DropdownButton>
      </FormGroup>
    );
}
