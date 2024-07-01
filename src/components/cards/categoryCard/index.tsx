import "../../../styles/components/cards/categoryCard.sass"

interface CategoryCardProps {
    text: string
    imageURl: string
}

export default function CategoryCard({imageURl, text}: CategoryCardProps) {
   return ( 
       <div className="categoryCardContent">
            <div>
                <img src={imageURl}/>
            </div>
            <p>{text}</p>
       </div>
   );
}