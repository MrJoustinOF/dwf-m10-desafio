import { Form } from "ui/form";
import { Input } from "ui/input";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { Error } from "ui/error";
import { useState } from "react";
import { fetcher } from "utils/fetcher";
import { Loader } from "ui/loader";

type SendCodeFormProps = {
  setCodeAsSent: (any: any) => any;
  handleChange: (any: any) => any;
  values: any;
};

export const SendCodeForm = ({
  setCodeAsSent,
  values,
  handleChange,
}: SendCodeFormProps) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const errs = [];

    const { email } = values;

    if (!/^\w+@\w+\.\w+$/.test(email)) {
      errs.push("El email es invalido");
    }

    if (errs.length === 0) {
      const url = "https://m9-desafio-jous.vercel.app/api/auth";
      await fetcher(url, "POST", { email });

      setCodeAsSent(true);
    } else {
      setErrors(errs);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <>
        <h3 style={{ textAlign: "center" }}>Ingresar</h3>

        {errors.map((err) => (
          <Error key={err} text={err} />
        ))}

        <Input
          autoFocus
          label="email"
          value={values["email"]}
          onChange={handleChange}
        />

        {isLoading ? <Loader /> : <SubmitBtn color="yellow" text="Continuar" />}
      </>
    </Form>
  );
};
