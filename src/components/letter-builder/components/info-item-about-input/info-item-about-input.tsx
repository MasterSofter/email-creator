import {EmailElement, LetterData} from '../../../../types/types';
import {FormGroup, FormLabel} from 'react-bootstrap';
import ReactQuill from 'react-quill';

type Props = {
    element : EmailElement;
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function InfoItemAboutElementInput({element, letterData, setLetterData} : Props) : JSX.Element {
    return (
        <FormGroup className='mb-3'>
            <FormLabel className='fw-semibold'>Текст</FormLabel>
            <ReactQuill
                className='border rounded-3'
                theme='snow'
                value={element.getValue()}
                id='reactQuill'
                onChange={(value) => {
                    element.setValue(value)
                    setLetterData([...letterData]);
                } }/>
        </FormGroup>
    );
}