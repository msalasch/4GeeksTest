import React, { Component } from 'react';
import { products } from '../products.json'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 170,
        width: 250,
    },
    box: {
        float: 'right',
        width: '250px',
        height: '180px',
        margin: '5px',
        border: '1px solid',
    },
    grid: {
        marginTop: '10px'
    },
    divImage:{
        float: 'left', 
        margin: '20px' 
    },
    image:{
        width: '100px'
    },
    divEnd:{
        textAlign: 'end' 
    }
};

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products,
            cart_products: [],
        }
    }

    addToCart(product) {
        this.props.onAdd(product)
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={'https://storage.googleapis.com/mesmerizing-matrix-1380/1/2018/08/icono-4geeks-white.png'} className="App-logo" alt="logo" />
                    <p> 4geeks Shop</p>
                </header>

                <Grid container style={styles.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={40} style={styles.grid}>
                            {this.state.products.map((product, i) => {
                                return (
                                    <Grid key={i} item>
                                        <Paper style={styles.paper} >
                                            <div style={styles.divImage}>
                                                <img style={styles.image}
                                                    src={require(`${'../resources/'}${product.product_image}`)} alt=""/>
                                            </div>
                                            <div >
                                                <p>{product.product_name}</p>
                                                <p> {product.description}</p>
                                                <p>${product.price}</p>
                                            </div>

                                            <div style={styles.divEnd}>
                                                <IconButton style={{ color: 'darkcyan' }} onClick={() => this.addToCart(product)}>
                                                    <AddShoppingCart />
                                                </IconButton>
                                            </div>
                                        </Paper>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default Products;