import FoodItem from '@/app/food_objects'
import PageTitle from '@/app/page_title'

export default function Appetizers(){
    return(
        <div>
            <PageTitle text="Appetizerz" />
            <p className="prompt-text">Below are the best appetizers</p>
            <ul>
                <FoodItem name="Jumbo Cheese Curds" />
                <FoodItem name="Purple Nurples" />
                <FoodItem name="Gyoza" />
            </ul>
        </div>
    );
}