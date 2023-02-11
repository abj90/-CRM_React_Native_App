import { createSlice } from "@reduxjs/toolkit";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../../util/constans";

const name = "customer";

const initialState = {
  customers: [],
  form: {
    fields: {
      firstName: "",
      lastName: "",
      isActive: "",
      regionId: "",
    },
  },
  create: {
    status: PENDING,
  },
  edit: {
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
  },
  createCustomerError: (state, { payload }) => {
    state.create.status = ERROR;
    state.create.error = payload;
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
  setFormField,
} = slice.actions;

export default slice.reducer;
