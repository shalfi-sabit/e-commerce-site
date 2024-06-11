import { useState } from "react";
import { Form } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Wrapper from "../../UI/Wrapper";
import CheckoutForm from "./CheckoutForm";
import checkoutSchema from "../../../form-schema/checkoutSchema";
import FillButton from "../../UI/Button/FillButton";
import CheckoutSummary from "./CheckoutSummary";
import BreadCrumb from "../../shared/BreadCrumb";
import cartItems from "../../../data/dummyCartItems";
import { CheckoutFormData } from "../../../models/checkoutFormData";
import applicableCouponCodes from "../../../data/applicableCouponCodes";
import { useDispatch } from "react-redux";
import { snackbarActions } from "../../../redux-store/slices/snackbarSlice";

type CouponCodes = "RATUL30" | "SAKIB20" | "SABIT15";

const Checkout: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
  });
  const dispatch = useDispatch();
  const [saveInformation, setSaveInformation] = useState<boolean>(false);
  const [isCashSelected, setIsCashSelected] = useState<boolean>(true);
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponButtonDisabled, setIsCouponButtonDisabled] = useState(false);
  const [isPlaceOrderButtonDisabled, setIsPlaceOrderButtonDisabled] =
    useState(false);

  const initialSubtotal = cartItems.reduce((accumulator, cartItem) => {
    return parseFloat(
      (accumulator + cartItem.price * cartItem.count).toFixed(2)
    );
  }, 0);

  const [subTotal, setSubTotal] = useState(initialSubtotal);

  const shippingCharge = 30;

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    const outputData = {
      data,
      cartItems,
      saveInformation: saveInformation
        ? "Save Information"
        : "Don't save information",
      shippingCharge: shippingCharge,
      subTotal: subTotal,
      paymentMethod: isCashSelected ? "Cash" : "Bank",
      total: subTotal + shippingCharge,
    };

    console.log(outputData);

    if (saveInformation && Object.keys(errors).length === 0) {
      localStorage.setItem("billingDetails", JSON.stringify(data));
    }
    setIsPlaceOrderButtonDisabled(true);
    dispatch(
      snackbarActions.handleSnackbarOpen({
        severity: "success",
        message: "Your Order has been placed",
      })
    );
  };

  const handleApplyCouponCode = () => {
    if (applicableCouponCodes[couponCode as CouponCodes]) {
      setSubTotal(
        (prevSubTotal) =>
          prevSubTotal -
          (prevSubTotal / 100) *
            applicableCouponCodes[couponCode as CouponCodes]
      );

      setIsCouponButtonDisabled(true);
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "success",
          message: "Coupon code applied successfully",
        })
      );
    } else {
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "error",
          message: "Invalid coupon code",
        })
      );
    }
  };

  return (
    <>
      <BreadCrumb />
      <Wrapper className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <h1 className="mb-5 text-[20px] md:text-[25px] lg:text-3xl font-medium">
          Billing Details
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between flex-col sm:flex-row gap-10 sm:gap-0"
        >
          <CheckoutForm
            register={register}
            errors={errors}
            saveInformation={saveInformation}
            setSaveInformation={setSaveInformation}
            className="sm:w-[42%] lg:w-[40%]"
          />
          <div className="sm:w-[53%] lg:-w[50%] flex flex-col gap-2 md:gap-4 lg:gap-6">
            <CheckoutSummary
              isCashSelected={isCashSelected}
              setIsCashSelected={setIsCashSelected}
              subTotal={subTotal}
              shippingCharge={shippingCharge}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              handleApplyCouponCode={handleApplyCouponCode}
              isCouponButtonDisabled={isCouponButtonDisabled}
            />
            <FillButton
              isPlaceOrderButtonDisabled={isPlaceOrderButtonDisabled}
              type="submit"
              text="Place Order"
              className="w-fit"
            />
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

export default Checkout;
