import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FillButton from "../../UI/Button/FillButton";
import AuthInput from "../../UI/AuthInput";
import AuthImage from "../../../assets/images/sideImage.png";
import Wrapper from "../../UI/Wrapper";
import SignInProps from "../../../models/signinProps";
import SignInSchema from "../../../form-schema/signin";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver<SignInProps>(SignInSchema),
  });

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <Wrapper className=" flex justify-around w-3/4  my-10">
      <img
        src={AuthImage}
        alt="hello"
        className="w-1/2 hidden lg:block rounded-md object-cover"
      />
      <div className="w-96 my-auto">
        <div className="w-full flex flex-col items-start gap-4 mb-12 ">
          <h1 className="text-[22px] sm:text-[32px] lg:text-4xl leading-[10px] sm:leading-[30px] lg:leading-[40px] font-bold">
            Log in to Exclusive
          </h1>
          <p className="text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px] font-bold">
            Enter your details below
          </p>
        </div>
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthInput
            placeholder="Username"
            type="text"
            name="username"
            register={register}
            errors={errors}
          />
          <AuthInput
            placeholder="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
          />
          <div className="flex mt-6">
            <FillButton text="Log in" className="w-full mb-2" />
            <button
              className=" bg-white-900 ml-2 text-red-900 mb-2 font-semibold text-[12px] 
            sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200"
            >
              Forgot Password?
            </button>
          </div>
        </form>
        <p className="mx-auto text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px] mt-8">
          Don't have an account?{" "}
          <NavLink to="/signup" className="underline">
            <strong>Sign up</strong>
          </NavLink>
        </p>
      </div>
    </Wrapper>
  );
};

export default SignIn;
