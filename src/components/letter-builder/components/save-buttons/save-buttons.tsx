import {Button} from "react-bootstrap";

const nodeToString = (node: HTMLDivElement): string => {
    const tmpNode = document.createElement('div');
    tmpNode.appendChild(node.cloneNode(true));

    return tmpNode.innerHTML;
};

export const copyToClipboard = (html: HTMLDivElement): void => {
    navigator.clipboard.writeText(nodeToString(html));
};

export const downloadFile = (html: HTMLDivElement): void => {
    const file = new Blob([new Uint8Array([0xEF , 0xBB , 0xBF]) , nodeToString(html)] ,
                            {type : 'text/html;charset=utf-8'});

    const element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = `${ new Date().getTime().toString() }.html`;
    document.body.appendChild(element);
    element.click();
    element.remove();
};

type Props = {
    letter: HTMLDivElement;
}

export default function SaveButtons({letter}: Props): JSX.Element {
    return (<div className="my-auto text-end">
            <Button
                variant="primary"
                size="lg"
                className="me-3"
                onClick={ () => copyToClipboard(letter) }
            >
                Скопировать
            </Button>
            <Button
                variant="outline-primary"
                size="lg"
                onClick={ () => downloadFile(letter) }
            >
                Сохранить файл
            </Button>
        </div>);
}
