import {EmailElements, MailData,} from "../types/types";
import {
  BadgesDeserializator,
  BigImageDeserializator,
  ButtonDeserializator,
  EmptyDeserializator,
  HighlightedParagraphDeserializator,
  IDeserializator,
  ParagraphDeserializator,
  ProductCardDeserializator,
  TitleDeserializator
} from "./deserializatiors";

export class MailSerializer {
  public static Serialize(mailData: MailData): string {
    return JSON.stringify(mailData);
  }

  public static Deserialize(json: string): MailData {
    let obj: MailData = JSON.parse(json);

    switch (obj.version) {
      case 0:
        return this.DeserializeVer0(obj);
      default :
        throw new Error("Неизвестная версия файла!");
    }
  }

  private static DeserializeVer0(obj: any): MailData {
    let mailData: MailData = new MailData(obj["version"], null);

    let mapTypes: Map<EmailElements, IDeserializator> = new Map<EmailElements, IDeserializator>();
    mapTypes.set(EmailElements.Empty, new EmptyDeserializator());
    mapTypes.set(EmailElements.HighlightedParagraph, new HighlightedParagraphDeserializator());
    mapTypes.set(EmailElements.ProductCard, new ProductCardDeserializator());
    mapTypes.set(EmailElements.Title, new TitleDeserializator());
    mapTypes.set(EmailElements.BigImage, new BigImageDeserializator());
    mapTypes.set(EmailElements.Badges, new BadgesDeserializator());
    mapTypes.set(EmailElements.Paragraph, new ParagraphDeserializator());
    mapTypes.set(EmailElements.Button, new ButtonDeserializator());

    obj.elements.map((item: any) => {
      let ser = mapTypes.get(item["id"]);
      if (ser !== undefined)
        mailData.elements.push(ser.deserialize(item));
    });

    return mailData;
  }
}