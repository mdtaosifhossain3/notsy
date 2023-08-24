"use client"
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        placeholder="Search Notes"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: "100%"}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#23C5E1",fontSize:"2rem" }} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
