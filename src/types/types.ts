import {v4 as uuidv4} from 'uuid';

export const Stations = [
  {name: 'м. Молодежная', imageUrl: '_metro-molodeznaya.png'},
  {name: 'м. Войковская', imageUrl: '_metro-voykovskaya.png'}];

export enum ButtonAlign {
  Left,
  Center,
  Right
}

/* ПРИ ДОБАВЛЕНИИ НОВОЙ ЗАПИСИ - ДОБАВЛЯТЬ СТРОГО В КОНЕЦ */

export enum BadgeVariants {
  SolidPink,
  OutlinePink,
  SolidBlack
}

/* ПРИ ДОБАВЛЕНИИ НОВОЙ ЗАПИСИ - ДОБАВЛЯТЬ СТРОГО В КОНЕЦ */

export enum EmailElements {
  Empty,
  HighlightedParagraph,
  ProductCard,
  Title,
  BigImage,
  Badges,
  Paragraph,
  Button
}

export class BaseEmailElement {
  readonly index: string;
  protected name: string;
  protected id: EmailElements;

  protected constructor(name: string, id: EmailElements, index : string) {
    this.name = name;
    this.id = id;
    this.index = index;
  }

  public get Name() {
    return this.name
  };

  public get ElementKey(): string {
    return `element-${this.index}`;
  }

  public get GetType() {
    return this.constructor.name;
  }

  public get ID() {
    return this.id
  }
}

export class EmptyElement extends BaseEmailElement {
  public static Default(index : string | undefined = undefined) : EmptyElement {
    return new EmptyElement(index !== undefined ? index : uuidv4());
  }

  public constructor(index : string) {
    super('Пустой элемент', EmailElements.Empty, index);
  }
}

export class ButtonElement extends BaseEmailElement {
  buttonText : string;
  buttonUrl : string;
  buttonAlign : ButtonAlign;

  public static Default(index : string | undefined = undefined) : ButtonElement {
    return new ButtonElement('Записаться', '', ButtonAlign.Center, index !== undefined ? index : uuidv4());
  }

  public constructor(buttonText: string, buttonUrl: string, buttonAlign: ButtonAlign, index : string) {
    super('Кнопка', EmailElements.Button, index);
    this.buttonText = buttonText;
    this.buttonUrl = buttonUrl;
    this.buttonAlign = buttonAlign;
  }

  public get ButtonAlign(): ButtonAlign {
    return this.buttonAlign;
  }

  public set ButtonAlign(value: ButtonAlign) {
    this.buttonAlign = value;
  }

  public get ButtonText(): string {
    return this.buttonText;
  }

  public set ButtonText(value: string) {
    this.buttonText = value;
  }

  public get ButtonUrl(): string {
    return this.buttonUrl;
  }

  public set ButtonUrl(value: string) {
    this.buttonUrl = value;
  }
}

export class HighlightedParagraphElement extends BaseEmailElement {
  text: string;

  public static Default(index : string | undefined = undefined) : HighlightedParagraphElement {
    let text = '<div class="paragraph">' +
      '<p><b>🔥 Чем предстоит заниматься?</b></p>' +
      '<br>' +
      '<p>Учеников ждёт множество интересных заданий ' +
      'по программированию, созданию алгоритмов ' +
      'разной сложности, изучение графов, таблиц' +
      'и работа с данными.</p>' +
      '<br>' +
      '<p><b>✅ В чём польза курса?</b></p>' +
      '<br>' +
      '<p>Возможность учиться у ведущий преподавателей МАИ, сотрудников ФИПИ' +
      ' и специалистов ОГЭ и ЕГЭ с многолетним опытом.</p>' +
      '</div>';

    return new HighlightedParagraphElement(text, index !== undefined ? index : uuidv4());
  }

  public constructor(text: string, index : string) {
    super('Выделенный параграф', EmailElements.HighlightedParagraph, index);
    this.text = text;
  }

  public get Text(): string {
    return this.text;
  }

  public set Text(value: string) {
    this.text = value;
  }
}

export class ProductCardElement extends BaseEmailElement {
  title: string;
  text: string;
  imageUrl: string;
  buttonUrl : string;
  buttonText : string;
  age: string;
  amountOfDays: string;
  metroStation: { name: string, imageUrl: string } | null;
  periods: Array<string>;

  public static Default(index : string | undefined = undefined) : ProductCardElement {
    let initVal = {
      title : 'Minecraft-каникулы',
      text : 'Ребята создадут и анимируют объекты для своих игровых миров, на самом популярном языке программирования!',
      imageUrl : '',
      buttonUrl : '',
      buttonText : 'Записаться',
      age : '8-17 лет',
      amountOfDays : '5 дней',
      metroStation : Stations[0],
      periods : ['30 окт — 3 ноя', '20 — 24 ноя']
    }

    return new ProductCardElement(initVal, index !== undefined ? index : uuidv4());
  }

  public constructor(initVal: {
    title: string,
    text: string,
    imageUrl: string,
    buttonUrl : string,
    buttonText : string,
    age: string,
    amountOfDays: string,
    metroStation: { name: string, imageUrl: string } | null,
    periods: Array<string>
  }, index : string) {

    super('Карточка товара', EmailElements.ProductCard, index);

    this.title = initVal.title;
    this.text = initVal.text;
    this.imageUrl = initVal.imageUrl;
    this.buttonUrl = initVal.buttonUrl;
    this.buttonText = initVal.buttonText;
    this.age = initVal.age;
    this.amountOfDays = initVal.amountOfDays;
    this.metroStation = initVal.metroStation;
    this.periods = initVal.periods;
  }

  public get Title() {
    return this.title;
  }

  public set Title(value: string) {
    this.title = value;
  }

  public get Text() {
    return this.text;
  }

  public set Text(value: string) {
    this.text = value;
  }

  public get ImageUrl() {
    return this.imageUrl;
  }

  public set ImageUrl(value: string) {
    this.imageUrl = value;
  }

  public get ButtonUrl() {
    return this.buttonUrl;
  }

  public set ButtonUrl(value: string) {
    this.buttonUrl = value;
  }

  public get ButtonText() {
    return this.buttonText;
  }

  public set ButtonText(value: string) {
    this.buttonText = value;
  }


  public get Age() {
    return this.age;
  }

  public set Age(value: string) {
    this.age = value;
  }

  public get AmountOfDays() {
    return this.amountOfDays;
  }

  public set AmountOfDays(value: string) {
    this.amountOfDays = value;
  }

  public get MetroStation() : { name: string, imageUrl: string } | null {
    return this.metroStation;
  }

  public set MetroStation(value: { name: string, imageUrl: string } | null) {
    this.metroStation = value;
  }

  public get Periods() {
    return this.periods;
  }

  public set Periods(value: Array<string>) {
    this.periods = value;
  }
}

export class TitleElement extends BaseEmailElement {
  title: string = 'Привет ✨';

  public static Default(index : string | undefined = undefined) : TitleElement {
    return new TitleElement('Привет ✨', index !== undefined ? index : uuidv4());
  }
  public constructor(title: string, index : string) {
    super('Заголовок', EmailElements.Title, index);

    this.title = title;
  }

  public get Title(): string {
    return this.title;
  }

  public set Title(value: string) {
    this.title = value;
  }
}

export class BigImageElement extends BaseEmailElement {
  imageUrl: string = '';
  address : string = ''

  public static Default(index : string | undefined = undefined) : BigImageElement {
    let imageUrl: string = '';
    let address : string = ''

    return new BigImageElement(address, imageUrl, index !== undefined ? index : uuidv4());
  }

  public constructor(address: string, imageUrl: string, index : string) {
    super('Большая картинка', EmailElements.BigImage, index);
    this.imageUrl = imageUrl;
    this.address = address;
  }

  public get ImageUrl(): string {
    return this.imageUrl;
  }

  public set ImageUrl(value: string) {
    this.imageUrl = value;
  }

  public get Address(): string {
    return this.address;
  }

  public set Address(value: string) {
    this.address = value;
  }
}


export class BadgesElement extends BaseEmailElement {
  badges: Array<{ variant: BadgeVariants, text: string }>;

  public static Default(index : string | undefined = undefined) : BadgesElement {
    let badges: Array<{ variant: BadgeVariants, text: string }> = new Array<{ variant: BadgeVariants, text: string }>(
      {variant: BadgeVariants.SolidPink, text: '8-12 лет'},
      {variant: BadgeVariants.OutlinePink, text: 'Продлёнка!'},
      {variant: BadgeVariants.SolidBlack, text: 'Предложение доступно до 30 декабря'});

    return new BadgesElement(badges, index !== undefined ? index : uuidv4());
  }

  public constructor(badges: Array<{ variant: BadgeVariants, text: string }>, index : string) {
    super('Бейджи', EmailElements.Badges, index);
    this.badges = badges;
  }

  public get Badges(): Array<{ variant: BadgeVariants, text: string }> {
    return this.badges;
  }

  public set Badges(value: Array<{ variant: BadgeVariants, text: string }>) {
    this.badges = value;
  }
}


export class ParagraphElement extends BaseEmailElement {
  text: string = 'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
    'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».';

  public static Default(index : string | undefined = undefined) : ParagraphElement {
    let text: string = 'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
      'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».'

    return new ParagraphElement(text, index !== undefined ? index : uuidv4());
  }

  public constructor(text: string, index : string) {
    super('Параграф', EmailElements.Paragraph, index);
    this.text = text;
  }

  public get Text(): string {
    return this.text;
  }

  public set Text(value: string) {
    this.text = value;
  }
}

export class MailData {
  public version: number = 0;

  public elements: Array<BaseEmailElement>;

  constructor(version: number, elements: Array<BaseEmailElement> | null) {
    if (elements)
      this.elements = elements;
    else
      this.elements = new Array<BaseEmailElement>();
    this.version = version;
  }
}


