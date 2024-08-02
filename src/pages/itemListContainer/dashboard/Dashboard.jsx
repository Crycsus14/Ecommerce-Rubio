import { Box, Button, Link, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Typography variant="h1">Futuro Admin Dashboard</Typography>
      <Typography variant="h2" color="#F25C05">
        Disculpe las molestias, página en construcción
      </Typography>
      <Typography variant="button" ><Link to="/" style={{ color: "white", textDecoration: "none" }}> Volver al Home</Link></Typography>
    </Box>
    
  );
};

export default Dashboard;
