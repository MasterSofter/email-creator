import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {Download, FolderPlus} from 'react-bootstrap-icons';
import {MailData} from '../../../../types/types';
import {MailSerializer} from '../../../../serialization/mail-serializer';

function UploadFileModal(props: { setModalShow: React.Dispatch<React.SetStateAction<boolean>>, mailData: MailData, setMailData: React.Dispatch<React.SetStateAction<MailData>>, show: boolean, onHide: () => void }) {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];

    if (!~file.name.indexOf('json')) {
      alert('Неверный формат файла! Требуется файл с расширением .json !');
      return;
    }

    let mailData: MailData = new MailData(0, null);
    file.text().then((value) => {
      try {
        mailData = MailSerializer.Deserialize(value);
      } catch (err) {
        alert(err);
      }
      props.setModalShow(false);
      props.setMailData(mailData);
    });
  }

  return (
    <Modal className="modal-drop-area"
           size="lg"
           {...props}
           aria-labelledby="contained-modal-title-vcenter"
           centered
    >
      <Modal.Body className="modal-drop-area">
        {drag
          ? <div
            onDragStart={e => {
              dragStartHandler(e)
            }}
            onDragLeave={e => {
              dragLeaveHandler(e)
            }}
            onDragOver={e => {
              dragStartHandler(e)
            }}
            onDrop={e => onDropHandler(e)}
            className="drop-area">Отпустите файл, чтобы открыть его</div>
          : <div
            onDragStart={e => {
              dragStartHandler(e)
            }}
            onDragLeave={e => {
              dragLeaveHandler(e)
            }}
            onDragOver={e => {
              dragStartHandler(e)
            }}
            className="drop-area">Перетащите файл, чтобы загрузить его</div>
        }
      </Modal.Body>
    </Modal>
  );
}

export default function ButtonsMailEditor(props: { mailData: MailData, setMailData: React.Dispatch<React.SetStateAction<MailData>> }) {
  const [modalShow, setModalShow] = useState(false);

  const downloadFile = (json: string | null): void => {
    if (json) {
      const file = new Blob([json], {type: 'file/json'});

      const element = document.createElement('a');
      element.href = URL.createObjectURL(file);
      element.download = `${new Date().getTime().toString()}.json`;
      document.body.appendChild(element);
      element.click();
      element.remove();
    }
  };

  return (
    <>
      <div className="text-end">
        <Button
          variant="outline-primary"
          size="lg"
          className="me-3"
          onClick={() => {
            setModalShow(true);
          }}
        >
          <div className={'d-flex flex-row justify-content-between align-items-center'}>
            <FolderPlus className={'me-2'}/>
            <span>Открыть...</span>
          </div>
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            downloadFile(MailSerializer.Serialize(props.mailData))
          }}
        >
          <Download/>
        </Button>
      </div>

      <UploadFileModal
        setModalShow={setModalShow}
        mailData={props.mailData}
        setMailData={props.setMailData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}