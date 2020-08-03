import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MetricsChart from "../Charts/MetricsChart";
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  info:{
    paddingLeft: 400,
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          <strong>Métrics Timeline</strong>
          <p className="notes">Select only two metrics in the filter </p>
        </Typography>
        <MetricsChart />
      </CardContent>
      <CardActions>
        <Button className="button-learn" size="small">Learn More</Button>
        <a href="#/info"className={classes.info}><InfoIcon  color="disabled"/></a>
      </CardActions>
    </Card>
  );
}
