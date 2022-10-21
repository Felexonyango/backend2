
import { IEmployee } from '../../model/employees';
import { Update } from '@ngrx/entity';

import { createAction, props } from '@ngrx/store';
export const LoadEmployees = createAction('[Employees] Load All employees');

export const loadEmployeesSuccess = createAction(
  '[Employees] Load All employees Success',
  props<{ employees:IEmployee[]}>()
);

export const loadEmployeesFailure = createAction(
  '[Employees] Load  employees Failure',
  props<{ error: unknown }>()
);

export const loadEmployee = createAction(
  '[Employee] Load employee ',
  props<{ id: string }>()
);

export const loadEmployeeSuccess = createAction(
  '[Employee] Load  employee Success',
  props<{ employee: IEmployee }>()
);

export const loadEmployeeFailure = createAction(
  '[Employee] Load employee Failure',
  props<{ error: unknown }>()
);

export const createEmployee = createAction(
  '[Employee] Create employee',
  props<{ employee: IEmployee }>()
);

export const createEmployeeSuccess = createAction(
  '[Employee] Create  employee Success',
  props<{ employee: IEmployee }>()
);

export const createEmployeeFailure = createAction(
  '[Employee] Create employee Failure',
  props<{ error: unknown }>()
);

export const updateEmployee = createAction(
  '[Employee] Update employee',
  props<{ updates: Update<IEmployee>[] }>());


export const updateEmployeeSuccess = createAction(
  '[Employee] Update  employee Success',
  props<{employee:IEmployee}>());



export const updateEmployeeFailure = createAction(
  '[Employee] Update employee Failure',
  props<{ error: unknown }>()
);

export const EmployeeActionTypes = {
  loadEmployee,
  loadEmployeeSuccess,
  loadEmployeeFailure,
  LoadEmployees,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  createEmployee,
  createEmployeeSuccess,
  createEmployeeFailure,
  updateEmployee,
  updateEmployeeFailure,
  updateEmployeeSuccess
  
};