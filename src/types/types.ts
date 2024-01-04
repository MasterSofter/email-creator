import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface EmailElement {
    getElementKey() : string;
    getValue() : string;
    setValue(value:string) : void;
    getName() : string;
}

export class EmptyElement implements EmailElement {
    index : string = "";
    constructor() {
        this.index = uuidv4();
    }

    getValue(): string {
        return "";
    }

    setValue(value: string): void {
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return "Пустой элемент";
    }
}

export class TitleElement implements EmailElement {
    index : string = "";
    private value: string = "";

    constructor() {
        this.index = uuidv4();
        this.value = 'Привет ✨';
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value:string): void {
        this.value = value;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return "Заголовок";
    }

}

export class BigImageElement implements EmailElement {
    index : string = "";
    private url: string = "";

    constructor() {
        this.index = uuidv4();
        this.url = "";
    }

    public getValue(): string {
        return this.url;
    }

    public setValue(value:string): void {
        this.url = value;
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    getName(): string {
        return "Большая картинка";
    }
}


export class ParagraphElement implements EmailElement {
    index : string = "";
    private value: string = "";

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
        return "Параграф";
    }
}



export type LetterData = Array<EmailElement>;

