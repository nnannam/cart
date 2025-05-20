import { GoodsItem } from "./GoodsItem";

export function GoodsList(props){
    const {goods = [], addToBasket} = props;

    if(!goods.length) {
        return <h3>Not Found</h3>
    }

    return(
        <div className="goods">
            {goods.map((item, index) => (
                <GoodsItem key={index} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    )
}