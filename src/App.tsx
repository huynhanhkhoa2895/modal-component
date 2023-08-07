import React, { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <main>
      <button
        className={'bg-blue-500 text-white p-5'}
        onClick={() => setOpen(!open)}
      >
        Click To Open
      </button>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <Modal.Panel>Hello Panel</Modal.Panel>
        <Modal.Content>Hello Content</Modal.Content>
        <Modal.Footer>Hello Footer</Modal.Footer>
      </Modal>
    </main>
  );
}

export default App;
