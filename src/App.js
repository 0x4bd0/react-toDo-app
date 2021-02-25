import Wrapper from "./components/wrapper";
import ListContextProvider from "./contexts/list";


function App() {
  return (
    <div className="App">
      <ListContextProvider>
          <Wrapper></Wrapper>
      </ListContextProvider>
    </div>
  );
}

export default App;
