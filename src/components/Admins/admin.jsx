import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EuroIcon from '@mui/icons-material/Euro';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useNavigate } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


const NAVIGATION = [
  {
    segment: 'Menu',
    title: 'Menu',
    icon: <DashboardIcon />,
  },
  {
    segment: 'utilisateurs',
    title: 'utilisateurs',
    icon: <PeopleIcon />,
  },
  {
    segment: 'Paiements',
    title: 'Paiements',
    icon: <EuroIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});




function DemoPageContent({ pathname }) {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [filters, setFilters] = useState({ nom: '', email: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clients');
        setClients(response.data); // Données complètes
        setFilteredClients(response.data); // Initialiser les données filtrées
      } catch (error) {
        console.error('Erreur lors de la récupération des clients :', error);
      }
    };

    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/clients/${id}`);
      setClients((prevClients) => prevClients.filter((client) => client.id !== id));
      setFilteredClients((prevClients) => prevClients.filter((client) => client.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du client :', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    const filtered = clients.filter((client) => {
      return (
        client.nom.toLowerCase().includes(updatedFilters.nom.toLowerCase()) &&
        client.email.toLowerCase().includes(updatedFilters.email.toLowerCase())
      );
    });

    setFilteredClients(filtered);
  };

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        '@media (max-width: 600px)': {
          padding: '10px', // Réduit le padding pour petits écrans
        },
      }}
    >
      <Typography style={{ color: '#004080', fontSize: '24px' }}>Bienvenue dans ton espace Administrateur</Typography>
      <div>


        <Box sx={{ display: 'flex', gap: 2, mb: 2, mt: 3, justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" gutterBottom style={{ margin: '20px 0', color: '#004080' }}>
            Liste des Clients
          </Typography>
          <TextField
            label="Filtrer par Nom"
            variant="outlined"
            name="nom"
            value={filters.nom}
            onChange={handleFilterChange}
            sx={{ ml: 3 }}
          />
          <TextField
            label="Filtrer par Email"
            variant="outlined"
            name="email"
            value={filters.email}
            onChange={handleFilterChange}
          />
        </Box>

        <TableContainer component={Paper} sx={{
          width: '100%', // Prend 100% de la largeur
          overflowX: 'auto', // Active le défilement horizontal si nécessaire
        }}>
          <Table sx={{ minWidth: 650 }} aria-label="tableau des clients">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Nom</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Prénom</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Téléphone</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Ville</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Pays</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClients
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Pagination appliquée sur clients filtrés
                .map((client) => (
                  <TableRow key={client.id}>
                    <TableCell >{client.nom}</TableCell>
                    <TableCell>{client.prenom}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.telephone}</TableCell>
                    <TableCell>{client.ville}</TableCell>
                    <TableCell>{client.pays}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(client.id)}
                      >
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[6, 12, 18]}
          component="div"
          count={filteredClients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            fontSize: '1.2rem', // Augmente la taille de la police
            textAlign: 'center', // Centre le texte
            padding: '20px', // Ajoute un padding
            justifyContent: 'center', // Centre les contrôles de pagination
          }}
        />
      </div>
    </Box>
  );
}


export default function DashboardLayoutAccount(props) {
  const { window } = props;
  const navigate = useNavigate(); // Initialiser useNavigate

  const [session, setSession] = React.useState({
    user: {
      name: 'Alex KUETCHE',
      email: 'akuetche55@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Alex KUETCHE',
            email: 'akuetche55@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
        navigate('/medecin'); // Rediriger vers la page /medecin après déconnexion
      },
    };
  }, [navigate]);

  const router = useDemoRouter('/dashboard');

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
