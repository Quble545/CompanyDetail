import { Container, Typography, makeStyles, Grid } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

import Form from "./Form";

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#fff",
        width: "100vw",
        height: "100vh",
    },
    headerContainer: {
        marginBottom: 100
    },
    headerText: {
        paddingTop: 22.5,
        fontWeight: 500,
        paddingLeft: 35
    },
    icon: {
        color: "#000"
    },
    menuText: {
        color: "#000",
        fontWeight: 500
    },
    logout: {
        "&:hover": {
            cursor: "pointer"
        }
    }
}))

const Body = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="xl">
            <Grid container justifyContent="space-between" className={classes.headerContainer}>
                <Grid item>
                    <Typography variant="h5" className={classes.headerText}>Client setup</Typography>
                </Grid>
                <Grid item>
                   <Grid container spacing={4}>
                       <Grid item>
                            <Typography className={classes.menuText}>Saved</Typography>
                       </Grid>
                       <Grid item>
                           <Grid container className={classes.logout}>
                               <Grid item>
                                   <ExitToApp color="primary" className={classes.icon} />
                               </Grid>
                               <Grid item>
                                    <Typography className={classes.menuText}>Logout</Typography>
                               </Grid>
                           </Grid>
                       </Grid>
                   </Grid>
                </Grid>
            </Grid>

            <Form />
        </Container>
    );
};

export default Body;