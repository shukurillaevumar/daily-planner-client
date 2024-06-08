import '../../assets/styles/checkbox.css'
import {useState} from "react";
function AppFormCheckboxInput({isChecked}) {
  const [checked, setChecked] = useState(isChecked);
  return <div className="appFormCheckboxInput">
    <input
      type="checkbox"
      checked={checked}
      disabled={isChecked}
      onChange={() => setChecked(!checked)}
    />
  </div>
}

export default AppFormCheckboxInput;