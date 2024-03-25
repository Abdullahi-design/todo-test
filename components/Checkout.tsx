import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import UserDetails from './UserDetails';

const Checkout = ({cartTotal, fee, items}:{cartTotal: number, fee: number, items: any}) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    const totalPrice = cartTotal + fee;
    const handleCheckout = async (foodItems: any | any[]) => {
        try {

            setIsLoading(true);

            const foodIds = foodItems.map((item: any) => item.food.id);

            if (foodIds && address && phoneNumber) {

                const formattedNumber = `234${phoneNumber.slice(1)}`;
                
                // Fetch the Paystack response after navigation
                const response = await fetch(`/api/payments/buyFood`, {
                method: "POST",
                body: JSON.stringify({
                    name,
                    phoneNumber: formattedNumber,
                    address,
                    totalPrice,
                    foodItems: foodItems,
                    // restaurantId,
                }),
                headers: { "Content-Type": "application/json" }, 
                });
                const paystackResponse = await response.json();
                
                // Log the Paystack response
                console.log('Paystack Response:', paystackResponse);
        
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
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div>
            <button
                disabled={isNaN(totalPrice) || totalPrice < 400}
                onClick={() => handleCheckout(items)}
                className={`w-fit px-4 py-2 ${isNaN(totalPrice) || totalPrice < 400 ? 'bg-gray-300 cursor-not-allowed' : 'border border-orange-600 hover:text-white hover:bg-orange-600'} mx-auto flex justify-center mt-4 rounded-md text-xl text-gray-700`}
            >
                {isLoading ? (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <FiLoader className='w-4 h-4 animate-spin mr-1.5' />
                    </div>
                    ) : (
                        'Checkout'
                    )
                }
                
            </button>
        {isModalOpen && (
            <UserDetails 
                address={address} 
                phoneNumber={phoneNumber} 
                name={name}
                setName={setName}
                setAddress={setAddress} 
                setPhoneNumber={setPhoneNumber} 
                setIsModalOpen={setIsModalOpen}
                isLoading={isLoading}
                onConfirm={() => handleCheckout(items)}
            />
          )}
        </div>
    )
}

export default Checkout