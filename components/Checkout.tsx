import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FiLoader } from 'react-icons/fi'

const Checkout = ({cartTotal, fee, items, isLoading}:{cartTotal: number, fee: number, items: any, isLoading: boolean}) => {

    const [email, setEmail] = useState('');
    const [foodId, setFoodId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const router = useRouter()

    const handleCheckout = async (food: any) => {
        try {

            food.map((item: any) => {
                setFoodId(item.food.id)
                
            })

            const totalPrice = cartTotal + fee;

            if (foodId) {
                
                // Fetch the Paystack response after navigation
                const response = await fetch(`/api/payments/buyFood`, {
                method: "POST",
                body: JSON.stringify({
                    // email,
                    totalPrice,
                    foodId,
                    // restaurantId,
                }),
                headers: { "Content-Type": "application/json" }, 
                });
                const paystackResponse = await response.json();
                
                // Log the Paystack response
                // console.log('Paystack Response:', paystackResponse);
        
                if (paystackResponse.status == true) {
                await router.push(`${paystackResponse.data.authorization_url}`)
                }
            } else {
                // <EmailModal cta={food.cta} enteredEmail={enteredEmail} setEnteredEmail={setEnteredEmail}/>
                setIsModalOpen(true);
            }
        } catch (error) {
          console.error('Error navigating to food URL:', error);
          // Handle the error as needed
        }
    };

    return (
        <button
        disabled={cartTotal < 400}
        onClick={() => handleCheckout(items)}
        className={`w-fit px-4 py-2 ${cartTotal < 400 ? 'bg-gray-300 cursor-not-allowed' : 'border border-orange-600 hover:text-white hover:bg-orange-600'} mx-auto flex justify-center mt-4 rounded-md text-xl text-gray-700`}
        >
            {isLoading ? (
                <FiLoader className='w-4 h-4 animate-spin mr-1.5' />
            ) : null}
            Checkout
        </button>
    )
}

export default Checkout