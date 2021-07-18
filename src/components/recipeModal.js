import React, { Component } from 'react'
import { Modal, Button , Card } from 'react-bootstrap'
import recipe from './recipe.json'
export class OrderModal extends Component {

    handleClose = ()=>{
        this.props.handleClose();
    }

    render() {
        return (
            <div >

                <Modal  show={this.props.showRecipeModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{recipe[this.props.recipeIndex].title}</Modal.Title>
                    </Modal.Header>
                    <Card.Img style={{width:'400px', height:'350px', display:'block', margin:'auto'}} src={recipe[this.props.recipeIndex].image} />
                    <Modal.Body>{recipe[this.props.recipeIndex].description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default OrderModal
