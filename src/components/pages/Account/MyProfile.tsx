import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-router-dom";

import editProfileProps from "../../../models/editProfile";
import editProfileSchema from "../../../form-schema/editProfile";
import FormInput from "../../UI/Input/FormInput";
import FillButton from "../../UI/Button/FillButton";

const EditProfileForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<editProfileProps>({
    resolver: yupResolver<editProfileProps>(editProfileSchema),
  });

  const submitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="font-semibold text-red-900 text-sm md:text-base mb-2 md:mb-4">
        Edit Profile Form
      </h1>

      <Form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <FormInput
            label="First Name"
            placeholder="Md"
            name="firstName"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
          />
          <FormInput
            label="Last Name"
            placeholder="Rimel"
            name="lastName"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <FormInput
            label="Email"
            placeholder="example@gmail.com"
            name="email"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
          />
          <FormInput
            label="Address"
            placeholder="Kingston, 5236, United State"
            name="address"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
          />
        </div>

        <div className="flex items-center flex-col">
          <FormInput
            label="Password Changes"
            placeholder="Current Password"
            name="password"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
            type="password"
          />
          <FormInput
            name="newPassword"
            placeholder="New Password"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
            type="password"
          />
          <FormInput
            name="confirmPassword"
            placeholder="Confirm New Password"
            errors={errors}
            register={register}
            className="w-full"
            labelIsblack={true}
            inputStyle="mb-2 sm:mb-4"
            type="password"
          />
        </div>

        <div className="flex justify-end text-[10px] sm:text-[12px] md:text-sm lg:text-[16px] gap-4 lg:gap-6">
          <button type="button" className="font-medium">
            Cancel
          </button>
          <FillButton type="submit" text="Save Changes" />
        </div>
      </Form>
    </div>
  );
};

export default EditProfileForm;