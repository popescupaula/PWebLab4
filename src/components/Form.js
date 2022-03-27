import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Name</label>
                <input type='text'></input>
                <label>Surname</label>
                <input type='text'></input>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
