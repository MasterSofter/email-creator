
export interface EmailElement {
    getElementKey(index : number) : string;
    getValue() : string;
    setValue(value:string) : void;
    getName() : string;
}

export class EmptyElement implements EmailElement {
    getValue(): string {
        return "";
    }

    setValue(value: string): void {
    }

    getElementKey(index : number): string {
        return `element-${index}`;
    }

    getName(): string {
        return "Пустой элемент";
    }
}

export class TitleElement implements EmailElement {
    private value: string = "";

    constructor() {
        this.value = 'Привет ✨';
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value:string): void {
        this.value = value;
    }

    getElementKey(index : number): string {
        return `element-${index}`;
    }

    getName(): string {
        return "Заголовок";
    }

}

export class BigImageElement implements EmailElement {
    private url: string = "";

    constructor() {
        this.url = '/images/hero.png';
    }

    public getValue(): string {
        return this.url;
    }

    public setValue(value:string): void {
        this.url = value;
    }

    getElementKey(index : number): string {
        return `element-${index}`;
    }

    getName(): string {
        return "Большая картинка";
    }
}


export class ParagraphElement implements EmailElement {
    private value: string = "";

    constructor() {
        this.value = 'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
            'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».';
    }

    getValue(): string {
        return this.value;
    }

    setValue(value: string): void {
        this.value = value;
    }

    getElementKey(index : number): string {
        return `element-${index}`;
    }

    getName(): string {
        return "Параграф";
    }
}

export type LetterData = {
    elements : EmailElement[];
    activeElement : EmailElement;
}
