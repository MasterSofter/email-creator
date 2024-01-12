import {BadgesElement, LetterData} from '../../../../types/types';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';

type Props = {
    element: BadgesElement;
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function BadgesInput({element, letterData, setLetterData}: Props): JSX.Element {
    return (
        <FormGroup className=''>
            <div className='d-flex flex-row mb-3'>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Бейдж</FormLabel>
                    <FormControl
                        value={element.getValue()[0].text}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.setValue({
                                value: {...element.getValue()[0], text: event.currentTarget.value},
                                index: 0
                            })
                            setLetterData([...letterData]);
                        }}
                        required/>
                </div>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Бейдж</FormLabel>
                    <FormControl
                        value={element.getValue()[1].text}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.setValue({
                                value: {...element.getValue()[1], text: event.currentTarget.value},
                                index: 1
                            })
                            setLetterData([...letterData]);
                        }}
                        required/>
                </div>
                <div className='me-5'>
                    <FormLabel className='fw-semibold'>Бейдж</FormLabel>
                    <FormControl
                        value={element.getValue()[2].text}
                        type='text'
                        name='image'
                        id='imageInput'
                        onChange={(event) => {
                            element.setValue({
                                value: {...element.getValue()[2], text: event.currentTarget.value},
                                index: 2
                            })
                            setLetterData([...letterData]);
                        }}
                        required/>
                </div>
            </div>
        </FormGroup>
    );
}