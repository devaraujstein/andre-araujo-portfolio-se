import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Divider,
  Typography,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";

import { Code, Description } from "@material-ui/icons";

import skillIcons from "./constants/skillIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    height: "4px",
    width: "60px",
    backgroundColor: theme.palette.primary.main,
  },
  resumeBtn: {
    margin: "1rem",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "4rem",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around",
    },
  },
  skillIcon: {
    marginRight: "1.3rem",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0.4rem",
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <section id="about" className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              About me
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText primary="I'm a software engineer student based in Brazil." />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="I like to be always learning something new and challenging myself, 
                           I believe that this way I can develop cleaner and more robust codes."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="I value group work a lot, because I like to be always learning more from other people, 
                           besides having good communication, which is essential for development in technology groups."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText primary="In my spare time I like to play games, study other languages (currently studying English), etc... 
                                       I want to start contributing to open source projects." />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              Resume
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography component="h3" variant="h4" gutterBottom>
              You can check more details in my resume.
            </Typography>

            <Button
              className={classes.resumeBtn}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Description />}
              href="https://drive.google.com/file/d/12OiQGePj_3WJsnHWerGC8JngL2qgRD3k/view?usp=sharing"
              rel="noopener"
              target="_blank"
            >
              Resume
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              Skills
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box className={classes.skills}>
              {skillIcons.map((skillIcon) => {
                return (
                  <div key={skillIcon.label} className={classes.skillIcon}>
                    {skillIcon.icon}
                  </div>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
