import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid2 } from '@mui/material';

const formatLabel = (fieldName) => {
  return fieldName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
};

const generateLog = (formData) => {
  const currentDate = new Date().toISOString().split('T')[0];
  let logText = `Datum: ${currentDate}\n`;

  if (formData.taaktype) logText += `Taaktype: ${formData.taaktype}\n`;
  if (formData.taak) logText += `Task: ${formData.taak}\n`;
  if (formData.klantnr) logText += `Klantnr: ${formData.klantnr}\n`;
  if (formData.adres) logText += `Adres: ${formData.adres}\n`;

  logText += "____________________________________________________________\n\n";
  
  if (formData.omschrijvingTaak) logText += `Omschrijving taak: ${formData.omschrijvingTaak}\n\n`;
  
  const tests = ['catsap', 'filter', 'streetping'];
  const testEntries = tests
    .filter(test => formData[test])
    .map(test => `-${formatLabel(test)}: ${formData[test]}`)
    .join('\n');
  
  if (testEntries) logText += `Testen bij aankomst:\n${testEntries}\n\n`;

  if (formData.acties) logText += `Acties: ${formData.acties}\n\n`;
  if (formData.materiaal) logText += `Materiaal: ${formData.materiaal}\n\n`;
  if (formData.resultaat) logText += `Resultaat: ${formData.resultaat}\n\n`;
  if (formData.modemtest) logText += `Modemtest: ${formData.modemtest}\n`;

  return logText;
};

// Define field layout with multiline property
const fieldLayout = [
  { name: 'taaktype', size: 12 },
  { name: 'taak', size: 6 },
  { name: 'klantnr', size: 6 },
  { name: 'adres', size: 12 },
  { name: 'omschrijvingTaak', size: 12, multiline: true, rows: 3 },
  { name: 'catsap', size: 4 },
  { name: 'filter', size: 4 },
  { name: 'streetping', size: 4 },
  { name: 'acties', size: 12, multiline: true, rows: 3 },
  { name: 'materiaal', size: 12, multiline: true, rows: 3 },
  { name: 'resultaat', size: 12, multiline: true, rows: 3 },
  { name: 'modemtest', size: 12, multiline: true, rows: 3 }
];

// Main form component with custom grid2 layout
const FormComponent = () => {
  const [formData, setFormData] = useState(
    fieldLayout.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCopyToClipboard = () => {
    const logText = generateLog(formData);
    navigator.clipboard.writeText(logText)
      .then(() => alert("Log copied to clipboard!"))
      .catch(err => console.error("Could not copy text: ", err));
  };

  const handleDownloadTxt = () => {
    const logText = generateLog(formData);
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'log.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Custom Grid Layout Form
      </Typography>
      <form>
        <Grid2 container spacing={2}>
          {fieldLayout.map((field) => (
            <Grid2 item size={6}>
              <TextField
                fullWidth
                label={formatLabel(field.name)}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                variant="outlined"
                multiline={field.multiline || false}
                rows={field.rows || 1}
              />
            </Grid2>
          ))}
        </Grid2>

        {/* Action buttons */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="contained" color="primary" onClick={handleCopyToClipboard}>
            Copy to Clipboard
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDownloadTxt}>
            Download as .txt
          </Button>
        </Box>
      </form>
    </Container>
  );
};

const FormPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Dynamic Forms with Custom Grid Layouts and Text Areas
      </Typography>

      <Box mt={4} mb={6}>
        <FormComponent />
      </Box>
    </Container>
  );
};

export default FormPage;
