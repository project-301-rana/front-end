import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from 'react-bootstrap';
import '../CSS/Home.css';
import recipe from './recipe.json';
import Modal from './recipeModal';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import food from '../images/food.jpg';

class MyFavoriteBooks extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      // source:'http://www.pngall.com/wp-content/uploads/2016/06/Healthy-Food-PNG-Pic.png'
      source: 'https://purepng.com/public/uploads/large/purepng.com-falafelfelafefalafelpattysandwich-1411527418192f1lwg.png',
      recipeData: recipe,
      recipeIndex: 0,
      showRecipeModal: false,
      usersData:[],
    }
  }

  changeImage1 = () => {
    this.setState({
      source: pic1
    })
  }

  changeImage2 = () => {
    this.setState({
      source: pic2
    })
  }

  changeImage3 = () => {
    this.setState({
      source: pic3
    })
  }


  recipeModal = async (idx) => {
    await this.setState({
      recipeIndex: idx,
      showRecipeModal: true
    })
    console.log(this.state.showRecipeModal)
  }

  handleClose = () => {
    this.setState({
      showRecipeModal: false
    })
  }

 

  render() {
    return (
      <>
        <div className="firstDiv">
          <section className="firstSec">
            <h1>Resturant & Cafe</h1>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque?
            </p>
            <button>LEARN MORE </button>
            <section className="decondSec">
              <img onClick={this.changeImage1} src={pic1} />
              <img onClick={this.changeImage2} src={pic2} />
              <img onClick={this.changeImage3} src={pic3} />
            </section>
          </section>


          <section className="thirdSec">
            <img style={{ width: '500px' }} src={this.state.source} />
          </section>


        </div>
        {/* Slide images */}
        <Carousel style={{ width: '65rem', margin: '0 auto' }}>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
              src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{ marginLeft: '-90px', opacity: '0.6', backgroundColor: 'black', width: '20rem', height: '6rem' }}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
              src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg"
              alt="Second slide"
            />

            <Carousel.Caption style={{ marginLeft: '-90px', opacity: '0.6', backgroundColor: 'black', width: '20rem', height: '6rem' }}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
              src={food}
              alt="Third slide"
            />

            <Carousel.Caption style={{ marginLeft: '-90px', opacity: '0.6', backgroundColor: 'black', width: '20rem', height: '6rem' }}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* The secone section */}
        <div className="secondDiv" style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }} >

          {this.state.recipeData.map((item, idx) => (
            <Card className="imagesCards" style={{ width: '20rem', margin: '3rem' }}>
              <Card.Img className="img" variant="top" src={item.image} />
              <Card.Body>
                <p>{item.title} </p>
              </Card.Body>
              <Button onClick={() => this.recipeModal(idx)} variant="primary">See full recipe</Button>
            </Card>
          ))}
        </div>

        <Modal
          recipeIndex={this.state.recipeIndex}
          showRecipeModal={this.state.showRecipeModal}
          handleClose={this.handleClose}
        />
      </>
    )
  }
}

export default MyFavoriteBooks;
