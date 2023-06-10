"use client";

interface Props {
  text: string;
  click: () => void;
}

const Button: React.FC<Props> = ({ text, click }) => {
  return (
    <button
      onClick={click}
      onMouseOver={(e) => {
        //@ts-ignore
        e.target.textContent = "click here";
      }}
      onMouseLeave={(e) => {
        //@ts-ignore
        e.target.textContent = text;
      }}
      className="border-primary border bg-opacity-100 px-6 py-3 rounded-xl text-3xl font-thin hover:content-click hover:bg-primary transition ease-in"
    >
      {text}
    </button>
  );
};

export default Button;
