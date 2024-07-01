import "../../../styles/components/cards/brandCard.sass"

interface BrandProps {
    imgURL: string,
    alt?: string
}

export default function BrandCard({ imgURL, alt }: BrandProps) {
   return ( 
        <figure className="brandContainer">
            <img src={imgURL} alt={alt} />
        </figure>
   );
}