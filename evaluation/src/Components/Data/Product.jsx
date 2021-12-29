import { useEffect, useState } from "react"
import axios from "axios"
import ProductDisplay from "./ProductDisplay";
function Product(){
    const [product,setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const getData = ()=>{
        const config ={
            url: "https://masai-react-assignment.herokuapp.com/unittest",
            method:"get"
        }
        return axios(config)
    }
    const handleAdd = (id,name,price)=>{
        const payload = {
            id,
            name,
            price
        }
        const con ={
            url: `https://masai-react-assignment.herokuapp.com/test`,
            method:"post",
            data:payload
        }
        return axios(con)
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