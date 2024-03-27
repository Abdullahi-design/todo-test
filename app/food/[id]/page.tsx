import FoodInfo from "@/components/FoodInfo";
import { restaurants } from "@/data";

export async function generateStaticParams() {
    try {
        return restaurants.map((restaurant) => (
            restaurant.dishes.map((dishes) => ({
                params: {
                    id: dishes.id,
                },
            }))
        ));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

interface params {
    id: string
}
export default async function Page({ params }: { params: params }) {

    try {
        const dish = restaurants.flatMap((restaurant) => (
            restaurant.dishes.find((dish) => dish.id === params.id)
        ));

        if (!dish) {
            // Handle the case when the dish is not available
            return <div>Food not found</div>;
        }
    
        return (
            <FoodInfo dish={dish} />
        );
        
    } catch (error) {
        console.error('Failed to get Food:', error);
        return null;
    }
}
