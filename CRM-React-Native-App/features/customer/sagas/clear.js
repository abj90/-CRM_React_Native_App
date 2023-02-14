import { put, takeLatest, delay } from "redux-saga/effects";
import { clear } from "../../../util/async-storage";
import { cleanCustomerStorage, cleanCustomerStorageResult } from "../reducers";

export function* watchCleanCustomersAsynStore() {
  yield takeLatest(
    cleanCustomerStorage.toString(),
    takeCleanCustomersAsynStore
  );
}

export function* takeCleanCustomersAsynStore() {
  try {
    yield clear();

    yield delay(500);

    yield put(cleanCustomerStorageResult());
  } catch (error) {
    console.log("there was a error cleaning the storage");
  }
}
