import React from 'react'
import { Modal } from 'react-bootstrap'
import { remove } from 'react-icons-kit/fa'
import { Icon } from 'react-icons-kit'

export const PreviewModal = (props) => {
    const { title, show, size, onHide } = props

    return (
        <Modal
            show={show}
            size={size}
            centered
            onHide={onHide}
        >
            <Modal.Header className="border-0 p-4">
                <div className="d-flex w-100">
                    <div><h5 className="fs-18 mt-2 mb-0">{title}</h5> </div>
                    <div className="ms-auto">
                        <button
                            type="button"
                            onClick={onHide}
                            className="btn btn-outline-danger p-0 px-1 pb-1 shadow-none rounded-circle"
                        >
                            <Icon icon={remove} size={20} />
                        </button>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4 pt-0">
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-outline-danger shadow-none' onClick={onHide}>
                    Close
                </button>
                <button className='btn btn-outline-primary shadow-none' onClick={onHide}>
                    Confirm
                </button>
            </Modal.Footer>
        </Modal>
    );
};

