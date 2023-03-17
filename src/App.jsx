import "./App.css";
import { MyRoutes } from "./routes/routes";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <MyRoutes />
    </PokemonProvider>
  );
}

export default App;
