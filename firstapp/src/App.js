import "./App.css";
import Header from "./companents/Header";
import PersonInfo from "./companents/PersonInfo";
function App() {
  return (
    <div>
      <Header/>
      <PersonInfo name="Ebubekir" age={19} />
      <PersonInfo name="Emir" age={21} />
      <PersonInfo name="Selin" age={18} />
      <PersonInfo name="Hasan" age={31} />
    </div>
  );
}

export default App;
