import { useEffect, useState } from "react";
import { Form } from "ui/form";
import { Input } from "ui/input";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { Error } from "ui/error";
import { Loader } from "ui/loader";
import { useForm } from "hooks/useForm";
import { fetcher } from "utils/fetcher";

type ProfileFormProps = {
  user: any;
};

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const [values, handleChange, setValues] = useForm({
    // Site UI is in spanish, thats why i had to write this fields like that
    // At sending data it will parsed in english
    nombre: "",
    apellido: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setValues({
      nombre: user?.name,
      apellido: user?.lastname,
    });
  }, [user]);

  const handleProfileSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const { nombre: name, apellido: lastname } = values;
    const errs: string[] = [];

    if (name.length === 0 || lastname.length === 0) {
      errs.push("Todos los campos son obligatorios");
    }

    if (name.length < 3 && name.length !== 0) {
      errs.push("Nombre debe tener al menos 3 caracteres");
    }

    if (lastname.length < 3 && lastname.length !== 0) {
      errs.push("Apellido debe tener al menos 3 caracteres");
    }

    if (errs.length === 0) {
      const url = "https://m9-desafio-jous.vercel.app/api/me";
      await fetcher(url, "PATCH", { name, lastname });

      setIsDone(true);
    } else {
      setErrors(errs);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleProfileSubmit}>
      <>
        <h3>Perfil</h3>

        {errors.map((err) => (
          <Error key={err} text={err} />
        ))}

        <Input
          autoFocus
          label="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
        <Input
          label="apellido"
          value={values.apellido}
          onChange={handleChange}
        />

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
