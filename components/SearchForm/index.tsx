import { useRouter } from "next/router";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { useForm } from "hooks/useForm";

import styles from "styles/Form.module.css";

type SearchFormProps = {
  mobile?: boolean;
};

type BaseFormProps = {
  mobile?: boolean;
};

const BaseForm = ({ mobile }: BaseFormProps) => {
  const router = useRouter();

  const [{ query }, handleChange] = useForm({ query: router.query.q || "" });

  const handleSearch = (e: any) => {
    e.preventDefault();

    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={mobile ? styles.searchForm__mobile : styles.searchForm}
    >
      <input
        name="query"
        className={mobile ? styles.input : styles.searchForm_input}
        value={query}
        onChange={handleChange}
        style={{
          background: "#000",
          color: "#fff",
          borderColor: "#fff",
        }}
      />

      <SubmitBtn
        color="yellow"
        text="Buscar"
        style={{ margin: mobile ? "10px 0" : "0 10px" }}
      />
    </form>
  );
};

export const SearchForm = ({ mobile = false }: SearchFormProps) => {
  const { pathname } = useRouter();

  return pathname !== "/" ? mobile ? <BaseForm mobile /> : <BaseForm /> : <></>;
};
