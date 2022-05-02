type ErrorProps = {
  text: string;
};

export const Error = ({ text }: ErrorProps) => {
  return (
    <h6
      style={{
        background: "#fee2e2",
        borderColor: "#b91c1c",
        borderWidth: "0",
        borderLeftWidth: "8px",
        borderStyle: "solid",
        color: "#b91c1c",
        textAlign: "center",
        fontWeight: "normal",
        margin: "1rem auto",
        padding: "1rem 0",
        width: "100%",
      }}
    >
      {text}
    </h6>
  );
};
