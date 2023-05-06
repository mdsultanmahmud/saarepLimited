import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useState } from 'react';

const PaypalCheckoutBtn = (props) => {
    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    console.log(product)

    const approvedOrder = (orderId) => {
        console.log("this is order id:", orderId)
        setPaidFor(true)
    }

    if (paidFor) {
        alert("Thanks for purchase")
    }

    if (error) {
        alert(error)
    }

    return <div className='z-index-0'> 
        <PayPalButtons
            style={{
                color: "gold",
                layout: "horizontal",
                tagline: true,
                shape: "rect",
                height: 50,
            }}

            onClick={(data, actions) => {
                const alreadyBought = false
                if (alreadyBought) {
                    setError("You already take this membership!!")
                    return actions.reject()
                }
                else {
                    return actions.resolve()
                }
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.name,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}

            onApprove={async (data, actions) => {
                const order = await actions.order.capture()
                console.log("order", order)
                approvedOrder(data.orderID)

            }}
            onCancel={() => {
                alert("order cancel")
            }}
            onError={(err) => {
                console.log("paypal payment errros", err)
                setError(err)
            }}


        >

        </PayPalButtons>
    </div>
};

export default PaypalCheckoutBtn; 