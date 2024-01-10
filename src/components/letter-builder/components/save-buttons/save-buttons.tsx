import {Button} from "react-bootstrap";
import React , {useEffect , useState} from "react";
import {Clipboard, Download} from "react-bootstrap-icons";

const nodeToString = (node: HTMLDivElement): string => {
    const tmpNode = document.createElement('div');
    tmpNode.appendChild(node.cloneNode(true));

    return tmpNode.innerHTML;
};

export const copyToClipboard = (html: null | HTMLDivElement): void => {
    if(html)
        navigator.clipboard.writeText(nodeToString(html));
};

export const downloadFile = (html: null | HTMLDivElement): void => {
    if(html){
        const file = new Blob([new Uint8Array([0xEF , 0xBB , 0xBF]) , nodeToString(html)] ,
            {type : 'text/html;charset=utf-8'});

        const element = document.createElement('a');
        element.href = URL.createObjectURL(file);
        element.download = `${ new Date().getTime().toString() }.html`;
        document.body.appendChild(element);
        element.click();
        element.remove();
    }
};

type Props = {
    letter: null | HTMLDivElement;
    set_is_BuiltLetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SaveButtons({letter, set_is_BuiltLetter}: Props): JSX.Element {
    const [onClickDownload, setOnClickDownload] = useState<boolean>(false)
    const [onClickCopy, setOnClickCopy] = useState<boolean>(false);

    useEffect(() => {
        if(onClickDownload)
        {
            downloadFile(letter);
            set_is_BuiltLetter(false);
            setOnClickDownload(false);
        }
        }, [onClickDownload]);

    useEffect(() => {
        if(onClickCopy){
            copyToClipboard(letter);
            set_is_BuiltLetter(false);
            setOnClickCopy(false);
        }
        }, [onClickCopy]);

    return (<div className="text-end">
            <Button
                variant="outline-secondary"
                size="lg"
                className="me-3"
                onClick={ () => {
                    set_is_BuiltLetter(true);
                    setOnClickCopy(true);
                    } }
            >
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <Clipboard className={"me-2"}/>
                    <span>Скопировать</span>
                </div>
            </Button>
            <Button
                variant="secondary"
                size="lg"
                onClick={ () => {
                    set_is_BuiltLetter(true);
                    setOnClickDownload(true);
                    } }
            >
                <Download/>
            </Button>
        </div>);
}
