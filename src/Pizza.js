import React from 'react'

export default function Pizza(props) {

    const { values, submit, change, disabled, errors } = props

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (evt) => {
        const { name, value, checked, type} = evt.target
        const correctValue = type === 'checkbox' ? checked : value
        change(name, correctValue)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build Your Own Pizza</h2>

                <button disabled={disabled}>Add to Order</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.topping}</div>

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

            <div className='form-group radio-bts'>
                {/* Radio Buttons */}
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
            </div>

            <div className='form-group checkboxes'>
                <h4>Add Toppings</h4>
                {/* Checkboxes */}
                <label>
                    Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.topping}
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
            </div>
        </form>
    )
}



