import {
  AboutElement,
  BadgesElement,
  BaseEmailElement, BigImageElement,
  EmailElements,
  EmptyElement,
  MailData, ParagraphElement,
  SignUpElement, TitleElement
} from '../types/types';
import {deserialize} from 'v8';
import {
  AboutDeserializator, BadgesDeserializator, BigImageDeserializator,
  EmptyDeserializator,
  IDeserializator, ParagraphDeserializator,
  SignUpDeserializator,
  TitleDeserializator
} from './deserializatiors';

export class MailSerializer {
  public static Serialize(mailData : MailData) : string {
    return JSON.stringify(mailData);
  }

  private static DeserializeVer0(obj : any) : MailData {
    let mailData : MailData = new MailData(obj['version'], null);

    let mapTypes : Map<EmailElements,IDeserializator> = new Map<EmailElements, IDeserializator>();
    mapTypes.set(EmailElements.Empty, new EmptyDeserializator());
    mapTypes.set(EmailElements.About, new AboutDeserializator());
    mapTypes.set(EmailElements.SignUp, new SignUpDeserializator());
    mapTypes.set(EmailElements.Title, new TitleDeserializator());
    mapTypes.set(EmailElements.BigImage,new BigImageDeserializator());
    mapTypes.set(EmailElements.Badges, new BadgesDeserializator());
    mapTypes.set(EmailElements.Paragraph, new ParagraphDeserializator());

    obj.elements.map((item : any) => {
      let ser = mapTypes.get(item['id']);
      if(ser !== undefined)
        mailData.elements.push(ser.deserialize(item));
    })

    console.log(mailData);
    return mailData;
  }

  public static Deserialize(json : string) : MailData {
    let obj : MailData = JSON.parse(json);

    switch (obj.version) {
      case 0: return this.DeserializeVer0(obj);
    }

    return new MailData(0, null);
  }
}