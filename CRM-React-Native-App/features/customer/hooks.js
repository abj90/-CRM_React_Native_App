import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormField,
  createCustomer,
  editCustomer,
  setForm,
  loadCustomers,
  cleanCustomerStorage,
} from "./reducers";
import { PENDING } from "../../util/constans";

export const useGetCustomersByRegion = (regionId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  const customerList = useSelector((state) => {
    return state.customer.customers;
  });

  const customerListFilteredByRegion = customerList.filter(
    (item) => item.region.id == regionId
  );

  return customerListFilteredByRegion;
};

export const useCreateCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispating CREATE_CUSTOMER action");
      dispatch(createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerId) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(editCustomer(customerId));
    },
  };
};

export const useUpdateField = (customerId) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (customerId && status === PENDING) {
      dispatch(setForm(customerId));
    }
  }, [customerId, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(setFormField({ field, value }));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useCleanAsncStorage = () => {
  const dispatch = useDispatch();

  return {
    onCleanAsyncStorage: () => {
      dispatch(cleanCustomerStorage());
    },
  };
};
