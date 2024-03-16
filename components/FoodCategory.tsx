import { restaurants } from '@/data'
import { FaBowlFood } from "react-icons/fa6";

const FoodCategory = () => {
  return (
    <div>
        <h1 className='text-2xl my-4 text-orange-600 font-bold tracking-widest'>Buy Food</h1>

        <div className='gap-4 grid grid-cols-3'>
            {restaurants.map((restaurant) => (
                restaurant.dishes.map((dish, index) => (
                    <div key={index} className='bg-white shadow-lg p-4 px-12'>
                        <span className='bg-red-300'><FaBowlFood className='w-48 h-48 text-center mx-auto text-orange-600' /></span>
                        <h1 className='text-gray-600'>{dish.name}</h1> 
                        <h1 className='text-left'>Status: <span className='text-green-600'>Active</span> </h1>
                        <h1 className='text-left'>Category Of food: {" "}
                            <span className='text-green-600'>
                                {restaurant.dishes.length}
                            </span> 
                        </h1>
                        <button className='text-white bg-orange-600 px-8 p-2 rounded-md mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150'>Buy</button>
                    </div>
                ))
            ))}
        </div>
    </div>
  )
}

export default FoodCategory