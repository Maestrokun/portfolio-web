import { Button, Grid } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: "#fff",
          padding: "20px 15px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid item>Logo</Grid>
        <Grid item>home</Grid>
        <Grid item>
          <Button variant="contained" sx={{ padding: "20px 20px" }}>
            Hire me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
