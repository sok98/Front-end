import React, { useState } from 'react'
//import Modal from 'react-modal'
//import Modal from "C:/Users/USER/test-react/src/Modal.js";
import Modal from "C:/졸프/wordballoon200928/client/src/Page/container/VideoPage/Modal.js";

function ModalPage() {
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            {
                modalVisible && <Modal
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}>Hello</Modal>
            }
        </>
    )
}

export default ModalPage