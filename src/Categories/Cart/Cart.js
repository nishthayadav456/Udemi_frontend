import React, { useEffect,useState} from 'react'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';
import './Cart.css'
import Footer from '../../Footer/Footer';
const Cart = () => {
    const [cartdata,setCartData]=useState()
    const [totalprice,settotalPrice]=useState(0)
    useEffect(() => {
            let value = 0;
            cartdata&&cartdata.map((d) => {
              return(
                value += d.price
              )
              
            })
            settotalPrice(value);
          }, [cartdata]);
          console.log(totalprice)


    useEffect(()=>{
        axios.get("http://localhost:4005/api/cartfind")
        .then((response)=>setCartData(response.data))

        .catch((error)=>console.log(error))
    },[])
        console.log(cartdata)

    const makePayment=async ()=>{
      const stripe = await loadStripe(
        "pk_test_51OFItISCdgFzkvVrT97f8wISsM8pcRcV5plNex0OQNGEuSXZVPU2ltSdZPMKYjbb9SEbHbUgqmrnBV8Ql3KdlZQl00kXWKpA80"
      );
      const body={
        Alldata:cartdata,
        total:totalprice

      }
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        "http://localhost:4005/paymentapi",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );
      await axios.post("http://localhost:4005/api/postlearning",cartdata)
      await axios.delete("http://localhost:4005/api/cartdelete")
   
      const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if(result.error) {
      console.log(result.error);
    }
    }    
  return (
    <div>
  
            <div>
              <h1>Shopping cart</h1><hr/>
            {cartdata&& cartdata.map((item,index)=>{
                    return(
                        <div  className="contents" key={index}>
                            
                            <img className='contentsimg'src={item.image} alt="not found"/>
                            <div className="content1">
                            <h5 style={{width:"40%"}}>{item.heading.slice(0,20)}</h5>
                            <button className="cartremove">Remove Cart</button>
                            </div>
                            <div>
                
                  </div>
                  <h2 className="price">₹{item.price}</h2>
                        </div>
                    )
                })
            }
           </div>
           <div className="totalitem">
          <h2>Total</h2>
          <h1>₹{totalprice}</h1>
          
        </div>
        <div className="buying">
          <button className='buybtn' onClick={makePayment}>Checkout</button>
        </div>
<Footer/>
    </div>
    
    
  )
}

export default Cart
