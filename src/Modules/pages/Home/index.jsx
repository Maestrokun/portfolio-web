import React from "react";
import Navbar from "../../components/home/Navbar";
import Display from "../../components/home/Display";
import { Grid } from "@mui/material";
import FeaturesBase from "../../components/home/features/FeaturesBase";
import Services from "../../components/home/services/Services";

const Home = () => {
  return (
    <Grid>
      <Grid
        container
        sx={{
          backgroundColor: "#fff7fd",
        }}
      >
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={12}
          mt={12}
          mb={4}
          sx={{
            p: "0 40px",
            backgroundColor: "#fff7fd",
          }}
        >
          <Display />
        </Grid>
      </Grid>
      <Grid containers sx={{ justifyContent: "center" }} mt={10} mb={3}>
        <FeaturesBase />
      </Grid>
      <Grid containers sx={{ justifyContent: "center" }} mt={10} mb={3}>
        <Services />
      </Grid>
    </Grid>
  );
};

export default Home;
