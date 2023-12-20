import React , {ChangeEvent , MutableRefObject} from 'react';
import {LetterData} from "../../types/types";
import {Card, CardBody, CardHeader} from "react-bootstrap";
import BodyInput from "./components/body-input/body-input";
import TitleInput from "./components/title-input/title-input"
import ImageInput from './components/image-input/image-input';
import SaveButtons from "./components/save-buttons/save-buttons";

type Props = {
    letter: MutableRefObject<HTMLDivElement | null>;
    letterData: LetterData;
    setLetterData: (letterData: LetterData) => void;};

export default function LetterBuilder({letter, letterData, setLetterData}: Props) : React.JSX.Element{
    const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target;
        setLetterData({...letterData, [name]: value});
    };
    return (
        <>
            <Card className="sticky-top">
                <CardHeader className="fw-bold h5 py-3">Настройки письма</CardHeader>
                <CardBody>
                    <ImageInput image={letterData.image} handleInputChange={handleInputChange}/>
                    <TitleInput title={letterData.title} handleInputChange={handleInputChange}/>
                    <BodyInput body={letterData.body} handleReactQuillChange={(body) => setLetterData(
                            {...letterData, 'body': body})}/>
                    {letter.current && <SaveButtons letter={letter.current} />}
                </CardBody>
            </Card>
        </>
    );
}
