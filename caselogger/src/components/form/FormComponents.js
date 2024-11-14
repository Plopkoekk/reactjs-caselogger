import React from 'react';
import { Container, Grid, TextField, Typography } from '@mui/material';




export function Klantnummer() {
    return (
        <TextField id='klantnummer' label='Klantnummer' variant='filled'></TextField>
    )
};
export function Adres() {
    return (
        <TextField id="adres" label='Adres' variant='filled'></TextField>
    )
};
export function TaakID() {
    return (
        <TextField id="taakID" label='Taskgroup ID / Case' variant='filled'></TextField>
    )
}
export function InhomeTaskInfoGroup() {
    return (
    <Grid container spacing={2}>
        <Grid  xs={6}>
            <Klantnummer />
        </Grid>
        <Grid  xs={6}>
            <TaakID />
        </Grid>
        <Grid  xs={12}>
            <Adres />
        </Grid>
    </Grid>
    )
};