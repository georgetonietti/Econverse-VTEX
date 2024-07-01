import { useEffect, useState } from 'react';
import '../../styles/components/carousel/productCarousel.sass';
import ProductCard from '../cards/productCard';
import ProductModal from '../modal/productModal';

interface ProductsProps {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function Carousel() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductsProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3333/api/products');
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Erro na requisição de produtos', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (product: ProductsProps) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const getVisibleCards = () => {
    return products.slice(currentIndex, currentIndex + cardsPerPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel">
      <button className="carousel__button" onClick={prevSlide} aria-label="Slide anterior">
        {'<'}
      </button>
      <div className="carousel__content" aria-live="polite">
        {getVisibleCards().map((product, index) => (
          <ProductCard
            key={index}
            img={product.photo}
            price={product.price}
            description={product.descriptionShort}
            onClick={() => handleCardClick(product)}
            aria-label={`Ver detalhes de ${product.productName}`}
          />
        ))}
        {selectedProduct && (
          <ProductModal
            isOpen={isOpen}
            onClose={closeModal}
            product={selectedProduct}
          />
        )}
      </div>
      <button className="carousel__button" onClick={nextSlide} aria-label="Próximo slide">
        {'>'}
      </button>
    </div>
  );
}
