import { all } from "redux-saga/effects";
import { watchCreateCustomer } from "./create";
import { watchEditCustomer } from "./edit";
import { watchLoadCustomers } from "./load";
import { watchCleanCustomersAsynStore } from "./clear";

export default function* customer() {
  yield all([
    watchCreateCustomer(),
    watchEditCustomer(),
    watchLoadCustomers(),
    watchCleanCustomersAsynStore(),
  ]);
}
