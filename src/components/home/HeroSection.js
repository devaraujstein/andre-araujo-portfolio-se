import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core/";

const backImg = require('../../../public/background.jpg');

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${backImg})`
  },
  wrapper: {
    marginBottom: theme.spacing(4)
  },
}));

export default function Home() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <section id="home" className={classes.root}>
      <Container>
        <div className={classes.wrapper}>
          <Typography component="h4" variant="h5" gutterBottom>
            <Typography variant="inherit" color="primary">
              HELLO,{" "}
            </Typography>
            I&apos;m André Araujo
          </Typography>

          <Typography component="h1" variant="h2" gutterBottom>
            Software Engineer Student
          </Typography>

          <Typography component="p" variant="subtitle1" color="textPrimary">
            Recently graduated in computer science, studying to professionalize as a software enginner. Currently performing several projects
            and courses, learning and trying to adopt the best practices, methodologies and technologies for a given problem.
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item>
            <Button
              href="#portfolio"
              variant="contained"
              color="primary"
              size={matches ? "large" : "medium"}
            >
              Check My Projects
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="#contact"
              variant="contained"
              color="primary"
              size={matches ? "large" : "medium"}
            >
              Contact me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
