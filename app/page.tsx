import FoodCategory from "@/components/FoodCategory";
import HeroPage from "@/components/HeroPage";
import RestaurantCard from "@/components/RestaurantCard";

export default function Home() {
  return (
    <main className="w-full text-center">
      
      {/* <HeroPage/> */}

      <RestaurantCard/>

      <FoodCategory/>
    </main>
  );
}
