import React from 'react';
import {Divider, Container, FormControl, Grid2, TextField, Typography, InputLabel, FilledInput, InputAdornment, Button } from '@mui/material';
import {Klantnummer, TaakID, Adres, Woli, Omschrijving, Catsap, Filter, Streetping, Acties, Materiaal, Resultaat, Modemtest, CopyCaselogButton, DownloadCaselogButton} from './FormComponents';

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
export function WoliInfo(){
    return (
        <>
        <Typography variant='h5'>WOLI Info</Typography>
        <Grid2 container spacing={3}>
        
            <Grid2 item size={12}>
                <Woli />
            </Grid2>
            <Adres />
        </Grid2>
        <Divider sx={{marginBottom: 2, marginTop: 2}}></Divider>
        </>
    )
}

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

export function InstallActies(){
    return (
        <>
        <Typography variant='h5'>Uitvoering</Typography>
        <Grid2 container spacing={3}>
            <Grid2 item size={12}>
                <Acties />
            </Grid2>
        </Grid2>
        <Divider sx={{marginBottom: 2, marginTop: 2}}></Divider>
        </>
    )
}

export function InhomeFinish(){
        return (
            <>
            <Typography variant='h5'>Finishing up</Typography>
            <Grid2 container spacing={3}>
                <Grid2 item size={12}>
                    <Materiaal />
                </Grid2>
                <Grid2 item size={6}>
                    <Resultaat />
                </Grid2>
                <Grid2 item size={6}>
                    <Modemtest />
                </Grid2>
            </Grid2>
            <Divider sx={{marginBottom: 2, marginTop: 2}}></Divider>
            </>
        )
}
export function FormButtons(){
    return (
        <>
        <Grid2 container spacing={3}>
            <Grid2 item size={6}>
                <CopyCaselogButton />
            </Grid2>
            <Grid2 item size={6}>
                <DownloadCaselogButton />
            </Grid2>
        </Grid2>
        </>
    )
}