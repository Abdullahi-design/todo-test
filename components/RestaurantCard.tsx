import { restaurants } from '../data'
import { FaBowlFood } from "react-icons/fa6";

const RestaurantCard = () => {
    return (
        <div className="container mx-auto px-4 py-8">  {/* Added container for layout */}
            <h1 className='text-2xl my-4 text-right text-green-600 font-bold tracking-widest'>Location: Zaria</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-end'>  {/* Use grid for responsiveness */}
                {restaurants.map(restaurant => (
                    <div key={restaurant.id} className='bg-white shadow-lg p-4 px-12 rounded-lg'>
                        <span className=''><FaBowlFood className='w-12 h-12 text-center mx-auto text-orange-600' /></span>
                        <h1 className='text-gray-600'>{restaurant.name}</h1> 
                        <h1 className='text-left'>Status: <span className='text-green-600'>Active</span> </h1>
                        <h1 className='text-left'>Category Of food: {" "}
                            <span className='text-green-600'>
                                {restaurant.dishes.length}
                            </span> 
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantCard
