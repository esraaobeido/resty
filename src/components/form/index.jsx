import './form.scss';
import { useState } from 'react';

function Form(props){
  const[input, setInput]=useState("")
  const[method, setMethod]= useState("get")
  const[textarea, setTextarea]=useState(false)
  const[data, setData]= useState({})

  let handleData=(e)=>{
    e.preventDefault()
    let obj= {
      name:e.target.value,
      preview: e.target.value
    }
    setData(obj)
  }

  let handleurlData=(e)=>{
    e.preventDefault()
    data.preview= e.target.value
  }

  let handleChange=(e)=>{
    setInput(e.target.value)   
  }

  let handleMethodChange=(e)=>{
    e.preventDefault()
    setMethod(e.target.id)
    if(e.target.id === "post" || e.target.id == "put"){
      setTextarea(true)
    }else{
      setTextarea(false)
    }
  }

    let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:method,
      url: input,
      data:data
    };
    props.handleApiCall(formData);
  }

  return(
    <>
        <form >
          <label >
            <span>URL: </span>
            <input onChange={handleChange} name='url' type='text' placeholder='enter your api here!' />
            <button type="submit" onClick={handleSubmit}>GO!</button>
          </label>
          <label className="methods">
          <button onClick={handleMethodChange} id="get">GET</button>
            <button onClick={handleMethodChange} id="post">POST</button>
            <button onClick={handleMethodChange} id="put">PUT</button>
            <button onClick={handleMethodChange} id="delete">DELETE</button>
          </label>
        {textarea && 
        <form > 
          <label >
            <span>Name </span>
            <input onChange={handleData} id='namee' type='text' />
          </label>
          <label >
            <span>Preview </span>
            <input onChange={handleurlData} id='urll' type='text' />
          </label>
          <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
      }
        </form>
    </>
  )
}
export default Form
