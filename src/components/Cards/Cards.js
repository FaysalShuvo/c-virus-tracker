import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
const Cards = ({ data }) => {
  console.log("card: ", data);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2" gutterBottom>
              Number of c-virus cases!
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2" gutterBottom>
              Number of Recovered c-virus cases!
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2" gutterBottom>
              Number of Deaths by c-virus cases!
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
