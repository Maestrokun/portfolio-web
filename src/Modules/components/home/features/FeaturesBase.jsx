import { Grid, Typography } from "@mui/material";
import React from "react";
import Feature from "./Feature";
import Benefits from "./Benefits";
import Windows from "../../../../assets/windows.webp";

const FeaturesBase = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          padding: "0 20px",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={12} mb="70px">
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontSize: "58px",
              fontWeight: 600,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Features & Benefits
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={4} mr={4}>
              <Feature />
            </Grid>
            <Grid item xs={4} mr={6}>
              <Benefits />
            </Grid>
            <Grid item xs={3}>
              <img
                src={Windows}
                alt="look"
                style={{ width: "400px", height: "400px", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturesBase;
