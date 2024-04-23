
import React from 'react'
import { TextField,Grid } from "@mui/material";
import {useFormContext,Controller} from 'react-hook-form'

const FormInput=({name,label,required})=>{
    const {control} = useFormContext()
    return(<>
        <Grid item xs={12} sm={6}>
            <Controller
            
                render={({field})=>(
                    <TextField 
                        fullWidth
                        label={label}
                        {...field}
                    />)}
                    required={required}
                
                control={control}
                fullWidth
                name={name}
                label={label}
            />
        </Grid>
    </>)

}

export default FormInput
