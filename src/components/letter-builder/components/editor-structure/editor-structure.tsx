import React from "react";
import {Button , Card , CardBody , CardHeader , Col , Row} from "react-bootstrap";
import ListEmailElements from "./components/list-email-elements/list-email-elements";
import {EmailElement , EmptyElement , LetterData} from "../../../../types/types";
import {closestItem , removeItem} from "./components/list-email-elements/components/array-utils";

type Props = {
    letterData: LetterData;
    setLetterData: React.Dispatch<React.SetStateAction<LetterData>>;
    selectedTab: EmailElement;
    setSelectedTab: React.Dispatch<React.SetStateAction<EmailElement>>;
}

export default function EditorStructure({ letterData , setLetterData , selectedTab , setSelectedTab
                                        }: Props ): React.JSX.Element {

    const removeTab = (item: EmailElement) => {
        if (item === selectedTab) {
            setSelectedTab(closestItem(letterData , item));
        }

        setLetterData(removeItem(letterData , item));
    };

    const addTab = () => {
        const nextItem = new EmptyElement();

        if (nextItem) {
            setLetterData([...letterData , nextItem]);
            setSelectedTab(nextItem);
        }
    };


    return (
        <Card style={ {height : "44vh"} }>
            <CardHeader className="fw-bold h5 py-3">Структура письма</CardHeader>
            <CardBody style={ {height : "90%" , maxHeight : "90%" , paddingBottom : 0} }>
                <Row style={ {height : "86%" , maxHeight : "86%"} }
                     className={ " d-flex flex-row justify-content-between" }>
                    <Col style={ {height : "100%" , maxHeight : "100%"} }>
                        <ListEmailElements letterData={ letterData } setLetterData={ setLetterData }
                                           selectedTab={ selectedTab } setSelectedTab={ setSelectedTab }/>
                    </Col>
                </Row>
                <Row style={ {height : "2%" , maxHeight : "2%"} }/>
                <Row style={ {height : "12%" , maxHeight : "12%" , textAlign : "end"} } className={ "d-flex flex-row" }>
                    <Col className={ "my-auto" } style={ {width : "100%"} }>
                        <Button
                            variant="primary"
                            size="lg"
                            style={ {marginRight : "2%"} }
                            onClick={ () => {
                                removeTab(selectedTab)
                            } }
                        >
                            Удалить
                        </Button>
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={ () => {
                                addTab()
                            } }
                        >
                            Добавить...
                        </Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}
