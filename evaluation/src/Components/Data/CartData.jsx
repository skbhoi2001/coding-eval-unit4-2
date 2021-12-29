import { Box } from "@material-ui/core"
import { useEffect, useState } from "react"
import { fetchCart } from "./api"
import CartProduct from "./CartProduct"
    
function CartData(){
    const [product,setProduct] = useState([])
    const fetchData = () =>{
        return fetchCart()
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        <div style={{marginTop:"100px"}}>
            {
                product.map((item)=>{
                    <CartProduct
                        id={item.id}
                        name={item.name}
                        price={item.price}
                    />
                })
            }
        </div>
        </>
    )
}

export default CartData