import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Markus from "../../../assets/markus.webp";

const Display = () => {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          padding: "0 20px",
          justifyContent: "space-evenly",
          backgroundColor: "#fff7fd",
          // backgroundColor: "red",
        }}
      >
        <Grid item xs={5} ml={2} style={{ width: "350px", height: "620px" }}>
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontSize: "100px",
              fontWeight: 600,
              lineHeight: "97.5px",
              textAlign: "start",
              letterSpacing: "normal",
            }}
          >
            Maestro's Web and Mobile Development Services
          </Typography>
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontSize: "24px",
              fontWeight: "light",
              lineHeight: "30px",
              textAlign: "start",
              letterSpacing: "normal",
              color: "#404040",
              mt: 2,
            }}
          >
            Looking for a skilled frontend developer with expertise in HTML,
            CSS, JavaScript, TypeScript and React? Look no further than Daniel
            Davies for visually appealing and user-friendly web and mobile
            applications.
          </Typography>
          <Button
            variant="contained"
            sx={{ padding: "20px 30px", mt: 4, backgroundColor: "#004e98" }}
          >
            <Typography
              sx={{
                fontFamily: "sans-serif",
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              Learn more
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={3} mr={5}>
          <img src={Markus} alt="laptops" style={{ width: "600px" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Display;
