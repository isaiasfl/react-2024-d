import ComponenteProps from "./components/Props/ComponenteProps";
import GitHubUsers from "./components/UseEffect/GitHubUserCardApi/GitHubUsers";
import ResizeListener from "./components/UseEffect/ResizeListener";
import UseEffectBasic from "./components/UseEffect/UseEffectBasic";
import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
import TodoListTailWindCss from "./components/UseState/TodoListTailWindCss";

function App() {
  return (
    <>
      {/* Ejemplos básicos de React */}
      <h1>Ejemplos básicos de React </h1>
      <hr />
      {/* <RegistrarFormulario /> */}
      <hr />
      {/* <TodoListTailWindCss /> */}
      {/* <ComponenteProps /> */}
      {/* <UseEffectBasic /> */}
      {/* <ResizeListener /> */}
      <GitHubUsers /> 
    </>
  );
}

export default App;
