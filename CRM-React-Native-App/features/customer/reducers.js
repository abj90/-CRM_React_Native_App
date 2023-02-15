import { createSlice } from "@reduxjs/toolkit";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../../util/constans";

const name = "customer";

const initialState = {
  customers: [],
  form: {
    fields: {
      firstName: null,
      lastName: null,
      isActive: null,
      region: null,
    },
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  error: {
    message: "",
  },
  loading: {
    status: PENDING,
  },
  clean: {
    status: PENDING,
  },
};

const reducers = {
  createCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createCustomerResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.customers = payload;
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createCustomerError: (state, { payload }) => {
    state.create.status = ERROR;
    state.create.error = payload;
    state.form.fields = initialState.form.fields;
  },
  editCustomer: (state, { payload }) => {
    state.edit.status = REQUESTING;
  },
  setForm: (state, { payload }) => {
    const customer = state.customers.find((a) => a.id == payload);
    if (customer) {
      state.form.fields = customer;
    } else {
      state.error.message = `could not find customer with id: ${payload}`;
    }
  },
  editCustomerResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.customers = payload;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editCustomerError: (state, { payload }) => {
    state.edit.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  editCustomerStatus: (state, { payload }) => {
    state.edit = payload;
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
  resetFields: (state) => {
    state.create.status = PENDING;
    state.form.fields = initialState.form.fields;
  },

  loadCustomers: (state) => {
    state.loading.status = REQUESTING;
  },
  loadResults: (state, { payload }) => {
    state.loading.status = SUCCESS;
    state.customers = payload;
  },

  cleanCustomerStorage: (state) => {
    state.clean.status = REQUESTING;
  },

  cleanCustomerStorageResult: (state) => {
    state.loading.status = SUCCESS;
    state.customers = initialState.customers;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerResult,
  createCustomerError,
  setForm,
  editCustomer,
  editCustomerResult,
  editCustomerError,
  editCustomerStatus,
  setFormField,
  loadCustomers,
  loadResults,
  cleanCustomerStorage,
  cleanCustomerStorageResult,
  resetFields,
} = slice.actions;

export default slice.reducer;
