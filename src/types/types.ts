
export interface EmailElement {
    getType() : string;
    getValue() : string;
    setValue(value:string) : void;
}

export class TitleElement implements EmailElement {
    private value: string = "";

    constructor(initVal : string) {
        this.value = initVal;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value:string): void {
        this.value = value;
    }

    getType(): string {
        return "TitleElement";
    }
}

export class BigImageElement implements EmailElement {
    private url: string = "";

    constructor(initVal : string) {
        this.url = initVal;
    }

    public getValue(): string {
        return this.url;
    }

    public setValue(value:string): void {
        this.url = value;
    }

    getType(): string {
        return "BigImageElement";
    }
}

export class ParagraphElement implements EmailElement {
    private value: string = "";

    constructor(initVal : string) {
        this.value = initVal;
    }

    getValue(): string {
        return this.value;
    }

    setValue(value: string): void {
        this.value = value;
    }

    getType(): string {
        return "ParagraphElement";
    }

}

export type LetterData = {
    elements : EmailElement[];
    activeElement : EmailElement | null;
}
