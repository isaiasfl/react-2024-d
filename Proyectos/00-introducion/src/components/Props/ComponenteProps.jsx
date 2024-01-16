import { useState } from "react";

const Titulo = (props) => {
  return <h2 className="text-xl2 font-bold">{props.children}</h2>;
};

const Card = (props) => {
  // este es el componente HIJO.
  console.log(props);
  const { title, description, bgColor, count, setCount } = props;
  // setCount((prev) => prev + 10);
  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2">
        <Titulo count={count}>
          Soy el título y el count del padre es: {count}
        </Titulo>
      </p>
    </div>
  );
};

const ComponenteProps = () => {
  const [count, setCount] = useState(0);
  // este es el componente PADRE.
  return (
    <div
      className="flex flex-col justify-center 
  items-center h-screen
   bg-slate-400 gap-4"
    >
      <h1 className="text-xl font-bold">El count vale: {count}</h1>
      <Card
        title="Tarjeta1"
        description="Contenido de la tarjeta 1"
        bgColor="bg-green-200"
        count={count}
        setCount={count}
        t={setCount}
      >
        xxxxxxxxx
      </Card>
      <Card
        title="Tarjeta2"
        description="Contenido de la tarjeta 2"
        bgColor="bg-green-600"
      />
      <Card
        title="Tarjeta3"
        description="Contenido de la tarjeta 3"
        bgColor="bg-red-200"
      />
      <Card
        title="Tarjeta4"
        description="Contenido de la tarjeta 4"
        bgColor="bg-red-500"
      />
    </div>
  );
};

export default ComponenteProps;
