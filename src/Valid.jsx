import React, {useState} from 'react'
import './App.css'
function Valid() {
    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    let [value3, setValue3] = useState('')
    let [value4, setValue4] = useState('')
    let [inputed1,setInputed1] = useState(false)
    let [inputed2,setInputed2] = useState(false)
    let [inputed3,setInputed3] = useState(false)
    let [inputed4,setInputed4] = useState(false)
    let handle1 = (e)=>{
      setValue1(e.target.value)
    }
    let handle2 = (e)=>{
      setValue2(e.target.value)
    }
    let handle3 = (e)=>{
      setValue3(e.target.value)
    }
    let handle4 = (e)=>{
      setValue4(e.target.value)
    }
    let click = (e)=>{
      e.preventDefault()
      let all = [`${value1}`, `${value2}`,`${value3}`,`${value4}`]
      let isValid = true
      let allInputeds = [setInputed1,setInputed2,setInputed3,setInputed4]
      for (let i = 0; i < all.length; i++) {
        if (all[i]==='') {
          allInputeds[i](true)
          isValid= false
         
        }
        else{
          
          allInputeds[i](false)
        }
      }
    }
    return(
        <div className='wrapper'>
        <h1>Contact Us</h1>
        <form onSubmit={click}>
      <div className='each'>
      <label htmlFor=''>First Name *</label>
                <input type="text" name="fname"  value={value1} onChange={handle1} style={{borderColor:inputed1?'red':''}}/>
                {
                  inputed1?<p id='first'>required</p>:''
                }
                
      </div>
      <div className='each'>
      <label htmlFor="">Last Name *</label>
                <input type="text" name="lname" value={value2} onChange={handle2} style={{borderColor:inputed2?'red':''}}/>
                {
                  inputed2?<p id="last">required</p>:''
                }
                
      </div>
      <div className='each'>
      <label htmlFor="">Email *</label>
                <input type="email" name="email" value={value3} onChange={handle3} style={{borderColor:inputed3?'red':''}}/>
                {
                  inputed3?<p id="email">required</p>:''
                }
      </div>
      <div className="query">
                <label htmlFor="">Query Type *</label>
                <div className="rap">
                    <div className="genouter">
                <div className="gen">
                    <input type="radio" name="gen" id="genn" />
                    <label htmlFor="">General Enquiry</label>
                </div>
                <p id="gen"></p>
            </div>
                <div className="supouter">
                <div className="supp">
                    <input type="radio" name="sup" id="sopp" />
                    <label htmlFor="">Support Request</label>
                </div>
                <p id="supp"></p>
            </div>
            </div>
            </div>
            <div className="each">
                <label htmlFor="">Message *</label>
                <input type="text" name="message" value={value4} onChange={handle4} style={{borderColor:inputed4?'red':''}}/>
                {
                  inputed4?<p id="message">required</p>:''
                }
            </div>
            <div className="each">
                <input type="checkbox" />
                <label htmlFor="">I consent to being contacted by the team</label>
            </div>
            <input type="submit" value="Submit" className="btn"/>
      </form>
    </div>
    )
}
export default Valid