import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { colors, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize:"20px",
    fontWeight:900,
    color:"red",
  },
  head:{
    display:"flex",
    flexDirection:"row"
  }
}));
function Navbar() {
  const classes = useStyles();
  return (

    <AppBar color="inherit" className={classes.head}>
        <Typography className={classes.title}>
        <Link to="/">Home</Link>
        </Typography>
        <Typography className={classes.title}>
        <Link to="/cartitem">CartItem</Link>
        </Typography>
    </AppBar>
  );
}

export default Navbar;