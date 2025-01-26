function Card(props){
    return (
        <div className="card">
            <img src="https://bummer.in/cdn/shop/files/42-0299-Copy_b24b5791-834e-40fc-b108-18f89b9026b9.jpg?v=1716447854&width=533" height="200px" width="200px" />
            <div className="card-desc" style={{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <p>Price: {props.price}</p>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;