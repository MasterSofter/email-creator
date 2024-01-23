import {v4 as uuidv4} from 'uuid';

export const Stations = [
  {name: 'м. Молодежная', imageUrl: 'metro-molodeznaya.png'},
  {name: 'м. Войковская', imageUrl: 'metro-voykovskaya.png'}];

export enum BadgeVariants {
  SolidPink,
  OutlinePink,
  SolidBlack
}

export enum EmailElements {
  Empty,
  HighlightedParagraph,
  ProductCard,
  Title,
  BigImage,
  Badges,
  Paragraph
}

export class BaseEmailElement {
  readonly index: string;
  protected name: string;
  protected id: EmailElements;

  protected constructor(name: string, id: EmailElements, index : string | undefined = undefined) {
    this.name = name;
    this.id = id;
    if(index !== undefined)
      this.index = index;
    else
      this.index = uuidv4();
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
  public constructor(index : string | undefined = undefined) {
    super('Пустой элемент', EmailElements.Empty, index);
  }
}

export class HighlightedParagraphElement extends BaseEmailElement {
  text: string;

  public constructor(text: string | null, index : string | undefined = undefined) {
    super('Выделенный параграф', EmailElements.HighlightedParagraph, index);

    if (text)
      this.text = text;
    else
      this.text = '<div class="paragraph">' +
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
  } | null, index : string | undefined = undefined) {

    super('Карточка товара', EmailElements.ProductCard, index);

    if (initVal) {
      this.title = initVal.title;
      this.text = initVal.text;
      this.imageUrl = initVal.imageUrl;
      this.buttonUrl = initVal.buttonUrl;
      this.buttonText = initVal.buttonText;
      this.age = initVal.age;
      this.amountOfDays = initVal.amountOfDays;
      this.metroStation = initVal.metroStation;
      this.periods = initVal.periods;
    } else {
      this.title = 'Minecraft-каникулы';
      this.text = 'Ребята создадут и анимируют объекты для своих игровых миров, на самом популярном языке программирования!';
      this.imageUrl = '';
      this.buttonUrl = '';
      this.buttonText = 'Записаться';
      this.age = '8-17 лет';
      this.amountOfDays = '5 дней';
      this.metroStation = Stations[0];
      this.periods = ['30 окт — 3 ноя', '20 — 24 ноя'];
    }
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
  title: string = '';

  public constructor(title: string | null, index : string | undefined = undefined) {
    super('Заголовок', EmailElements.Title, index);
    if (title)
      this.title = title;
    else
      this.title = 'Привет ✨';
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

  public constructor(address: string | null, imageUrl: string | null, index : string | undefined = undefined) {
    super('Большая картинка', EmailElements.BigImage, index);

    if (imageUrl)
      this.imageUrl = imageUrl;
    else
      this.imageUrl = '';

    if (address)
      this.address = address;
    else
      this.imageUrl = '';
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

  public constructor(badges: Array<{ variant: BadgeVariants, text: string }> | null, index : string | undefined = undefined) {
    super('Бейджи', EmailElements.Badges, index);

    if (badges)
      this.badges = badges;
    else
      this.badges = new Array<{ variant: BadgeVariants, text: string }>(
        {variant: BadgeVariants.SolidPink, text: '8-12 лет'},
        {variant: BadgeVariants.OutlinePink, text: 'Продлёнка!'},
        {variant: BadgeVariants.SolidBlack, text: 'Предложение доступно до 30 декабря'});
  }

  public get Badges(): Array<{ variant: BadgeVariants, text: string }> {
    return this.badges;
  }

  public set Badges(value: Array<{ variant: BadgeVariants, text: string }>) {
    this.badges = value;
  }
}


export class ParagraphElement extends BaseEmailElement {
  text: string = '';

  public constructor(text: string | null, index : string | undefined = undefined) {
    super('Параграф', EmailElements.Paragraph, index);

    if (text)
      this.text = text;
    else
      this.text = 'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
        'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».';
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


