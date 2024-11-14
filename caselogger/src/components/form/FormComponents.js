import React from 'react';
import { MenuItem, Divider, Container, FormControl, Grid2, TextField, Typography, InputLabel, FilledInput, InputAdornment } from '@mui/material';
import Select, {SelectChangeEvent} from '@mui/material/Select'



export function Klantnummer() {
    return (
        <FormControl variant="filled" fullWidth>
        <InputLabel htmlFor="Klantnummer" >Klantnummer</InputLabel>
        <FilledInput
        fullWidth
        id="Klantnummer"
        />
    </FormControl>    )
};
export function TaakID() {
    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="TaakID">TaakID</InputLabel>
            <FilledInput
            id="TaakID"
            />
        </FormControl>    )
};
export function Adres(){
    return(
        <>
        <Grid2 item size={5}>
            <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="Adres" >Straat + Nr</InputLabel>
                <FilledInput
                fullWidth
                id="Adres"
                />
            </FormControl>
        </Grid2>
        <Grid2 item size={3}>
            <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="Bus" >Busnummer</InputLabel>
                <FilledInput
                fullWidth
                id="Busnummer"
                />
            </FormControl>
        </Grid2>
        <Grid2 item size={4}>
            <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="postcode" >Postcode</InputLabel>
                <FilledInput
                fullWidth
                id="Postcode"
                />
            </FormControl>
        </Grid2>
        </>
    )
};
export function Omschrijving(){
    return (
        <>  
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="omschrijving" >Omschrijving Taak</InputLabel>
            <FilledInput
            fullWidth
            multiline
            id="omschrijving"
            />
        </FormControl>
        </>
    )
}
export function Catsap(){
    const [catsap, setCatsap] = React.useState("");

    const handleChange = event => {
      setCatsap(event.target.value)
    }

    return (
        <>
        <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Catsap Status bij aankomst</InputLabel>
            <Select
            fullWidth
            labelId="catsap"
            id="demo-simple-select"
            value={catsap}
            label="Catsap status"
            variant="filled"
            onChange={handleChange}
            >
                <MenuItem value=""> </MenuItem>
                <MenuItem value={1}>1 - Active Cable Customer</MenuItem>
                <MenuItem value={2}>2 - Former Cable Customer</MenuItem>
                <MenuItem value={3}>3 - No Drop (Cable in street)</MenuItem>
                <MenuItem value={4}>4 - No Service</MenuItem>
                <MenuItem value={5}>5 - Rijgnet</MenuItem>
                <MenuItem value={6}>6 - Dropcable Finished (Ready for connection)</MenuItem>
                <MenuItem value={7}>7- Dropcable Finished (Not ready for connection)</MenuItem>

            </Select>
        </FormControl>
        </>
    )
}
export function Filter(){
    const [filter, setFilter] = React.useState("");

    const handleChange = event => {
      setFilter(event.target.value)
    }

    return (
        <>
        <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Filter-Status bij aankomst</InputLabel>
            <Select
            fullWidth
            labelId="filter"
            id="demo-simple-select"
            value={filter}
            label="Catsap status"
            variant="filled"
            onChange={handleChange}
            >
                <MenuItem value=""> </MenuItem>
                <MenuItem value="No filter">No Filter</MenuItem>
                <MenuItem value="Anti-Dief">Anti-Dief</MenuItem>
                <MenuItem value="TOF-ITC">TOF-ITC</MenuItem>
                <MenuItem value="TOF 5-117">TOF 5-117</MenuItem>
                <MenuItem value="HP47">HP47</MenuItem>
                <MenuItem value="HP86">HP86</MenuItem>
                <MenuItem value="HP110">HP110</MenuItem>
                <MenuItem value="RPA12">RPA12</MenuItem>
                

            </Select>
        </FormControl>
        </>
    )
}
export function Streetping(){
    return (
        <>  
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="streetping" >Streetping</InputLabel>
            <FilledInput
            fullWidth
            id="streetping"
            />
        </FormControl>
        </>
    )
}









