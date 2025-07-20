import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../types';

interface EmployeesState {
  list: Employee[];
}

const initialState: EmployeesState = {
  list: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
    },
  },
});

export const employeesActions = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;
