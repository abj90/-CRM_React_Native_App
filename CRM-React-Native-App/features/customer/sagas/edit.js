import { put, select, takeLatest, delay } from "redux-saga/effects";
import {
  editCustomer,
  editCustomerResult,
  editCustomerError,
} from "../reducers";
import { set } from "../../../util/async-storage";
import { CUSTOMERS_KEY } from "../../../util/constans";

export function* watchEditCustomer() {
  yield takeLatest(editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action) {
  console.log("Starting fetch edit request to API");
  const customerId = action.payload;

  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customerList = yield select((state) => state.customer.customers);

    const result = customerList.map((customer) => {
      return customer.id !== customerId ? customer : fields;
    });

    // pretend call to API
    yield delay(500);

    yield set(CUSTOMERS_KEY, result);

    yield put(editCustomerResult(result));
  } catch (err) {
    yield put(editCustomerError(err.toString()));
  }
}
