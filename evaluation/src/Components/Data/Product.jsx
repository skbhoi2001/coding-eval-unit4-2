import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import axios from "axios"
import ProductDisplay from "./ProductDisplay";
import { addData, getData } from "./api";
function Product(){
    const dispatch = useDispatch();
    const [product,setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
   
    const handleAdd = (id,name,price)=>{
        const action = addData({
            id:id,
            price:price,
            name:name
        })
        dispatch(action)
    }
    const handleDisplay = () =>{
        return getData()
            .then((res)=>{
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(()=>{
        handleDisplay()
    },[])
    return(
        <div>
            {
                product.map((item)=>{
                    return <ProductDisplay
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        country= {item.country_of_origin}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                        handleAdd={handleAdd}
                    />
                })
            }
        </div>
    )
}

export default Product