import React from 'react';
import {Reorder} from 'framer-motion';
import {BaseEmailElement, EmptyElement, MailData} from '../../../../types/types';
import {Item} from './components/item';
import {Accordion, Button} from 'react-bootstrap';
import {removeItem} from './components/array-utils';
import {PlusSquareFill} from 'react-bootstrap-icons';

export default function ListEmailElements(props: { mailData: MailData, setMailData: React.Dispatch<React.SetStateAction<MailData>> }): React.JSX.Element {

  const removeTab = (element: BaseEmailElement) => {
    props.setMailData({...props.mailData, elements: removeItem(props.mailData.elements, element)});
  };

  const addTab = () => {
    props.mailData.elements.push(EmptyElement.Default());
    props.setMailData({...props.mailData, elements: props.mailData.elements});
  };

  return (
    <Accordion
      id={`accordion`}
      style={{width: '100%', cursor: 'default', border: 'none'}}>
      <Reorder.Group
        axis="y"
        onReorder={(value) => {
          props.setMailData({...props.mailData, elements: value})
        }}
        values={props.mailData.elements}
        className={'list border border-1 rounded-3 text-center align-items-center'}
        style={{
          backgroundColor: 'rgba(243,243,243,0.63)', // серый
          height: '100%',
          width: '100%',
          overflowY: 'auto'
        }}
        layoutScroll
      >
        {props.mailData.elements.map((element, index) => (
          <Item key={element.ElementKey} index={index} element={element} removeTab={removeTab} mailData={props.mailData}
                setMailData={props.setMailData}/>
        ))}
        <Button
          className={'border-0 my-5 text-center fs-1 fw-bold px-4'}
          style={{backgroundColor: 'transparent', color: '#dedede'}}
          size="lg"
          onClick={() => {
            addTab()
          }}
        >
          <PlusSquareFill className={'plus-circle-fill'}/>
        </Button>
      </Reorder.Group>
    </Accordion>
  );
}
