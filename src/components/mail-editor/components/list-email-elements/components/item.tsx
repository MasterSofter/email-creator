import React, {useEffect, useState} from 'react';
import {BaseEmailElement, MailData} from '../../../../../types/types';
import {animate, MotionValue, Reorder, useMotionValue} from 'framer-motion';
import {Accordion} from 'react-bootstrap';
import {GripVertical, Trash, TrashFill} from 'react-bootstrap-icons';
import EditorElement from '../../editor-element/editor-element';

const inactiveShadow = '0px 0px 0px rgba(0,0,0,0.8)';

function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.on('change', (latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, '5px 5px 10px rgba(0,0,0,0.3)');
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

type Props = {
  element: BaseEmailElement;
  removeTab: (element: BaseEmailElement) => void;
  mailData: MailData;
  setMailData: React.Dispatch<React.SetStateAction<MailData>>;
  index: number;
}

export const Item = ({index, element, removeTab, mailData, setMailData}: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const [dragListener, setDragListener] = useState<boolean>(true);

  return (

    <Reorder.Item
      dragListener={dragListener}
      value={element}
      id={element.ElementKey}
      className='list-item d-flex flex-row justify-content-between'
      style={{boxShadow, y}}
    >
      <GripVertical className='grip-vertical-icon' style={{backgroundColor: 'transparent', color: '#b0b0b0'}}/>

      <Accordion.Item onMouseEnter={() => setDragListener(false)}
                      onMouseLeave={() => setDragListener(true)}
                      style={{width: '100%', border:'none'}}
                      eventKey={`accordion-${element.ElementKey}`}>
        <Accordion.Header className='d-flex flex-row justify-content-between'>
          <span>{element.Name}</span>
        </Accordion.Header>
        <Accordion.Body style={{border:'none'}}>
          <EditorElement element={element} mailData={mailData} setMailData={setMailData}/>
        </Accordion.Body>
      </Accordion.Item>

      <Trash className='trash-icon'
                 style={{backgroundColor: 'transparent', color: '#b0b0b0', cursor: 'pointer'}}
                 onClick={() => {
                   removeTab(element)
                 }}/>
    </Reorder.Item>
  );
};