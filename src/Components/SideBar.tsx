import { useState } from 'react';
import { Container, Grid,  makeStyles, Typography } from "@material-ui/core";

import Logo from "../Assets/Logo.png";

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#fff",
        height: "100vh",
        width: "15%"
    },
    logo: {
        width: 150,
        height: 130,
        marginTop: 15
    },
    navContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-left",
        position: "relative",
        left: -22
    },
    navItem: {
        fontWeight: 500,
        color: "#444",
        paddingLeft: 2.5,
        "&:hover": {
            cursor: "pointer"
        }
    },
    selectedNav: {
        backgroundColor: "#95bcf2",
        width: "110%",
        paddingTop: 5,
        paddingBottom:5,
        paddingLeft: 2.5,
        fontWeight: 500,
        color: "#444",
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

const menuItems = [{
    id:1, name: "Company Details"
},
{
    id:2, name: "Contact Details"
},
{
    id:3, name: "Due Diligance"
},
{
    id:4, name: "NDA"
}
]

const SideBar = () => {
    const classes = useStyles();
    const [selectNav, setSelectedNav] = useState<{ id:number, name:string }>({ id:1, name:"Company Details" })

    return (
        <Container className={ classes.container } maxWidth="xl">
            <img className={classes.logo} src={Logo} alt="logo" />
            <Grid container spacing={2} className={ classes.navContainer }>
                 {menuItems.map(i => 
                    <Grid item key={i.id}>
                        <a onClick={() => setSelectedNav(i)}><Typography className={selectNav.id === i.id? classes.selectedNav: classes.navItem}>{i.name}</Typography></a>
                    </Grid>)}
            </Grid>
        </Container>
    );
};

export default SideBar;