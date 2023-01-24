import React, { useState } from "react";

const Form = () => {
  const [showcomp, setshowcomp] = useState(false);

  const ClickHandler =()=>{
    setshowcomp((prevValue)=>{return !prevValue})
  }

  const [state, setState] = useState({
    Name: "",
    Department: "",
    Rating: "",
    employees: [],
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const Back =()=>{
      setshowcomp(false)
  }

  const submitForm = (e) => {
    e.preventDefault();
    const empObj = {
      Name: state.Name,
      Department: state.Department,
      Rating: state.Rating,
    };
    const arr = state.employees;
    arr.push(empObj);
    setState({ ...state, employees: arr });
    ClickHandler();
  };

  if (showcomp) {
    return (
      <div>
        <div className="feedback-div">
          {state.employees.map((value, index) => {
            return (
              <span key={index}>
                Name: {value.Name} | Department: {value.Department} | Rating: {value.Rating}{" "}
              </span>
            );
          })}
        </div>
        <button onClick={Back}>Go Back</button>
      </div>
    )
  }
else{
  return (
    <div>
      <div className="form-container">
        <form>
          <div className="labels">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="Name"
              onChange={changeHandler}
              value={state.Name}
              placeholder="Enter your Name"
              ></input>
          </div>
          <div className="labels">
            <label htmlFor="Dapartment">Department:</label>
            <input
              type="text"
              name="Department"
              onChange={changeHandler}
              value={state.Department}
              placeholder='Enter Your Department'
              ></input>
          </div>
          <div className="labels">
            <label htmlFor="Rating">Rating:</label>
            <input
              type="number"
              name="Rating"
              onChange={changeHandler}
              value={state.Rating}
              placeholder="Give Your Rating"
              max="10"
              ></input>
          </div>
          <button onClick={submitForm} >SUBMIT</button>
          {/*Default type of button is that of type submit. Evertything gets flushed out when we click the button. we can use preeventDefault() fnct*/}
        </form>
      </div>

     
    </div>
  );
};
}

export default Form;
