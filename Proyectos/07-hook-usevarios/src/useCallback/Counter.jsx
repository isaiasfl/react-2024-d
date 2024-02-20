import { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <div>
        <h2>Valor del contador: {count}</h2>
        <button onClick={handleIncrement}>Aumentar en 1</button>
      </div>
    </>
  );
};

export default Counter;
