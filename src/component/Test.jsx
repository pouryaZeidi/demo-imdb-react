import React, { useState } from 'react'

const Test = () => {
    const [state,setState] = useState({name:'',family:'',wife:''})

    const changeHandler = (event) => {
        const {name,value} = event.target
        setState({...state,[name]:value})
        }
    console.log(state)
        
  return (
    <div>
        <label htmlFor="name">
            <span>name</span>
            <input id='input1' className='class-input1' name='name' value={state.name} onChange={changeHandler} />
        </label>
        <label htmlFor="family">
            <span>family</span>
            <input name='family' value={state.family} onChange={changeHandler}/>
        </label>
        <label htmlFor="wife">
            <span>wife</span>
            <input name='wife' value={state.wife} onChange={changeHandler}/>
        </label>
    </div>
  )
}

export default Test