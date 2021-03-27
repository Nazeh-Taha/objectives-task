import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import TopBar from "../../components/TopBar";
import AppDrawer from "../../components/AppDrawer";

const Homepage = () => {
  const classes = useStyles();

  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className={classes.container}>
      <TopBar />
      <AppDrawer />
      <main className={classes.content}>
        <p className={classes.welcomeText}>
          Welcome {userData.first_name}, this is Portfolio Pro Homepage
        </p>
      </main>
    </div>
  );
};

export default Homepage;
