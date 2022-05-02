import { useRouter } from "next/router";
import { useForm } from "hooks/useForm";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { Form } from "ui/form";
import { Input } from "ui/input";

export const HomeForm = () => {
  const [{ query }, handleChage] = useForm({ query: "" });

  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();

    router.push(`/search?q=${query}`);
  };

  return (
    <Form onSubmit={handleSearch}>
      <>
        <div style={{ textAlign: "center" }}>
          <h3>El mejor</h3>
          <h3>e-commerce</h3>
        </div>

        <Input
          label="query"
          showLabel={false}
          value={query}
          onChange={handleChage}
          placeholder="Camisa"
        />

        <SubmitBtn color="blue" text="Buscar" style={{ color: "white" }} />
      </>
    </Form>
  );
};
