import category from "../../data/category";
import CategoryCard from "../cards/categoryCard";
import "../../styles/components/navCards/navCards.sass"

export default function NavCards() {
    return (
        <div className="navCardsContent">
            {category?.map((obj) => (
                <CategoryCard key={obj.name} text={obj.name} imageURl={obj.image} />
            ))}
        </div>
    );
}