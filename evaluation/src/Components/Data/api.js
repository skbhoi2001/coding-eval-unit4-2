import axios from "axios"

const getData = ()=>{
    const config ={
        url: "https://masai-react-assignment.herokuapp.com/unittest",
        method:"get"
    }
    return axios(config)
}

const addData = (id,name,price)=>{
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

const fetchCart = ()=>{
    const config ={
        url: "https://masai-react-assignment.herokuapp.com/test",
        method:"get"
    }
    return axios(config)
}

export {getData,addData,fetchCart}