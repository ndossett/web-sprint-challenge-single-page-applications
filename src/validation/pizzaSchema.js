import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(3, 'name must be 3 characters long'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large', 'Extra-Large'], 'Choose a size please'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),

    special: yup.string()

})