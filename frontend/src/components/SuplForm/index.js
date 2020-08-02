import React from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons/';

const SuplForm = () => {
    return (
        <>
            <h1>Supply Form</h1>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <TextField
                        required
                        id="outlined-required"
                        label="Generic Drug Name"
                        defaultValue=""
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="outlined-required"
                        label="Drug Form"
                        defaultValue=""
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-number"
                        label="Strength"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-number"
                        label="Subamount"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                    >
                        <CheckCircleOutline />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

export default SuplForm;
