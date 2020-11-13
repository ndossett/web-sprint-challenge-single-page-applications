import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import pizzaSchema from '../validation/pizzaSchema'

const initialValues = {
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    pineapple: false,
    special:'',
    // originalRed: false,
    // garlic: false,
    // bbq: false,
    // alfredo: false,
}

const initialErrors = {
    name: '',
    size: '',
}

export function Pizza() {
    const [values, setValues] = useState(initialValues)

    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)

    const onSubmit = (evt) => {
        evt.preventDefault()
        const newPizza = {
            name: values.name.trim(),
            special:values.special.trim(),
            size: values.size,
            toppings: ['pepperoni', 'sausage', 'mushroom', 'pineapple'].filter(item => values[item])
        }
        console.log(newPizza)
        setValues(initialValues)
    }

    const inputChange = (name, value) => {
        yup
        .reach(pizzaSchema, name)
        .validate(value)
        .then(() => {
            setErrors({...errors, [name] : ""})
        })
        .catch((err) => {
            setErrors({...errors, [name] : err.errors[0]})
        })
        setValues({...values, [name] : value})
    }

    const onChange = (evt) => {
        const { name, value, checked, type} = evt.target
        const correctValue = type === 'checkbox' ? checked : value
        inputChange(name, correctValue)
    }

    useEffect(() => {
        pizzaSchema.isValid(values).then((valid) => {
            setDisabled(!valid)
            console.log(valid)
        })
    }, [values])


    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <nav>
                    <ul>
                        <a href='/'>Home</a>
                    </ul>
                </nav>
                <h2>Build Your Own Pizza</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                {/* //text input */}
                <label>
                    Name 
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                
                {/* Drop-down */}
                <label>
                    Choice of Size
                    <select onChange={onChange} value={values.size} name="size">
                        <option value=''>- Select an option -</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='XL'>Extra-Large</option>
                    </select>
                </label>
            </div>

            {/* <div className='form-group radio-bts'>
                Radio Buttons
                <label>
                    Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='Original Red'
                        checked={values.sauce === 'Original Red'}
                        onChange={onChange}
                    /> 
                </label>

                <label>
                    Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='Garlic Ranch'
                        checked={values.sauce === 'Garlic Ranch'}
                        onChange={onChange}
                    /> 
                </label>

                <label>
                    BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='BBQ Sauce'
                        checked={values.sauce === 'BBQ Sauce'}
                        onChange={onChange}
                    /> 
                </label>

                <label>
                    Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='Alfredo'
                        checked={values.sauce === 'Alfredo'}
                        onChange={onChange}
                    /> 
                </label>
            </div> */}

            <div className='form-group checkboxes'>
                <h4>Add Toppings</h4>
                {/* Checkboxes */}
                <label>
                    Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>

                <label>
                    Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>

                <label>
                    Mushrooms
                    <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>

                <label>
                    Pineapple
                    <input
                    type='checkbox'
                    name='pineapple'
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>

                <label>
                    Special instructions 
                    <input 
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                    />
                </label>
            </div>
            <button disabled={disabled} type='submit'>Submit</button>
        </form>
    )
}
