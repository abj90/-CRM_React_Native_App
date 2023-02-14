import { put, select, takeLatest, delay } from "redux-saga/effects";
import {
  createCustomer,
  createCustomerResult,
  createCustomerError,
} from "../reducers";
import { set } from "../../../util/async-storage";
import { CUSTOMERS_KEY } from "../../../util/constans";

export function* watchCreateCustomer() {
  yield takeLatest(createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
  console.log("Starting fetch create request to API");
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customerList = yield select((state) => state.customer.customers);

    const newCustomer = { ...fields, id: customerList.length + 1 };

    // mocking api call
    yield delay(500);
    const result = [...customerList, newCustomer];

    yield set(CUSTOMERS_KEY, result);

    yield put(createCustomerResult(result));
  } catch (err) {
    yield put(createCustomerError(err.toString()));
  }
}
