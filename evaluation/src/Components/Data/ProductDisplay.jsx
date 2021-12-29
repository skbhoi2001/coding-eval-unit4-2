import {
    Card,
    CardContent,
    Typography,
    Divider,
    Paper,
    Button
  } from "@material-ui/core";
  import { makeStyles } from '@material-ui/core/styles';
  const useStyles = makeStyles(theme => ({
    title: {
        display:"flex",
      flexDirection:"row"
    },
    head:{
      backgroundColor:"#C6E5DA",
      marginTop:"50px",
      display:"flex",
      flexDirection:"column",
      gap:"20px",
      
      border:"1px solid black"
    },
    btn:{
        width:"20%",
        margin:"auto",
        backgroundColor:"#436F5F",
        fontWeight:"700",
        color:"white"
    }
  }));
function ProductDisplay({id,name,country,image,price,description,handleAdd}){
    const classes = useStyles();
    return(
        // <div>
        //     <div>
        //         <img src={image} alt="" />
        //     </div>
        //     <div>
        //         <div>{name}</div>
        //         <div>{price}</div>
        //         <div>{country}</div>
        //         <div>{description}</div>
        //     </div>
        // </div>

        <Card className={classes.head}>
            <CardContent>
                <Typography>{name}</Typography>
            </CardContent>
            <Divider/>
            <CardContent className={classes.title}>
                <img style={{width:"200px",height:"200px"}} src={image} alt={name} />
                <div style={{textAlign:"left",width:"50%",margin:"auto"}}>
                    <h2>Cost : ₹{price}</h2>
                     <h5>Country of Origin : {country}</h5> 
                     <p>{description}</p>  
                </div>
            </CardContent>
            <Button onClick={()=>handleAdd(id,name,price)} className={classes.btn}>Add To Cart</Button>
        </Card>
    )
}

export default ProductDisplay