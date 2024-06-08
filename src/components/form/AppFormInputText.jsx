import '../../assets/styles/inputText.css'
import {useState} from "react";

function AppFormInputText({value, onChangeTitle}) {
  const [text, setText] = useState(value)
  const onChangeHandler = (e) => {
    setText(e.target.value);
    onChangeTitle('title',e.target.value)
  }
  return <div className="appFormInputText">
    <input type="text" value={text} onChange={onChangeHandler}/>
  </div>

}

export default AppFormInputText;