import AuthInput from "src/components/AuthInput/AuthInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signin = () => {
  const { handleSubmit, control } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle signin logic here
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          name="email"
          control={control}
          label="Email"
          type="text"
          placeholder="Enter your email"
          rules={{ required: "Email is required" }}
        />
        <AuthInput
          name="password"
          control={control}
          label="Password"
          type="password"
          placeholder="Enter your password"
          rules={{ required: "Password is required" }}
          showPasswordToggle={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
