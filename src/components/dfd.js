<img className="backgroundImage" alt="background" src="https://t3.ftcdn.net/jpg/02/54/20/88/360_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg" />

<div className="menuImages" >

    {recipe.map((item, idx) => (
        <Card className="cardImage">
            <Card.Img className="mainCardImages" variant="top" src={item.image} />
            <Card.Body>
                <p>{item.title} </p>
            </Card.Body>
            {/* <Button onClick={() => this.recipeModal(idx)} variant="primary">See full recipe</Button> */}
        </Card>
    ))}
</div>   