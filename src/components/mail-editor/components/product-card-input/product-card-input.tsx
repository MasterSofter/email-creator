import React from "react";
import {MailData, ProductCardElement, Stations,} from "../../../../types/types";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import ReactQuill from "react-quill";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function ProductCardInput(props: {
  element: ProductCardElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>
}): JSX.Element {
  return (
    <FormGroup className="">
      <div className="mb-3">
        <FormLabel className="fw-semibold">Заголовок</FormLabel>
        <FormControl
          value={props.element.Title}
          type="text"
          name="title"
          id="titleInput"
          onChange={(event) => {
            props.element.Title = event.currentTarget.value;
            props.setMailData({...props.mailData, elements: props.mailData.elements});
          }}
          required/>
      </div>

      <div className="mb-3">
        <FormLabel className="fw-semibold">Текст</FormLabel>
        <ReactQuill
          className="border rounded-3"
          theme="snow"
          value={props.element.Text}
          id="reactQuill"
          onChange={(value) => {
            props.element.Text = value;
            props.setMailData({...props.mailData, elements: props.mailData.elements});
          }}/>
      </div>

      <div className="mb-3">
        <FormLabel className="fw-semibold">URL изображения</FormLabel>
        <FormControl
          value={props.element.ImageUrl}
          type="text"
          name="image"
          id="imageInput"
          onChange={(event) => {
            props.element.ImageUrl = event.currentTarget.value;
            props.setMailData({...props.mailData, elements: props.mailData.elements});
          }}
          required/>
      </div>

      <div className="d-flex flex-row">
        <div className="mb-3 me-5">
          <FormLabel className="fw-semibold">URL ссылки для кнопки</FormLabel>
          <FormControl
            value={props.element.ButtonUrl}
            type="text"
            name="button-url"
            id="buttonUrl-input"
            onChange={(event) => {
              props.element.ButtonUrl = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>

        <div className="mb-3">
          <FormLabel className="fw-semibold">Текст кнопки</FormLabel>
          <FormControl
            value={props.element.ButtonText}
            type="text"
            name="button-url"
            id="buttonUrl-input"
            onChange={(event) => {
              props.element.ButtonText = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>
      </div>

      <div className="d-flex flex-row mb-3">
        <div className="me-5">
          <FormLabel className="fw-semibold">Возраст</FormLabel>
          <FormControl
            value={props.element.Age}
            type="text"
            name="image"
            id="imageInput"
            onChange={(event) => {
              props.element.Age = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>

        <div className="me-5">
          <FormLabel className="fw-semibold">Количество дней</FormLabel>
          <FormControl
            value={props.element.AmountOfDays}
            type="text"
            name="image"
            id="imageInput"
            onChange={(event) => {
              props.element.AmountOfDays = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>

        <div>
          <FormLabel className="fw-semibold">Станция метро</FormLabel>
          <DropdownButton title={props.element.MetroStation ? props.element.MetroStation.name : "Нет"}>
            <Dropdown.Item
              title="Нет"
              key={"dropDownItem-" + "none"}
              onClick={(value) => {
                props.element.MetroStation = null;
                props.setMailData({...props.mailData, elements: props.mailData.elements});
              }}
            >Нет</Dropdown.Item>
            {
              Stations.map((value, index) => {
                return (
                  <Dropdown.Item
                    title={value.name}
                    key={"dropDownItem-" + index}
                    onClick={(value) => {
                      for (let i = 0; i < Stations.length; i++) {
                        if (value.currentTarget.title == Stations[i].name)
                          props.element.MetroStation = Stations[i];
                      }
                      props.setMailData({...props.mailData, elements: props.mailData.elements});
                    }}
                  >{value.name}</Dropdown.Item>
                );
              })
            }
          </DropdownButton>
        </div>
      </div>

      <div className="d-flex flex-row">
        <div className="me-5">
          <FormLabel className="fw-semibold">Период</FormLabel>
          <FormControl
            value={props.element.Periods[0]}
            type="text"
            name="image"
            id="imageInput"
            onChange={(event) => {
              props.element.Periods[0] = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>
        <div>
          <FormLabel className="fw-semibold">Период</FormLabel>
          <FormControl
            value={props.element.Periods[1]}
            type="text"
            name="image"
            id="imageInput"
            onChange={(event) => {
              props.element.Periods[1] = event.currentTarget.value;
              props.setMailData({...props.mailData, elements: props.mailData.elements});
            }}
            required/>
        </div>
      </div>
    </FormGroup>
  );
}