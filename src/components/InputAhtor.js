import React, { useState } from "react";

const InputAuthor = ({newAuthor}) => {

    const [info, setInfo] =useState({
        name:"",
        lastName:"",
        nationality:"",
        biography:"",
        gender:"",
        age:0
    });
    const [flag, setFlag]= useState(false)

    const {name, lastName, nationality, biography, age} = info;

    const handleInputChange=(event)=>{
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })        
    }

    const onFormSubmit=(event)=>{
        event.preventDefault()
        newAuthor(info)
    }
    const showForm =()=>{
        setFlag(!flag);
        console.log(flag)
    }

  return (
    <div className="ui accordion">
      <div className={flag? "active title": "title"} onClick={showForm}>
        <i className="dropdown icon"></i>
        Submit an Author
      </div>
      <div className={flag? "active content": "content"}>

      <form onSubmit={onFormSubmit} className="ui form">
        <div>
          <div className="field ">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="field ">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="field ">
            <label htmlFor="">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={nationality}
              onChange={handleInputChange}
            />
          </div>
          <div className="field ">
            <label htmlFor="">Biography</label>
            <input
              type="text"
              name="biography"
              value={biography}
              onChange={handleInputChange}
            />
          </div>
          <div className="field ">
            <label htmlFor="">Gender</label>
            <select
              name="gender"
              id=""
              onChange={handleInputChange}
              className="ui fluid dropdown"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input type="submit" className="ui button primary" value="Submit" />
      </form>
      </div>
    </div>
  );
};

export default InputAuthor;
