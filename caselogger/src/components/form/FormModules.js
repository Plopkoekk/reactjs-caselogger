import React from 'react';
import {Divider, Container, FormControl, Grid2, TextField, Typography, InputLabel, FilledInput, InputAdornment } from '@mui/material';
import {Klantnummer, TaakID, Adres, Omschrijving, Catsap, Filter, Streetping} from './FormComponents';

export function InhomeTaskInfo() {
    return (
        <>
        <Typography variant='h5'>Klant Info</Typography>
        <Grid2 container spacing={3}>
        
            <Grid2 item size={6}>
                <Klantnummer />
            </Grid2>
            <Grid2 item size={6}>
                <TaakID />
            </Grid2>
            <Adres />
        </Grid2>
        <Divider sx={{marginBottom: 2, marginTop: 2}}></Divider>
        </>
    )
};

export function InstallSituatie(){
    return (
        <>
        <Typography variant='h5'>Situatie</Typography>
        <Grid2 container spacing={3}>
            <Grid2 item size={12}>
                <Omschrijving />
            </Grid2>
            <Grid2 item size={4}>
                <Catsap />
            </Grid2>
            <Grid2 item size={4}>
                <Filter />
            </Grid2>
            <Grid2 item size={4}>
                <Streetping />
            </Grid2>
        </Grid2>
        <Divider sx={{marginBottom: 2, marginTop: 2}}></Divider>
        </>
    )
}