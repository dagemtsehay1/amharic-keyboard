import { useState } from "react";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Keyboard from "./components/keyboard.js";
import TextField from "./components/textField.js";

function App() {
  const [text, setText] = useState("");

  const handelChangesFromKeyboard = (e)=>{
    setText(e.target.value);
  }

  const handelChangesFromMyKeyboard = (e) =>{
    setText(text+e);
  }
  return (
    <div>
      <div className="App">
        <Header/>
        <TextField text={text} onChange={handelChangesFromKeyboard}/>
        <Keyboard onChange={handelChangesFromMyKeyboard}/>
      </div>
      <div className="sized-box"></div>
      <Footer/>
    </div>
  );
}

export default App;
