import React from 'react';
import './avi.css';
// import Canada1 from './canada1';
// import Canada2 from './canada2';
// import France3 from './france3';
// import France4 from './france4';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, CardContent, Card, Button, CardActions } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Canada = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };
    
    return (
        <div className="temoignages-page">
            <div className="fran-section">
                <img src="/images/canada-ville.avif" alt="Background" className="fran-image" />
                <div className="overlayfran"></div>
                <div className="breadfrance">

                    <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
                       Préfinancement Etudiant
                    </p>

                    <button className="green-button" onClick={handleContactClick}>
                        NOUS CONTACTER
                        <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
                    </button>
                </div>
            </div>
            <div className="content-section">
                <div className="overlayfrance">
                    

                </div>
               
                <Typography variant="h5" sx={{ textAlign: 'center', my: 4, fontWeight: 'bold', color: '#C90076' }}>
                    Comment Procéder ?
                </Typography>

                
                    

                    {/* Phase 2 (Personnalisée avec Image) */}
                    


                    

            </div>
        </div>
    );
};

export default Canada;
