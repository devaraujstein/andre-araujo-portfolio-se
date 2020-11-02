import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Box,
  IconButton,
  Link,
  Avatar,
} from "@material-ui/core";

import socialIcons from "./constants/socialIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    height: "4px",
    width: "60px",
    backgroundColor: theme.palette.primary.main,
    margin: "auto",
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(4),
  },
  linkColor: {
    color: theme.palette.primary.light,
  },
  socialIcon: {
    fill: theme.palette.common.white,
    "&:hover": {
      fill: theme.palette.primary.light,
    },
    "&:focus": {
      fill: theme.palette.primary.light,
    },
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  formHeader: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(1),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          Contact
        </Typography>
        <Divider className={classes.divider} />

        <Box className={classes.avatarWrapper}>
          <Avatar
            alt="André Araujo"
            src="/profile-picture.jpeg"
            className={classes.avatar}
          />
        </Box>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {
                "If you have reached the contact page, you may be interested in contacting me, feel free to send me messages on linkedin, if you prefer you can send me an email, It will be a pleasure to talk to you. "
              }
              {" More details, acess my "}
              <Link
                className={classes.linkColor}
                href="https://drive.google.com/file/d/12OiQGePj_3WJsnHWerGC8JngL2qgRD3k/view?usp=sharing"
                rel="noopener"
                target="_blank"
              >
                resume
              </Link>
              .
            </Typography>
          </CardContent>

          <Divider />

          <CardContent>
            <Typography
              variant="body1"
              color="textPrimary"
              align="center"
              component="p"
              gutterBottom
            >
              You can find me on the following channels
            </Typography>

            <Box display="flex" justifyContent="center">
              {socialIcons.map((socialIcon) => (
                <IconButton
                  key={socialIcon.label}
                  aria-label={socialIcon.label}
                  className={classes.socialIcon}
                  href={socialIcon.href}
                  rel="noopener"
                  target="_blank"
                  component="a"
                >
                  {socialIcon.icon}
                </IconButton>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
