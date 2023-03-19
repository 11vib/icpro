import React, { useState } from "react";
import Axios from "axios";
// import './App.css'
import './Login.css'
const Login = () => {
  const [data, setData] = useState({ Name: "", Email: "", Designation: "" });


  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name1]: val });
  };

  const submitHandler = () => {
    Axios.post("http://localhost:3500/Register", { data });
    alert("Data has been successfully inserted👍");
  };
  return (
    <div className="w">
      <div className="B">
        <h1 className="h"><u><b>Sign Up</b></u></h1>
        <hr />
        <form onSubmit={submitHandler}>
          <label>Name &emsp;:&emsp;</label>
          <input
            type="text"
            name="Name"
            value={data.Name}
            onChange={changeHandler}
          ></input>
          <br></br><br></br>
          <label>Email &emsp;:&emsp;</label>
          <input
            type="text"
            name="Email"
            value={data.Email}
            onChange={changeHandler}
          ></input>
          <br></br><br></br>
          <label for="designation">Designation &emsp;:&emsp;</label>
          <select name="designation">
            <option name="Stu" value={data.Designation} onChange={changeHandler}>Student</option>
            <option name="prof" value={data.Designation} onChange={changeHandler}>Professional</option>
          </select>
          <br></br><br></br>
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Login;