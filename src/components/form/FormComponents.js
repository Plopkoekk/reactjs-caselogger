import React from 'react';
import { MenuItem, FormControl, Grid2, Typography, InputLabel, FilledInput, Button } from '@mui/material';
import Select, {SelectChangeEvent} from '@mui/material/Select'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileDownloadIcon from '@mui/icons-material/FileDownload';



export function Klantnummer() {
    return (
        <FormControl variant="filled" fullWidth>
        <InputLabel htmlFor="klantnummer" >Klantnummer</InputLabel>
        <FilledInput
        fullWidth
        id="klantnummer"
        />
    </FormControl>
    );
}
export function Woli() {
    return (
        <FormControl variant="filled" fullWidth>
        <InputLabel htmlFor="woli" >WOLI-nr</InputLabel>
        <FilledInput
        fullWidth
        id="woli"
        />
    </FormControl>    )
}
export function TaakID() {
    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="TaskID">TaskgroupID (SFX) / Klantnummer (Cafe)</InputLabel>
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
            minRows={3}
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
export function Acties(){
    return (
        <>  
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="acties" >Acties</InputLabel>
            <FilledInput
            fullWidth
            multiline
            minRows={3}
            id="acties"
            />
        </FormControl>
        </>
    )
}
export function Materiaal(){
    return (
        <>  
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="materiaal" >Extra Materialen</InputLabel>
            <FilledInput
            fullWidth
            multiline
            minRows={3}
            id="materiaal"
            />
        </FormControl>
        </>
    )
}
export function Resultaat(){
    return (
        <>  
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="resultaat" >Resultaat</InputLabel>
            <FilledInput
            fullWidth
            multiline
            minRows={2}
            id="resultaat"
            />
        </FormControl>
        </>
    )
}
export function Modemtest(){
    return (
        <>  
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="modemtest" >Modemtest</InputLabel>
            <FilledInput
            fullWidth
            multiline
            minRows={2}
            maxRows={6}
            id="modemtest"
            />
        </FormControl>
        </>
    )
}
export function CopyCaselogButton(){
    return (
        <>
        <Button 
            size='large'
            color='primary'
            variant='contained' 
            fullWidth 
            
        >
                <ContentCopyIcon sx={{marginRight: 1}}/>
                Copy to Clipboard
        </Button>
        </>
    )
}
export function DownloadCaselogButton(){
    return(
        <>
        <Button 
        size='large'
        color='secondary'
        variant='contained' 
        fullWidth
        
        >
            <FileDownloadIcon sx={{marginRight: 1}}/>
            Download as .txt-file
        </Button>
        </>
    )
}










