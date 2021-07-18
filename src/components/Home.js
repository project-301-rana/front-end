import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from 'react-bootstrap';
import '../CSS/Home.css';
import recipe from './recipe.json';
import Modal from './recipeModal';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

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
      source: 'https://purepng.com/public/uploads/large/purepng.com-falafelfelafefalafelpattysandwich-1411527418192f1lwg.png'
    })
  }

  changeImage2 = () => {
    this.setState({
      source: 'https://cdn.hellofresh.com/us/cms/plans/Pork-Recipe-700x700.png'
    })
  }

  changeImage3 = () => {
    this.setState({
      source: 'https://www.chefmarcsmealprep.com/wp-content/uploads/2018/03/Moroccan-Chicken-Plate_grande.png'
    })
  }

  changeImage4 = () => {
    this.setState({
      source: 'https://www.searchpng.com/wp-content/uploads/2019/01/Healthy-Food-PNG-Picture.png'
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
              <img onClick={this.changeImage1} src="https://purepng.com/public/uploads/large/purepng.com-falafelfelafefalafelpattysandwich-1411527418192f1lwg.png" />
              <img onClick={this.changeImage2} src="https://cdn.hellofresh.com/us/cms/plans/Pork-Recipe-700x700.png" />
              <img onClick={this.changeImage3} src="https://www.chefmarcsmealprep.com/wp-content/uploads/2018/03/Moroccan-Chicken-Plate_grande.png" />
              <img onClick={this.changeImage4} src="https://www.searchpng.com/wp-content/uploads/2019/01/Healthy-Food-PNG-Picture.png" />
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
              src="https://qtmd.org/wp-content/uploads/2019/07/howcuttingdo.jpg"
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
            <Card className="card" style={{ width: '20rem', margin: '3rem' }}>
              <Card.Img className="img" variant="top" src={item.image} />
              <Card.Body>
                <p>{item.title} </p>
              </Card.Body>
              <Button onClick={() => this.recipeModal(idx)} variant="primary">See full recipe</Button>
            </Card>
          ))}

          {/* <Card className="card">
            <Card.Img className="img" src="https://www.thespruceeats.com/thmb/iCMJZTL8cKjtlNBJrRDeA_SYpGY=/2980x2980/smart/filters:no_upscale()/fresh-strawberry-cake-3051498-hero-01-ffd76a916178427c8dea864ef111952b.jpg" />
            <p> Strawberry cake</p>
            <Button onClick={this.recipeModal} variant="primary">See full recipe</Button>
          </Card>

          <Card className="card">
            <Card.Img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlrgs8pTF1KEKlysmx3zxF59z4zXlQKQitA&usqp=CAU" />
            <p> Chinese noodles </p>
            <Button onClick={this.recipeModal} variant="primary">See full recipe</Button>
          </Card>

          <Card className="card">
            <Card.Img className="img" src="https://natashaskitchen.com/wp-content/uploads/2019/02/Greek-Salad.jpg" />
            <p>Greek Salad</p>
            <Button onClick={this.recipeModal} variant="primary">See full recipe</Button>
          </Card> */}
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
