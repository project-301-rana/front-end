import React, { Component } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../CSS/Order.css';
import deleteImage from '../images/dustbin.png'

export class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            showOrder: false,
        }
    }

    componentDidMount = async () => {
        // let email = this.props.auth0.user.email;
        let email = 'rana.abusamhan@gmail.com';
        // const url = `${process.env.REACT_APP_SERVER}/getOrders?email=${email}`;
        // const url = `http://localhost:3001/getOrders?email=${email}`;
        const url = `${process.env.REACT_APP_SERVER}/getOrders?email=${email}`;
        try {
            const result = await axios.get(url);
            this.setState({
                orders: result.data,
                showOrder: true,
            })
        } catch {
            this.setState({
                showOrder: false,
            })
            console.log('error')
        }
    }

     deleteOrder = async (index) =>{
        // let email = this.props.auth0.user.email;
        let email = 'rana.abusamhan@gmail.com';
        // const url = `${process.env.REACT_APP_SERVER}/getOrders?email=${email}`;
        // const url = `http://localhost:3001/deleteOrder/${index}`;
        const url = `${process.env.REACT_APP_SERVER}/deleteOrder/${index}`;
        const result= await axios.delete(url,{params:{email}})
        this.setState({
            orders:result.data,
            showOrder: true,
        })
        console.log(this.state.orders.order)

     }

    render() {
        return (
         
                 <Table striped bordered hover>
                        <thead>
                            <tr className="firstRow">
                                <th>Id</th>
                                <th>order</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Delete items</th>
                            </tr>
                        </thead>
                        
             
                        {this.state.showOrder &&
                    this.state.orders.map((item,idx)=>(
                        <tbody>
                        <tr>
                            <td>{idx}</td>
                            <td>{item.title}</td>
                            <td>Otto</td>
                            <td className="lastColumn"><img className="ordersImages" src={item.image}/></td>
                            <td><img src={deleteImage} id="deleteImage" onClick={() => this.deleteOrder(idx)} /></td>
                        </tr>
                 
                    </tbody>
                    ))
                    }
                

                </Table>

 
        )
    }
}

export default withAuth0(Order)

