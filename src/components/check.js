import React, { useState } from 'react'

import Loader from './loader'


const Check = () => {

  let [names, setnames] = useState([])
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const handleSubmit = async () => {
    setLoading2(true)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/add_name`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ f_name: fName, l_name: lName })
    })
    const data = await response
    data ? (setLoading2(false)) : setLoading2(true)
    setFName('')
    setLName('')
    // Optionally update the state or handle the response
  }
  return (
    <div className='container'>
      <div  className='mb-3'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
          <input type="text" name='f_name' className="form-control" 
          value={fName} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
          <input type="text" name='l_name' className="form-control" 
          value={lName} id="exampleInputPassword1" onChange={(e) => setLName(e.target.value)} />
        </div>
        <button  className="btn btn-primary w-25" onClick={handleSubmit}>{loading2 ? <Loader/> : "Submit"}</button>
      </div>


      <button className='btn btn-success w-25' onClick={async () => {
        setLoading(true)
        let response = await fetch(`${process.env.REACT_APP_API_URL}/check_name`)
        let data = await response.json()
        data ? setLoading(false) : setLoading(true)
        setnames(data)
      }}>{loading ? <Loader/> : "Request"} </button>
      
      <div className="form-floating m-3" >
        {names.map((item,index) => (
                    <textarea className="form-control mb-2" placeholder="Here are the data" id="floatingTextarea2" 
                    value= {`${index + 1}. ` + item['f_name'] + " " + item['l_name']} readOnly
                     key={"key_"+item['f_name']}></textarea>
                ))}
      </div>

    </div>
  )
}

export default Check