    import { TextField } from '@mui/material'
    import PropTypes from 'prop-types';
    import { Controller } from 'react-hook-form';
    const TextFieldController = (props) => {
    const {control,name,label,required} = props
    return (
        <>
            <Controller
            name={name}
            control={control}
            defaultValue={''}
            render={({ field }) => 
                <TextField 
                    label={label}
                    required={required}
                    {...field} />}
            />

        </>
    )
    }

    TextFieldController.propTypes = {
        control: PropTypes.any.isRequired,
        name: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired,
        required: PropTypes.any,


    };

    export default TextFieldController