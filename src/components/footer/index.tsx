import "../../styles/components/footer/footer.sass"
import { BiLogoFacebook as Facebook, BiLogoInstagram as Instagram, BiLogoYoutube as Youtube } from "react-icons/bi";

export default function Footer() {
    const iconsPayment = ["visa", "elo", "alelo", "dinners", "ifood", "mastercard", "pix", "amex", "ticket", "sodexo"]
   return ( 
       <footer>
        <div className="footerContainer">
            <div className="footerContent">
                <article className="about">
                    <h2>Sobre nós</h2>
                    <div className="options">
                        <p>CONHEÇA</p>
                        <p>COMO COMPRAR</p>
                        <p>INDICAÇÃO E DESCONTO</p>
                    </div>
                    <div className="icons">
                        <Facebook />
                        <Instagram />
                        <Youtube />
                    </div>
                </article>
                <article className="info">
                    <h2>INFORMAÇÕES ÚTEIS</h2>
                        <div className="options">
                            <p>FALE CONOSCO</p>
                            <p>DÚVIDAS</p>
                            <p>PRAZOS DE ENTREGA</p>
                            <p>FORMAS DE PAGAMENTO</p>
                            <p>POLÍTICA DE PRIVACIDADE</p>
                            <p>TROCAS E DEVOLUÇÕES</p>
                        </div>
                </article>
                <article className="payment">
                    <h2>FORMAS DE PAGAMENTO</h2>
                    <div>
                        {iconsPayment.map((item, index) => (
                                <img key={index+1} src={`/${item}.png`} alt={`Ícone do cartão ${item}`} />
                            ))}
                    </div>
                </article>
            </div>
            <div className="footerCard">
                <p className="title">
                    Cadastre-se e Receba nossas <br/>
                    <span>novidades e promoções</span>
                </p>
                <p className="details">
                    Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum     
                </p>
                <form>
                    <input type="email" placeholder="SEU E-MAIL"/>
                    <button type="submit">OK</button>
                </form>
            </div>
        </div>
        <div className="footerRights">
            <div className="footerCopy">
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            </div>
            <div className="icons">
                <img src="/econverse-logo-white.png" alt="Logo Econverse"/>
                <img src="/vtex-logo-white.png" alt="Logo VTEX"/>
            </div>
        </div>
       </footer>
   );
}