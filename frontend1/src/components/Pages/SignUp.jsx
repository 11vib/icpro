import React, { useState } from "react";
import Axios from "axios";
import './SignUP.css'
const SignUp = () => {
    const [data, setData] = useState({ Email: "",Designation:""});
    const change = (e) => {
        let name1 = e.target.name;
        let val = e.target.value;
        setData({ ...data, [name1]: val });
    };
    const submit = (e) => {
        Axios.post("http://localhost:3500/Login", { data });
        alert("Data has been successfully inserted👍");
    };
    return (
        <div className="signup">
        <div className="Sign">
            <h1 className="h">Login</h1>
            <hr></hr>
            <form onSubmit={submit}>
                <label>Email &emsp;:&emsp;</label>
                <input
                    type="text"
                    name="Email"
                    value={data.Email}
                    onChange={change}
                ></input>
                <br></br>
                <br></br>
                <label>Designation &emsp;:&emsp;</label>
                <select name="designation">
                    <option
                        name="Stu"
                        value={data.Designation}
                        onChange={change}
                    >
                        Student
                    </option>
                    <option
                        name="prof"
                        value={data.Designation}
                        onChange={change}
                    >
                        Professional
                    </option>
                </select>
                <br></br>
                <br></br>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
        </div>
    );
};

export default SignUp;
