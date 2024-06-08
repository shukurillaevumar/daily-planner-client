import Plan from "../components/Plan.jsx";
import '../assets/styles/home.css'
import AppFormInputText from "../components/form/AppFormInputText.jsx";
import AppFormDataTime from "../components/form/AppFormDataTime.jsx";
import {useState} from "react";

function Home() {
  const [plandData, setPlanData] = useState(
    [
      {
        title: 'Do the dishes',
        deadline: 1721478001000,
        isCompleted: true
      },
      {
        title: 'Read a book for 120 minutes',
        deadline: 1724132401000,
        isCompleted: false
      }
    ]
  );
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(0);
  const handleChange = (field, data) => {

        if(field === 'title') {
          setTitle(data);
        }
        if(field === 'deadline') {
          setDeadline(data);
        }
  }
  return <div className="app-home-page">
    <h2>My Daily Plans</h2>
    <div className="plans-create">
      <AppFormInputText value={title} onChangeTitle={handleChange}/>
      <AppFormDataTime value={deadline} onChangeDeadline={handleChange}/>
      <button>Create</button>
    </div>
    <div className="plans">
      {plandData.map((plan, index) => (
        <Plan
          key={index}
          plan={plan}
        />
      ))}
    </div>
  </div>
}

export default Home;