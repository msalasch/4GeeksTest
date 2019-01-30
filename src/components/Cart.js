import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = {
    table: {
        width: '50%',
    },
    label:{
        color: 'black'
    }
};

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productsOnCart: this.props.products,
            total: 0
        }
    }

    componentDidMount() {
        this.get_total()
    }
    renderProducts() {
        const newList = [...new Map(this.state.productsOnCart.map(product => [product.id, product])).values()]
        return (
            newList.map((product, i) => {
                return (
                    <TableRow key={i}>
                        <TableCell >{product.product_name}</TableCell>
                        <TableCell align="right">{product.description}</TableCell>
                        <TableCell align="right">{this.countProducts(product.id)}</TableCell>
                        <TableCell align="right">${product.price * this.countProducts(product.id)}</TableCell>
                    </TableRow>
                )
            })
        )
    }

    get_total() {
        if (this.state.productsOnCart) {
            this.state.productsOnCart.map((product, i) => {
                this.setState({
                    total: this.state.total += product.price
                })
            })
        }
    }

    countProducts(products) {
        const countProducts = this.state.productsOnCart.filter(product => product.id === products);
        return countProducts.length;
    }


    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={'https://storage.googleapis.com/mesmerizing-matrix-1380/1/2018/08/icono-4geeks-white.png'} className="App-logo" alt="logo" />
                    <p> 4geeks Shop</p>
                </header>

                <div style={{ textAlign: '-webkit-center' }}>
                    <Table style={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={styles.label}>Product</TableCell>
                                <TableCell style={styles.label} align="right">Description</TableCell>
                                <TableCell style={styles.label} align="right">Cant</TableCell>
                                <TableCell style={styles.label} align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderProducts()}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell style={styles.label} colSpan={2} align="right">Total</TableCell>
                                <TableCell style={styles.label} align="right">${this.state.total}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div >
        );
    }
}

export default Cart;