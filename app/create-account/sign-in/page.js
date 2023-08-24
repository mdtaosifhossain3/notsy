"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";



const CreateAccount = () => {
  const [providers, setProviders] = useState(null);

  console.log(providers);

  useEffect(() => {
    (
      async() => {
        const provider = await getProviders()
        setProviders(provider);
      }
    )()
  },[])
  return (
    <div>
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "450px",
            paddingY: "3.5rem",
            paddingX: "3rem",
            width: "100%",
            boxShadow: 3,
            textAlign: "center",
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "38px", fontWeight: "bold",marginBottom:"2rem" }}
          >
            Sign In
          </Typography>
          <Button
            sx={{
              width: "100%",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
            variant="contained"
          >
            Continue with Google
          </Button>
          <Typography
            variant="h2"
            sx={{ fontSize: "18px", padding: "0.8rem", fontWeight: "bold" }}
          >
            Or
          </Typography>
          <Button
            sx={{
              background: "black",
              width: "100%",
              textTransform: "capitalize",
              fontSize: "20px",
              ":hover": { backgroundColor: "black" },
            }}
            variant="contained"
          >
            Continue with GitHub
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default CreateAccount;