import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
      <DialogBackdrop className='fixed inset-0 bg-black/60' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel className='max-w-lg space-y-4 rounded-md border border-gray-300 bg-white px-12 py-8'>
          <DialogTitle className='text-lg font-bold'>Employee created!</DialogTitle>
          <Description>You can see this new employee in the table</Description>
          <div className='flex justify-between space-x-4 !mt-10'>
            <button
              onClick={closeModal}
              className='rounded-md border border-blue-500 px-4 py-2 transition-colors hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Close
            </button>
            <Link to='/employee-list'>
              <button className='rounded-md border border-blue-500 bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Go to Employee List
              </button>
            </Link>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
