import React ,{useState, useEffect}from 'react';
import '../App.css'
import cartoon from '../images/cont7.png'
import axios from 'axios';

function Container7() {
const params=new URLSearchParams(window.location.search);
const ref_id=params.get('ref_id')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [refId, setRefId] = useState('');

    useEffect((e)=>{
        setRefId(ref_id)
    },[ref_id])

    const SubmitData=(e)=>{
        e.preventDefault();

        const user={
            name:name,
            email:email,
            referenceId:ref_id
        }
        console.log(user)
        axios.post("http://localhost:5000/users",{user})
        .then(res=>console.log(res))
    }

// const change1=(e)=>{
//     console.log(e.target.value);
// }

// const change2=(e)=>{
//     setEmail(e.target.value)
// }
   

  return( 
  <div className='container7'>
      <div className="container">
        <br/><br/>
          <div className="row">
              <h1 className='h1contact'>Join Me</h1>
              <div className="col-md-6 ">
                  <img src={cartoon} className='img-fluid container7-img' alt="" />
              </div>
              <div className="col-md-6 own-col mt-4 mb-4">
                  <form className='form' onSubmit={SubmitData}>
                      <label >Referral Link</label><br />
                      <input type="text" disabled id="ref_link" value={refId} /><br />
                      <label >Full Name</label><br />
                      <input type="text" id="name" onChange={(e)=>setName(e.target.value)} /><br />
                      <label >Email Address</label><br />
                      <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} /><br />
                     
                      <button type='submit'>Join Now</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Container7;
