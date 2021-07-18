import React, { Component } from 'react'
import { Card, Button, Form, Dropdown, ButtonGroup } from 'react-bootstrap'
import axios from 'axios';
import '../CSS/Menu.css';
import { withAuth0 } from '@auth0/auth0-react';
import recipe from './recipe.json';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodData: [],
            searchQuery: '',
            showFood: false,
            index: 0,
            title: '',
            image: '',
            orders: [],

        }
    }

    componentDidMount = async () => {
        try {
            // const url = `http://localhost:3001/getDataAPI?query=${this.state.searchQuery}`;
            const url = `${process.env.REACT_APP_SERVER}/getDataAPI?query=Cake`;
            const food = await axios.get(url);
            this.setState({
                foodData: food.data,
                showFood: true
            })
        } catch {
            this.setState({
                showFood: false,
            })
        }

    }


    getFood = async (e) => {
        e.preventDefault();
        try {
            // const url = `http://localhost:3001/getDataAPI?query=${this.state.searchQuery}`;
            const url = `${process.env.REACT_APP_SERVER}/getDataAPI?query=${this.state.searchQuery}`;
            const food = await axios.get(url);
            this.setState({
                foodData: food.data,
                showFood: true
            })
        } catch {
            this.setState({
                showFood: false,
            })
        }

    }

    updateSearchQuery = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    // Create new order and send it to the database
    newOrder = async (index) => {


        const foodOrder = {
            email: this.props.auth0.user.email,
            title: this.state.foodData[index].title,
            image: this.state.foodData[index].image
        }
        console.log('order', foodOrder.title);

        try {
            // let url = `http://localhost:3001/addOrder`;
            let url = `${process.env.REACT_APP_SERVER}/addOrder`;
            const order = await axios.post(url, foodOrder);
        } catch {
            console.log('error')
        }
    }


    render() {
        return (



            <div style={{display:'flex'}}>
               

                <Form className="form" onSubmit={this.getFood}>

                    <div className="selectContainer">
                        {/* The Main dish */}
                        
                        <Form.Group className="search" controlId="formBasicEmail">
                            <Form.Control style={{ width: '10rem'}} placeholder="Search" type="text" onChange={this.updateSearchQuery}  />
                        </Form.Group>

                        <Form.Group  >
                            <Form.Control className="select" as="select" custom onClick={this.getFood} onChange={this.updateSearchQuery}>
                                <option value='Pasta'>Main dish</option>
                                <option value='Pasta'>Pasta</option>
                                <option value='Chicken'>Chicken</option>
                                <option value='Fish'>Fish</option>
                                <option value='Rice'>Rice</option>
                            </Form.Control>
                        </Form.Group>
                        {/* Sweets */}

                        <Form.Group >
                            <Form.Control className="select" as="select" onClick={this.getFood}  custom onChange={this.updateSearchQuery}>
                                <option>Sweets</option>
                                <option value='Tart'> Tart</option>
                                <option value='Cake '>Cake </option>
                                <option value='Donuts'>Donuts</option>
                                <option value='Cookies  '>Cookies</option>
                                <option value='Cup cake'>Cup cake</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Drinks */}
                        <Form.Group>
                            <Form.Control className="select" as="select" onClick={this.getFood}  custom onChange={this.updateSearchQuery}>
                                <option>Drinks</option>
                                <option value='Detox'>Detox</option>
                                <option value='Tea'>Tea</option>
                                <option value='Smoothie'>Smoothie</option>
                                <option value='Fish'>Fish</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Drinks */}
                        <Form.Group>
                            <Form.Control className="select" as="select" onClick={this.getFood}  custom onChange={this.updateSearchQuery}>
                                <option>Drinks</option>
                                <option value='Detox'>Detox</option>
                                <option value='Tea'>Tea</option>
                                <option value='Smoothie'>Smoothie</option>
                                <option value='Fish'>Fish</option>
                            </Form.Control>
                        </Form.Group>

                    </div>
                </Form>



                {/* Cards */}
                <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap'}}>
                    {this.state.showFood &&
                        this.state.foodData.map((item, index) => (
                            <Card className="APICard" style={{ width: '15rem', margin: '3rem' }}>
                                <Card.Img className="image" variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title >{item.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button onClick={() => this.newOrder(index)} className="but1" variant="primary">Order now</Button>
                                    {/* <img class="imageZoom" src="https://image.flaticon.com/icons/png/512/117/117453.png"/> */}
                                    <Button className="but2" variant="primary">View product</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }

                </div>

            </div>
        )
    }
}

export default withAuth0(Menu)
