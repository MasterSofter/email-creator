import {v4 as uuidv4} from 'uuid';
import {text} from "stream/consumers";

export const Stations = [{name: 'м. Молодежная', imageUrl: 'metro-molodeznaya.png'},
    {name: 'м. Войковская', imageUrl: 'metro-voykovskaya.png'}];

export enum BadgeVariants {
    SolidPink,
    OutlinePink,
    SolidBlack
}

export interface EmailElement {
    getElementKey(): string;

    getValue(): any;

    setValue(value: any): void;

    getName(): string;
}

export class EmptyElement implements EmailElement {
    index: string = '';

    constructor() {
        this.index = uuidv4();
    }

    getValue(): any {
        return '';
    }

    setValue(value: string): void {
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Пустой элемент';
    }
}

export class InfoItemAboutElement implements EmailElement {
    readonly index: string;
    private text: string;

    constructor() {
        this.index = uuidv4();
        this.text =
            '<b>🔥 Чем предстоит заниматься?</b>' +
            '<br><br>' +
            'Учеников ждёт множество интересных заданий ' +
            'по программированию, созданию алгоритмов ' +
            'разной сложности, изучение графов, таблиц' +
            'и работа с данными.  ' +
            '<br><br>' +
            '<b>✅ В чём польза курса?</b>' +
            '<br><br>' +
            'Возможность учиться у ведущий преподавателей МАИ, сотрудников ФИПИ' +
            ' и специалистов ОГЭ и ЕГЭ с многолетним опытом.';
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Блок \"About\"';
    }

    getValue(): any {
        return this.text;
    }

    setValue(value: any): void {
        this.text = value;
    }

}

export class InfoItemSignUpElement implements EmailElement {
    readonly index: string;
    private title: string;
    private text: string;
    private imageUrl: string;
    private age: string;
    private amountOfDays: string;
    private metroStation: { name: string, imageUrl: string };
    private periods: Array<string>;

    constructor() {
        this.index = uuidv4();
        this.title = 'Minecraft-каникулы';
        this.text = 'Ребята создадут и анимируют объекты для своих игровых миров, на самом популярном языке программирования!';
        this.imageUrl = '';
        this.age = '8-17 лет';
        this.amountOfDays = '5 дней';
        this.metroStation = Stations[0];
        this.periods = ['30 окт — 3 ноя', '20 — 24 ноя'];
    }

    public getValue(): any {
        return {
            title: this.title,
            text: this.text,
            imageUrl: this.imageUrl,
            age: this.age,
            amountOfDays: this.amountOfDays,
            metroStation: this.metroStation,
            periods: this.periods
        };
    }

    public setValue(value: {
                        title: string,
                        text: string,
                        imageUrl: string,
                        age: string,
                        amountOfDays: string,
                        metroStation: { name: string, imageUrl: string },
                        periods: Array<string>
                    }
    ): void {
        this.title = value.title;
        this.text = value.text;
        this.imageUrl = value.imageUrl;
        this.age = value.age;
        this.amountOfDays = value.amountOfDays;
        this.metroStation = value.metroStation;
        this.periods = value.periods;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Блок \"Записаться\"';
    }
}

export class TitleElement implements EmailElement {
    index: string = '';
    private value: string = '';

    constructor() {
        this.index = uuidv4();
        this.value = 'Привет ✨';
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Заголовок';
    }

}

export class BigImageElement implements EmailElement {
    index: string = '';
    private url: string = '';

    constructor() {
        this.index = uuidv4();
        this.url = '';
    }

    public getValue(): string {
        return this.url;
    }

    public setValue(value: string): void {
        this.url = value;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Большая картинка';
    }
}

export class BadgesElement implements EmailElement {
    index: string;
    private badges: Array<{variant: BadgeVariants, text: string}>;

    constructor() {
        this.index = uuidv4();
        this.badges = new Array<{variant: BadgeVariants, text: string}>(
            {variant : BadgeVariants.SolidPink , text : '8-12 лет' },
            {variant : BadgeVariants.OutlinePink , text : 'Продлёнка!' },
            {variant : BadgeVariants.SolidBlack , text : 'Предложение доступно до 30 декабря' });
    }

    public getValue(): Array<{variant: BadgeVariants, text: string}> {
        return this.badges;
    }

    public setValue(value: {value: {variant: BadgeVariants, text: string}, index : number}): void {
        this.badges[value.index] = value.value;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Бейджи';
    }
}

export class ParagraphElement implements EmailElement {
    index: string = '';
    private value: string = '';

    constructor() {
        this.index = uuidv4();
        this.value = 'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
            'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».';
    }

    getValue(): string {
        return this.value;
    }

    setValue(value: string): void {
        this.value = value;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return 'Параграф';
    }
}

export type LetterData = Array<EmailElement>;

