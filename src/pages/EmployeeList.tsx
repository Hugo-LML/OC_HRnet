import { CustomTable } from '@hugo-lml/hr-net-table';
import { FC } from 'react';
import Layout from '../components/layout/Layout';
import { EMPLOYEES } from '../constants';
import { Employee } from '../types';

const EmployeeList: FC = () => {
  return (
    <Layout className='pb-20'>
      <h1 className='text-2xl font-bold uppercase'>Listing Employees</h1>
      <CustomTable<Employee>
        data={EMPLOYEES}
        columns={[
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'startDate', label: 'Start Date', sortable: true },
          { key: 'department', label: 'Department', sortable: true },
          { key: 'dateOfBirth', label: 'Date of Birth', sortable: true },
          { key: 'street', label: 'Street', sortable: true },
          { key: 'city', label: 'City', sortable: true },
          { key: 'state', label: 'State', sortable: true },
          { key: 'zipCode', label: 'Zip Code', sortable: true },
        ]}
      />
    </Layout>
  );
};

export default EmployeeList;
