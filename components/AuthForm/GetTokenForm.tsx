import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "ui/form";
import { Input } from "ui/input";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { Error } from "ui/error";
import { fetcher } from "utils/fetcher";
import { capitalizeWord } from "utils/capitalizeWord";
import { Loader } from "ui/loader";

type GetTokenFormProps = {
  handleChange: (any: any) => any;
  values: any;
};

export const GetTokenForm = ({ values, handleChange }: GetTokenFormProps) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const errs = [];

    const { email, code } = values;

    if (code.length === 0) {
      errs.push("Coloca tu codigo de verificacion");
    }

    if (code.length < 5 && code.length !== 0) {
      errs.push("El codigo debe tener 5 caracteres");
    }

    if (errors.length === 0) {
      const url = "https://m9-desafio-jous.vercel.app/api/auth/token";
      const { token, msg } = await fetcher(url, "POST", { email, code });

      if (msg) {
        const capitalizedError = capitalizeWord(msg);
        setErrors([capitalizedError]);
        setIsLoading(false);
      } else {
        localStorage.setItem("token", token);

        router.push("/");
      }
    } else {
      setErrors(errs);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSignIn}>
      <>
        <h3 style={{ textAlign: "center" }}>Código</h3>

        {errors.map((err) => (
          <Error key={err} text={err} />
        ))}

        <Input
          autoFocus
          label="code"
          showLabel={false}
          placeholder="12345"
          value={values["code"]}
          onChange={handleChange}
        />

        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "400",
            margin: "20px 0",
          }}
        >
          Te enviamos un codigo a tu email
        </p>

        {isLoading ? <Loader /> : <SubmitBtn color="yellow" text="Ingresar" />}
      </>
    </Form>
  );
};
