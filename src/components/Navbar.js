import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};

class Navbar extends Component {

    render() {
        return (
            <div>
                <div style={styles.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                4Geeks Shop
                            </Typography>
                            <NavLink to='/' style={{ color: "inherit", textDecoration: 'none' }}>Products</NavLink>
                            <NavLink to='/cart' style={{ color: "inherit" }}>
                                <IconButton color="inherit">
                                    <Badge badgeContent={this.props.productsOnCart} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </NavLink>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }
}

export default Navbar;