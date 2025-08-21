"use client";
import {
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section con gradiente */}
        <Box
          sx={{
            background: "var(--orbit-gradient)",
            borderRadius: 3,
            p: 6,
            mb: 6,
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography variant="h1" sx={{ mb: 2, color: "white" }}>
            Orbfit Motion
          </Typography>
          <Typography
            variant="h3"
            sx={{ mb: 4, fontWeight: 400, color: "white" }}
          >
            Automatización Simple, Resultados Potentes
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "#5B4FE9",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              "&:hover": {
                bgcolor: "#F5F5F5",
                transform: "translateY(-2px)",
              },
            }}
          >
            Empezar a Automatizar
          </Button>
        </Box>

        {/* Sección de características */}
        <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
          Lo que hacemos por ti
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mb: 6 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              flex: 1,
              bgcolor: "var(--gray-light)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(91, 79, 233, 0.1)",
              },
            }}
          >
            <SpeedIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
            <Typography variant="h3" sx={{ mb: 2 }}>
              Ahorra Tiempo
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Automatiza tareas repetitivas y enfócate en hacer crecer tu
              negocio.
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              flex: 1,
              bgcolor: "var(--gray-light)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(91, 79, 233, 0.1)",
              },
            }}
          >
            <AutoAwesomeIcon
              sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h3" sx={{ mb: 2 }}>
              Optimiza Procesos
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Flujos de trabajo inteligentes que se adaptan a tu negocio.
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              flex: 1,
              bgcolor: "var(--gray-light)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(91, 79, 233, 0.1)",
              },
            }}
          >
            <TrendingUpIcon
              sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h3" sx={{ mb: 2 }}>
              Aumenta Ingresos
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Convierte más leads y aumenta tu facturación con automatizaciones.
            </Typography>
          </Paper>
        </Stack>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            borderTop: "1px solid var(--gray-light)",
          }}
        >
          <Typography variant="h2" sx={{ mb: 3 }}>
            ¿Listo para automatizar tu negocio?
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              Contactar Ahora
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              Ver Demo
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
