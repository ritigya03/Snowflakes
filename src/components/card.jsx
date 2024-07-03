function Card(props){
    function orderHandler(){
        let amount = 0
        if(props.price > 3000000){
            amount = props.price
        }
        else{
            amount = props.price + 1000
        }
        console.log('Order successful for',props.title)
        console.log('Total amount',amount)
    }
return(
    <div className="card" onClick={orderHandler}>
        <div className="card-header">
        <img src={props.img} className="card-img" alt="" />
        <div className={props.price >= 3000000? "premium":"none"}>Premium</div>
        </div>
        
        <div className="flex">
            <h3 className="title">{props.title}</h3>
            {/* <div className={props.status == 'sold' ? "sold" : "available"}></div> */}
        </div>
     
        <p className="price">{props.price}</p>
        <p className="desc">{props.desc}</p>
    </div>
)
}
export default Card