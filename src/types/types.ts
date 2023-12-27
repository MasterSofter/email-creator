
export interface EmailElement {
    setElementkey(index : number) : void;
    getElementKey() : string;
    getValue() : string;
    setValue(value:string) : void;
}

export class EmptyElement implements EmailElement {
    private index : number = -1;

    constructor(index : number) {
        this.index = index;
    }

    getValue(): string {
        return "";
    }

    setValue(value: string): void {
    }

    getElementKey(): string {
        return `element-${this.index}`;
    }

    setElementkey(index : number): void {
        this.index = index;
    }
}

export class TitleElement implements EmailElement {
    private value: string = "";
    private index : number = -1;

    constructor(initVal : string, index : number) {
        this.value = initVal;
        this.index = index;
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

    setElementkey(index : number): void {
        this.index = index;
    }
}

export class BigImageElement implements EmailElement {
    private url: string = "";
    private index : number = -1;

    constructor(initVal : string, index : number) {
        this.url = initVal;
        this.index = index;
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

    setElementkey(index : number): void {
        this.index = index;
    }
}

export class ParagraphElement implements EmailElement {
    private value: string = "";
    private index : number = -1;

    constructor(initVal : string, index : number) {
        this.value = initVal;
        this.index = index;
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

    setElementkey(index : number): void {
        this.index = index;
    }
}

export type LetterData = {
    elements : EmailElement[];
    activeElement : EmailElement;
}
