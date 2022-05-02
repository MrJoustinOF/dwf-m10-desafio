import { useForm } from "hooks/useForm";
import { useState } from "react";
import { GetTokenForm } from "./GetTokenForm";
import { SendCodeForm } from "./SendCodeForm";

export const AuthForm = () => {
  const [codeHasBeenSent, setCodeHasBeenSent] = useState(false);

  const [values, handleInputChange] = useForm({ email: "", code: "" });

  return codeHasBeenSent ? (
    <GetTokenForm values={values} handleChange={handleInputChange} />
  ) : (
    <SendCodeForm
      setCodeAsSent={setCodeHasBeenSent}
      values={values}
      handleChange={handleInputChange}
    />
  );
};
