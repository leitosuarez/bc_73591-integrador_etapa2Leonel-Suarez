import useTitulo from '../hooks/useTitulo'
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')
  
  return (
    <main>
        <section className="form-container">
        
          <div className="form-contact">

            <div className="form-contact__header">
              <h2>Contactate con nosotros</h2>
            </div>

              <form action="" className="form-contact__form">
                <div className="form-contact__input">
                  <label htmlFor=""><i className="fa-regular fa-user" /* style="color: #c9c9c9;" */></i></label>
                  <input type="text" placeholder="Nombre completo"/>
                </div>

                <div className="form-contact__input">
                  <label htmlFor=""><i className="fa-regular fa-envelope" /* style="color: #c9c9c9;" */></i></label>
                  <input type="email" placeholder="Eg-example@email.com"/>
                </div>

                <div className="form-contact__input">
                  <label htmlFor=""><i className="fa-solid fa-mobile-screen-button" /* style="color: #c9c9c9;" */></i></label>
                  <input type="text" placeholder="Eg +1 800 000000"/>
                </div>

                <div className="form-contact__input">
                  <label htmlFor=""><i className="fa-regular fa-comment" /* style="color: #c9c9c9;" */></i></label>
                  <textarea name="" id="" placeholder="Tus comentarios..."></textarea>
                </div>

                <button type="submit" className="form-contact__button">Enviar Ahora</button>
              </form> 

          </div>

          <div className="form-info">

            <div className="form-info__info-header">

                <div className="form-info__item">
                  <div>
                    <i className="fa-solid fa-phone" /* style="color: #ffffff;" */></i>
                    <span>Telefono</span>
                  </div>
                  <p>+54 351-8080574</p>
                </div>

                <div className="form-info__item">
                  <div>
                    <i className="fa-solid fa-location-dot" /* style="color: #ffffff;" */></i>
                    <span>Ubicación</span>
                  </div>
                  <p>Alta Córdoba, Córdoba Capital</p>
                </div>

                <div className="form-info__item">
                  <div>
                    <i className="fa-solid fa-envelope" /* style="color: #ffffff;" */></i>
                    <span>Correo</span>
                  </div>
                  <p>twkmotores@gmail.com</p>
                </div> 

            </div>  

            <div className="form-info__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728.365020972863!2d-64.1803783201539!3d-31.38363455071517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432984492fed55b%3A0xbe137899630e92c0!2sInstituto%20Atl%C3%A9tico%20Central%20C%C3%B3rdoba%20(I.A.C.C.)!5e0!3m2!1ses-419!2sar!4v1739410562866!5m2!1ses-419!2sar" width="100%" height="100%" /* style="border:0;" */ allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div> 
          
        </section> 

      </main>
  )
}

export default Contacto