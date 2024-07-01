import "../../../styles/components/cards/productCard.sass"
interface ProductCardProps {
    img: string,
    description: string,
    price: number,
    onClick: () => void,
}

export default function ProductCard({img, description, price, onClick}: ProductCardProps) {
    return (
        <div className="productCardContainer">
            <article className="productCardContent">
                <figure>
                    <img src={img} alt="Imagem do produto" />
                </figure>
                <div>
                    <p className="productDescription">{description}</p>
                    <p className="productPricing">
                        <span className="oldPrice">{(price * 1.07).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        <span className="currentPrice">{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                    </p>
                    <p className="installment">ou 2x de {((price * 1.71)/2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} sem juros</p>
                    <p className="freeShipping">Frete grátis</p>
                    <button className="buyButton" onClick={onClick}>Comprar</button>
                </div>
            </article>
        </div>
    );
}