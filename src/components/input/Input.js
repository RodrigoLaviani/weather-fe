import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../assets/stylesheets/input/input.scss';

const Input = () => {

    return (
        <div className="input-container">
            <TextField 
                fullWidth={true} 
                label="Place"
                variant="outlined"
            ></TextField>
        </div>
    );
};

export default Input;