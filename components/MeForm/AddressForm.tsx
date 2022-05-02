import { useEffect, useState } from "react";
import { useForm } from "hooks/useForm";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { Error } from "ui/error";
import { Form } from "ui/form";
import { Input } from "ui/input";
import { Loader } from "ui/loader";
import { fetcher } from "utils/fetcher";

type AddressFormProps = {
  user: any;
};

export const AddressForm = ({ user }: AddressFormProps) => {
  const [values, handleChange, setValues] = useForm({
    // Sorry if this is not how you locate at your country, but this is how we do it in Ecuador
    pais: "",
    ciudad: "",
    calle: "",
    avenida: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setValues({
      pais: user?.address.country,
      ciudad: user?.address.city,
      calle: user?.address.street,
      avenida: user?.address.avenue,
    });
  }, [user]);

  const handleAddressSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const {
      pais: country,
      ciudad: city,
      calle: street,
      avenida: avenue,
    } = values;

    const errs: string[] = [];

    if (
      country.length === 0 ||
      city.length === 0 ||
      street.length === 0 ||
      avenue.length === 0
    ) {
      errs.push("Todos los campos son obligatorios");
    }

    if (errs.length === 0) {
      const url = "https://m9-desafio-jous.vercel.app/api/me/address";
      await fetcher(url, "PATCH", {
        address: {
          country,
          city,
          street,
          avenue,
        },
      });

      setIsDone(true);
    } else {
      setErrors(errs);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleAddressSubmit}>
      <>
        <h3>Dirección</h3>

        {errors.map((err) => (
          <Error key={err} text={err} />
        ))}

        <Input label="pais" value={values.pais} onChange={handleChange} />
        <Input label="ciudad" value={values.ciudad} onChange={handleChange} />
        <Input label="calle" value={values.calle} onChange={handleChange} />
        <Input label="avenida" value={values.avenida} onChange={handleChange} />

        {isDone ? (
          <h5 style={{ textAlign: "center" }}>Guardado</h5>
        ) : isLoading ? (
          <Loader />
        ) : (
          <SubmitBtn color="yellow" text="Guardar" />
        )}
      </>
    </Form>
  );
};
