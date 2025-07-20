import '@hugo-lml/hr-net-table/dist/index.css';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Input from '../components/common/Input/Input';
import Modal from '../components/common/Modal/Modal';
import Select from '../components/common/Select/Select';
import Layout from '../components/layout/Layout';
import { DEPARTMENTS, STATES } from '../constants';
import clsx from 'clsx';

const Home: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: DEPARTMENTS[0].value,
    street: '',
    city: '',
    state: STATES[0].value,
    zipCode: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, selectType: 'STATE' | 'DEPARTMENT') => {
    setFormData(prev => ({
      ...prev,
      [selectType === 'STATE' ? 'state' : 'department']: value,
    }));
  };

  const isFormValid = Object.values(formData).every(value => value !== '');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with values:', formData);
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <Layout className='mx-auto max-w-4xl'>
        <h1 className='text-2xl font-bold uppercase'>Create Employee</h1>
        <form className='mt-8' onSubmit={handleSubmit}>
          <div className='flex gap-x-10'>
            <div className='relative w-3/5'>
              <div className='grid grid-cols-2 gap-4'>
                <Input name='firstName' label='First Name' className='w-full' required value={formData.firstName} onChange={handleChange} />
                <Input name='lastName' label='Last Name' className='w-full' required value={formData.lastName} onChange={handleChange} />
                <Input name='dateOfBirth' label='Date of Birth' type='date' className='w-full' required value={formData.dateOfBirth} onChange={handleChange} />
                <Input name='startDate' label='Start Date' type='date' className='w-full' required value={formData.startDate} onChange={handleChange} />
                <Select
                  label='Department'
                  options={DEPARTMENTS}
                  value={formData.department}
                  onChange={value => handleSelectChange(value, 'DEPARTMENT')}
                />
              </div>
              <button
                type='submit'
                className={clsx('absolute bottom-0 left-0 w-full rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50', { 'hover:bg-blue-600': isFormValid })}
                disabled={!isFormValid}
              >
                Save
              </button>
            </div>
            <div className='w-2/5 space-y-4 rounded-md bg-gray-200 p-4'>
              <h2 className='text-xl font-semibold'>Address</h2>
              <Input name='street' label='Street' className='w-full' required value={formData.street} onChange={handleChange} />
              <Input name='city' label='City' className='w-full' required value={formData.city} onChange={handleChange} />
              <Select label='State' options={STATES} value={formData.state} onChange={value => handleSelectChange(value, 'STATE')} />
              <Input name='zipCode' label='Zip Code' type='number' className='w-full' required value={formData.zipCode} onChange={handleChange} />
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Home;
