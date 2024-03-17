import FoodInfo from "@/components/FoodInfo";
import { restaurants } from "@/data";

export async function generateStaticParams() {
    return restaurants.map((restaurant) => (
        restaurant.dishes.map((dishes) => ({
            params: {
                id: dishes.id,
            },
        }))
    ));
}

export async function getFood(id: string) {
    const foundDish = restaurants.flatMap((restaurant) => (
      restaurant.dishes.find((dish) => dish.id === id)
    ));
    return foundDish; // Return the found dish, not an array
}

export default async function Page({ params }: { params: any }) {
    const dish = await getFood(params.id);  

    if (!dish) {
        // Handle the case when the dish is not available
        return <div>Food not found</div>;
    }

    return (
        <FoodInfo 
        // key={dish.id}
        dish={dish}
        />
    );
}
