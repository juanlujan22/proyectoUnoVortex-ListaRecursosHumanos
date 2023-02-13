import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    employee_id: "1",
    first_name: "empleoye name 1",
    last_name: "employe last name 1",
    email: "empleoye1.mail@vortex-it.com",
    phone_number: "2654621",
    hire_date: "15092018",
    salary: "180000",
    commission_pct: "80",
  },
  {
    employee_id: "2",
    first_name: "empleoye name 2",
    last_name: "employe last name 2",
    email: "empleoye2.mail@vortex-it.com",
    phone_number: "165132132",
    hire_date: "15092018",
    salary: "180000",
    commission_pct: "80",
  },
  {
    employee_id: "3",
    first_name: "empleoye name 3",
    last_name: "employe last name 3",
    email: "empleoye3.mail@vortex-it.com",
    phone_number: "15092018",
    hire_date: "15092018",
    salary: "180000",
    commission_pct: "80",
  },
];

export const employesSlice = createSlice({
  name: "EMPLOYEES",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      return [...state, action.payload];
    },
    deleteEmployee: (state, action) => {
      const findEmpl = state.find(
        (elem) => elem.employee_id === action.payload
      );
      console.log(findEmpl);
      if (findEmpl) {
        state.splice(state.indexOf(findEmpl), 1);
      }
    },
    editEmploye: (state, action) => {
      const {
        first_name,
        last_name,
        phone_number,
        email,
        hire_date,
        salary,
        commission_pct,
        employee_id,
      } = action.payload;
      console.log(employee_id);
      const findEmpl = state.find((empl) => empl.employee_id === employee_id);
      if (findEmpl) {
        findEmpl.first_name = first_name;
        findEmpl.last_name = last_name;
        findEmpl.phone_number = phone_number;
        findEmpl.email = email;
        findEmpl.hire_date = hire_date;
        findEmpl.salary = salary;
        findEmpl.commission_pct = commission_pct;
      }
    },
  },
});

export const { addEmployee, deleteEmployee, editEmploye } =
  employesSlice.actions;

export default employesSlice.reducer;
