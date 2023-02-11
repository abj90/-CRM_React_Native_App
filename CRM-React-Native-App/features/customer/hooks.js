import { useSelector, useDispatch } from "react-redux";
import { setFormField, createCustomer } from "./reducers";

export const useGetCustomersByRegion = (regionId) => {
  const customerList = useSelector((state) => {
    return state.customer.customers;
  });

  const customerListFilteredByRegion = customerList.filter(
    (item) => item.regionId == regionId
  );
  return { customerListFilteredByRegion };
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

export const useUpdateField = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.form.fields);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);
      return dispatch(setFormField({ field, value }));
    },
  };
};
