import '../../styles/pages/home.sass';
import Banner from '../../components/banner';
import Divider from '../../components/divider';
import NavTable from '../../components/navTable';
import Carousel from '../../components/carousel';
import NavCards from '../../components/navCards';
import Showcase from '../../components/showcase';
import BrandCard from '../../components/cards/brandCard';

export default function Home() {
    return (
        <div>
            <Banner imageUrl="/banner.png">
                <h1>Venha Conhecer nossas <br />promoções</h1>
                <h2>50% Off nos produtos</h2>
                <button aria-label="Ver produto">Ver produto</button>
            </Banner>
            <section className="categorySection">
                <NavCards />
            </section>
            <Divider title="Produtos relacionados" />
            <NavTable />
            <section className="productSection">
                <Carousel />
            </section>
            <section className="partnersShowcaseSection">
                {[1, 2].map((item) => (
                    <Showcase key={item} imageUrl="/showcase.png" width="574px" height="350px" bdr="20px">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button aria-label="Confira">Confira</button>
                    </Showcase>
                ))}
            </section>
            <Divider title="Produtos relacionados" btn={true} />
            <section className="productsShowcaseSection">
                {[1, 2].map((item) => (
                    <Showcase key={item} imageUrl="/showcase.png" width="589.73px" height="284px" bdr="10px">
                        <h1>Produtos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button aria-label="Confira">Confira</button>
                    </Showcase>
                ))}
            </section>
            <Divider title="Navegue por marcas" line={false} />
            <section className="brandSection">
                {Array.from({ length: 5 }).map((_, index) => (
                    <BrandCard key={index} imgURL="/vtex-logo.png" alt="logo da VTEX" />
                ))}
            </section>
        </div>
    );
}
