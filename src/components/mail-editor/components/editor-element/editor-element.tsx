import React from "react";
import {
  BadgesElement,
  BaseEmailElement,
  BigImageElement,
  ButtonElement,
  HighlightedParagraphElement,
  MailData,
  ParagraphElement,
  ProductCardElement,
  TitleElement
} from "../../../../types/types";
import ParagraphInput from "../paragraph-input/paragraph-input";
import BigImageInput from "../big-image-input/big-image-input";
import TitleInput from "../title-input/title-input";
import TypeElementInput from "../type-element-input/type-element-input";
import ProductCardInput from "../product-card-input/product-card-input";
import BadgesInput from "../badges-input/badges-input";
import HighlightedParagraphInput from "../highlighted-paragraph-input/highlighted-paragraph-input";
import ButtonInput from "../button-input/button-input";

export default function EditorElement(props: {
  element: BaseEmailElement,
  mailData: MailData,
  setMailData: React.Dispatch<React.SetStateAction<MailData>>
}): JSX.Element {
  const renderList: Array<React.JSX.Element> = new Array<React.JSX.Element>();
  if (props.element) {
    renderList.push(
      <TypeElementInput key={`${props.element.ElementKey}-${renderList.length}`} element={props.element}
                        mailData={props.mailData}
                        setMailData={props.setMailData}/>
    );
    if (props.element instanceof (TitleElement)) {
      renderList.push(
        <TitleInput key={`${props.element.ElementKey}-${renderList.length}`} element={(props.element)}
                    mailData={props.mailData}
                    setMailData={props.setMailData}/>
      );
    } else if (props.element instanceof (BigImageElement)) {
      renderList.push(
        <BigImageInput key={`${props.element.ElementKey}-${renderList.length}`} element={(props.element)}
                       mailData={props.mailData}
                       setMailData={props.setMailData}/>
      );
    } else if (props.element instanceof (BadgesElement)) {
      renderList.push(
        <BadgesInput key={`${props.element.ElementKey}-${renderList.length}`} element={(props.element)}
                     mailData={props.mailData}
                     setMailData={props.setMailData}/>
      );
    } else if (props.element instanceof (ParagraphElement)) {
      renderList.push(
        <ParagraphInput key={`${props.element.ElementKey}-${renderList.length}`} element={(props.element)}
                        mailData={props.mailData}
                        setMailData={props.setMailData}/>
      );
    } else if (props.element instanceof (ProductCardElement)) {
      renderList.push(
        <ProductCardInput key={`${props.element.ElementKey}-${renderList.length}`} element={(props.element)}
                          mailData={props.mailData} setMailData={props.setMailData}/>
      );
    } else if (props.element instanceof (HighlightedParagraphElement)) {
      renderList.push(
        <HighlightedParagraphInput key={`${props.element.ElementKey}-${renderList.length}`}
                                   element={(props.element)}
                                   mailData={props.mailData} setMailData={props.setMailData}/>
      );
    } else if (props.element instanceof (ButtonElement)) {
      renderList.push(
        <ButtonInput key={`${props.element.ElementKey}-${renderList.length}`} element={(props.element)}
                     mailData={props.mailData} setMailData={props.setMailData}/>
      );
    }
  }

  return (
    <div style={{textAlign: "left"}}>
      {renderList}
    </div>);
}
