import AppFormCheckboxInput from "./form/AppFormCheckboxInput.jsx";

function Plan({plan}) {
  const formatDate = (date) => {
    return new Date(date).toString().slice(0,21);
  }
  return <div className={`task ${plan.isCompleted && "done"}`}>
    <p>{plan.title}</p>
    <p>{formatDate(plan.deadline)}</p>
    <AppFormCheckboxInput isChecked={plan.isCompleted}/>
  </div>
}

export default Plan;