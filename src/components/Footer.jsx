import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">

          <div className="footer-categories">

              <div className="footer-categories__item footer-categories__first-item" >
                  <h3>Redes Sociales</h3>
                  <p>Conéctate con nosotros en nuestras redes sociales. Descubre las últimas novedades, ofertas exclusivas y comparte tu pasión por las motos con nuestra comunidad. </p>
                  <div>
                    <div className="footer-categories__icono">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="footer-categories__icono">
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="footer-categories__icono">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="footer-categories__icono">
                      <i className="fa-brands fa-pinterest"></i>
                    </div>
                  </div>
              </div>
              <div className="footer-categories__item">
                  <h3>Categorias</h3>
                  <span>Enduro</span>
                  <span>Pista</span>
                  <span>Economicas</span>
                  <span>Dos Tiempos</span>
                  <span>Con Inyeccion</span>
              </div>
              <div className="footer-categories__item">
                  <h3>Informacion</h3>
                  <span>Sobre nosotros</span>
                  <span>Contactanos</span>
                  <span>Politica de Privacidad</span>
                  <span>Ordenes y Devoluciones</span>
                  <span>Terminos y Condiciones</span>
              </div>
              <div className="footer-categories__item">
                  <h3>Servicio</h3>
                  <span>Mi cuenta</span>
                  <span>Ver Carrito</span>
                  <span>Traquear mi Orden</span>
                  <span>Ayuda</span>
              </div>

          </div> 

          <div className="footer-pay-copy">
              <div className="footer-pay">
                <i className="fa-brands fa-cc-visa fa-2xl"></i>
                <i className="fa-brands fa-cc-paypal fa-2xl"></i>
                <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
                <i className="fa-brands fa-cc-amazon-pay fa-2xl"></i>
              </div>

              <div className="footer-copy">
                <p>Copyright ©2025 All rights reserved | This page was made with ♡ by <span>LeitoSuarez</span></p>
              </div>

          </div>

      </section> 
    </footer>
  )
}

export default Footer