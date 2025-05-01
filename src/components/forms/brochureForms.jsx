import React from 'react';
import { Box, Grid, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Brochure = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        civilite: '',
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        niveau: '',
        annee: '',
        pays: 'FRANCE'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ici tu peux ajouter ton appel API si besoin

        console.log('Données envoyées :', form);
        navigate('/telechargeBrochure'); // Redirection après validation
    };

    return (
        <Box sx={{ p: 4, maxWidth: '1200px', mx: 'auto' }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <img
                        src="/images/canada-ville.avif"
                        alt="Background"
                        className="fran-image"
                        style={{ borderRadius: '8px', width: '100%', height: '600px' }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" fontWeight="bold" color='#A93D87' gutterBottom>
                        Demande de documentation et d'information
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {/* <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Civilité *</InputLabel>
                  <Select
                    value={form.civilite}
                    name="civilite"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="M.">M.</MenuItem>
                    <MenuItem value="Mme">Mme</MenuItem>
                    <MenuItem value="Autre">Autre</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Prénom *" name="prenom" required onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Nom *" name="nom" required onChange={handleChange} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth label="E-mail *" name="email" type="email" required onChange={handleChange} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Téléphone mobile *"
                                    name="telephone"
                                    required
                                    helperText="Format : +237xxxxxxxx"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Niveau d'intégration souhaité *</InputLabel>
                                    <Select
                                        value={form.niveau}
                                        name="niveau"
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Licence">Licence</MenuItem>
                                        <MenuItem value="Master">Master</MenuItem>
                                        <MenuItem value="Autre">Autre</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Année de rentrée souhaitée *"
                                    name="annee"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Pays de résidence"
                                    name="pays"
                                    value={form.pays}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    sx={{
                                        bgcolor: '#4B32C3',
                                        '&:hover': {
                                            bgcolor: '#A93D87'
                                        }
                                    }}
                                >
                                    ENVOYER MA DEMANDE
                                </Button>
                            </Grid>

                        </Grid>
                    </form>

                    <Typography variant="body2" color="textSecondary" mt={3}>
                        Les informations recueillies font l’objet d’un traitement informatique destiné aux opérations de transmission des informations
                        et documentations sollicitées. Les destinataires des données sont les chargés de la communication et du recrutement et le service commercial.
                        Vos données sont conservées dans des conditions propres à en assurer leur sécurité et
                        confidentialité pendant trois ans à compter de leur collecte ou de votre dernière correspondance avec nous.
                    </Typography>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Brochure;
