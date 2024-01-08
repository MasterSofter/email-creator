import {
    InfoItemSignUpElement,
    LetterData, Stations,
} from "../../../../types/types";
import React from "react";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import ReactQuill from "react-quill";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

type Props = {
    element : InfoItemSignUpElement;
    letterData: LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function InfoItemSignUpInput({element, letterData, setLetterData} : Props) : React.JSX.Element {
    return (
        <FormGroup className={""} style={{maxHeight : "25vh" , overflowY : "auto"}} >
            <div className={"mb-3"}>
                <FormLabel className={"fw-semibold"}>Заголовок</FormLabel>
                <FormControl
                    value={element.getValue().title}
                    type="text"
                    name="title"
                    id="titleInput"
                    onChange={(event) => {
                        element.setValue({...element.getValue(), title : event.currentTarget.value})
                        setLetterData([...letterData]);
                    } }
                    required/>
            </div>

            <div className={"mb-3"}>
                <FormLabel className={"fw-semibold"}>Текст</FormLabel>
                <ReactQuill
                    className={"border rounded-3"}
                    theme={"snow"}
                    value={element.getValue().text}
                    id="reactQuill"
                    onChange={(value) => {
                        element.setValue({...element.getValue(), text : value})
                        setLetterData([...letterData]);
                    } }/>
            </div>

            <div className={"mb-3"}>
                <FormLabel className={"fw-semibold"}>URL изображения</FormLabel>
                <FormControl
                    value={element.getValue().imageUrl}
                    type="text"
                    name="image"
                    id="imageInput"
                    onChange={(event) => {
                        element.setValue({...element.getValue(), imageUrl : event.currentTarget.value})
                        setLetterData([...letterData]);
                    } }
                    required/>
            </div>

            <div className={"d-flex flex-row mb-3"}>
                <div className={"me-5"}>
                    <FormLabel className={"fw-semibold"}>Возраст</FormLabel>
                    <FormControl
                        value={element.getValue().age}
                        type="text"
                        name="image"
                        id="imageInput"
                        onChange={(event) => {
                            element.setValue({...element.getValue(), age : event.currentTarget.value})
                            setLetterData([...letterData]);
                        } }
                        required/>
                </div>
                <div className={"me-5"}>
                    <FormLabel className={"fw-semibold"}>Количество дней</FormLabel>
                    <FormControl
                        value={element.getValue().amountOfDays}
                        type="text"
                        name="image"
                        id="imageInput"
                        onChange={(event) => {
                            element.setValue({...element.getValue(), amountOfDays : event.currentTarget.value})
                            setLetterData([...letterData]);
                        } }
                        required/>
                </div>

                <div>
                    <FormLabel className={"fw-semibold"}>Станция метро</FormLabel>
                    <DropdownButton title={element.getValue().metroStation.name}>
                        {
                            Stations.map((value, index) => {
                                return (
                                    <Dropdown.Item
                                        title={value.name}
                                        key = {"dropDownItem-" + index}
                                        onClick={(value) => {
                                            for(let i = 0; i < Stations.length; i++){
                                                if(value.currentTarget.title == Stations[i].name)
                                                    element.setValue({...element.getValue(), metroStation : Stations[i]});
                                            }
                                            setLetterData([...letterData]);
                                        } }
                                    >{value.name}</Dropdown.Item>
                                );
                            })
                        }
                    </DropdownButton>
                </div>
            </div>

            <div className={"d-flex flex-row"}>
                <div className={"me-5"}>
                    <FormLabel className={"fw-semibold"}>Период</FormLabel>
                    <FormControl
                        value={element.getValue().periods[0]}
                        type="text"
                        name="image"
                        id="imageInput"
                        onChange={(event) => {
                            element.setValue({...element.getValue(), periods : {...element.getValue().periods, 0 : event.currentTarget.value}})
                            setLetterData([...letterData]);
                        } }
                        required/>
                </div>
                <div>
                    <FormLabel className={"fw-semibold"}>Период</FormLabel>
                    <FormControl
                        value={element.getValue().periods[1]}
                        type="text"
                        name="image"
                        id="imageInput"
                        onChange={(event) => {
                            element.setValue({...element.getValue(), periods : {...element.getValue().periods, 1 : event.currentTarget.value}})
                            setLetterData([...letterData]);
                        } }
                        required/>
                </div>
            </div>
        </FormGroup>
    );
}