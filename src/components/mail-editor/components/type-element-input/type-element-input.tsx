import React from "react";
import {FormGroup, FormLabel} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  BadgesElement,
  BaseEmailElement,
  BigImageElement,
  HighlightedParagraphElement,
  MailData,
  ParagraphElement,
  ProductCardElement,
  TitleElement
} from "../../../../types/types";

export default function TypeElementInput(props: {
  element: BaseEmailElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>
}): JSX.Element {
  const types: string[] = ["Заголовок", "Параграф", "Баольшая картинка", "Карточка товара", "Выделенный параграф", "Бейджи"];

  return (
    <FormGroup className="mb-3">
      <FormLabel className="fw-semibold">Тип элемента</FormLabel>
      <DropdownButton id="dropdown-basic-button" title={props.element.Name}>
        {
          types.map((value, index) => {
            return (
              <Dropdown.Item
                title={value}
                key={"dropDownItem-" + index}
                onClick={(value) => {
                  let indexElement = props.mailData.elements.indexOf(props.element);
                  switch (value.currentTarget.title) {
                    case "Заголовок" : {
                      props.mailData.elements[indexElement] = TitleElement.Default(props.mailData.elements[indexElement].index);
                      break;
                    }
                    case "Параграф" : {
                      props.mailData.elements[indexElement] = ParagraphElement.Default(props.mailData.elements[indexElement].index);
                      break;
                    }
                    case "Баольшая картинка" : {
                      props.mailData.elements[indexElement] = BigImageElement.Default(props.mailData.elements[indexElement].index);
                      break;
                    }
                    case "Бейджи" : {
                      props.mailData.elements[indexElement] = BadgesElement.Default(props.mailData.elements[indexElement].index);
                      break;
                    }
                    case "Карточка товара" : {
                      props.mailData.elements[indexElement] = ProductCardElement.Default(props.mailData.elements[indexElement].index);
                      break;
                    }
                    case "Выделенный параграф" : {
                      props.mailData.elements[indexElement] = HighlightedParagraphElement.Default(props.mailData.elements[indexElement].index);
                      break;
                    }
                  }
                  props.setMailData({...props.mailData, elements: props.mailData.elements});
                }}
              >{value}</Dropdown.Item>
            );
          })
        }
      </DropdownButton>
    </FormGroup>
  );
}
