import { Route } from "react-router-dom";
import CartItem from "../Pages/CartItem";
import Home from "../Pages/Home";


function Routes() {
  return (
    <>
      <Route exact path="/">
       <Home/>
      </Route>
      <Route exact path="/cartitem">
        <CartItem/>
      </Route>
    </>
  );
}

export default Routes;