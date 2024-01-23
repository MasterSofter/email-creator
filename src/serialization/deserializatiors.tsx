import {
  HighlightedParagraphElement,
  BadgesElement,
  BaseEmailElement,
  BigImageElement,
  EmptyElement,
  ParagraphElement,
  ProductCardElement,
  TitleElement
} from '../types/types';

export interface IDeserializator {
  deserialize(obj : any) : BaseEmailElement;
}

export class EmptyDeserializator implements IDeserializator {
  deserialize(obj: any): EmptyElement {
    return new EmptyElement();
  }
}

export class HighlightedParagraphDeserializator implements IDeserializator {
  deserialize(obj: any): HighlightedParagraphElement {
    return new HighlightedParagraphElement(obj['text']);
  }
}

export class ProductCardDeserializator implements IDeserializator {
  deserialize(obj: any): ProductCardElement {
    return new ProductCardElement( {
        title    : obj['title'],
        text     : obj['text'],
        imageUrl : obj['imageUrl'],
        buttonUrl : obj['buttonUrl'],
        buttonText : obj['buttonText'],
        age      : obj['age'],
        amountOfDays : obj['amountOfDays'],
        metroStation : obj['metroStation'],
        periods      : obj['periods']
      });
  }
}

export class TitleDeserializator implements IDeserializator {
  deserialize(obj: any): TitleElement {
    return new TitleElement(obj['title']);
  }
}

export class BigImageDeserializator implements IDeserializator {
  deserialize(obj: any): BigImageElement {
    return new BigImageElement(obj['address'], obj['imageUrl']);
  }
}

export class BadgesDeserializator implements IDeserializator {
  deserialize(obj: any): BadgesElement {
    return new BadgesElement(obj['badges']);
  }
}

export class ParagraphDeserializator implements IDeserializator {
  deserialize(obj: any): BaseEmailElement {
    return new ParagraphElement(obj['text']);
  }
}