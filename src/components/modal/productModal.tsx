import { useState } from "react";
import "../../styles/components/modal/productModal.sass"

interface ProductModalProps {
    isOpen: boolean,
    onClose: () => void,
    product: ProductsProps | null;
}

interface ProductsProps {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    const [count, setCount] = useState(1)

    const sumCount = () => {
        setCount(count + 1);
      }
    
    const subCount = () => {
        if(count == 1){
            return
        }
        setCount(count - 1);
      }

    return (
        <>
            {isOpen && (
                <div className="modalBackground">
                    <article className="modalContainer">
                        <div className="cancel">
                            <button onClick={onClose}>X</button>
                        </div>
                        <div className="modalContent">
                            <figure className="imageContainer">
                                <img src={product?.photo} alt="logo" />
                            </figure>
                            <div className="detailsContainer">
                                <h2 className="productName">{product?.productName}</h2>
                                <h2 className="productPrice">{product?.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
                                <p className="productDescription">{product?.descriptionShort}</p>
                                <details className="productDetails">
                                    <summary>{'Veja mais detalhes do produto '}</summary>
                                    <p>{product?.descriptionShort}</p>
                                </details>
                                <div className="productAmount">
                                    <button onClick={subCount}>-</button>
                                    <p>{count}</p>
                                    <button onClick={sumCount}>+</button>
                                </div>
                                <button className="buyButton">COMPRAR</button>
                            </div>
                        </div>
                    </article>
                </div>
            )}
        </>
    );
}