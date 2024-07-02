function Card(props){
return(
    <div className="card">
        <img src={props.img} className="card-img" alt="" />
        <div className="flex">
            <h3 className="title">{props.title}</h3>
            <div className={props.status == 'sold' ? "sold" : "available"}></div>
        </div>
     
        <p className="price">{props.price}</p>
        <p className="desc">{props.desc}</p>
    </div>
)
}
export default Card