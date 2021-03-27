import { useState } from "react";
import TopBar from "../../components/TopBar";
import AppDrawer from "../../components/AppDrawer";
import {
  Breadcrumbs,
  Link,
  Typography,
  Divider,
  Button,
  Icon,
  Grid,
  Card,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "./styles";
import clsx from "clsx";
import PortfolioDrawer from "./PortfolioDrawer";

const OrganizationPortfolios = () => {
  const classes = useStyles();

  const [portfolioDrawerIsOpen, setPortfolioDrawerIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <TopBar drawerIsOpen={portfolioDrawerIsOpen} />
      <AppDrawer />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: portfolioDrawerIsOpen,
        })}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" component={RouterLink} to="/">
            Portfolio Pro
          </Link>
          <Typography color="textPrimary">Organization Portfolios</Typography>
        </Breadcrumbs>
        <header className={classes.mainHeader}>
          <h1 className={classes.mainTitle}>Organization Portfolios</h1>
          <Button variant="contained" color="primary">
            <Icon>add</Icon> PROPOSE A NEW IDEA
          </Button>
        </header>
        <Divider />
        <Grid container spacing={3} className={classes.grid}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={4} key={index}>
              <Card
                className={classes.card}
                onClick={() => setPortfolioDrawerIsOpen(true)}
              >
                <header className={classes.cardHeader}>
                  <h3 className={classes.cardTitle}>Portfolio Title</h3>
                  <Typography variant="body2">5 Projects</Typography>
                </header>
                <footer className={classes.cardFooter}>
                  <Divider />
                  <Typography variant="subtitle2">
                    Managed by <strong>Ahmed</strong>
                  </Typography>
                </footer>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <PortfolioDrawer
        open={portfolioDrawerIsOpen}
        setOpen={setPortfolioDrawerIsOpen}
      />
    </div>
  );
};

export default OrganizationPortfolios;
