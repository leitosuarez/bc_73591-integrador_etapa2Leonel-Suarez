import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <main>
    <section className="nosotros-section">

      <div className="nosotros-info">

          <div className="nosotros-info__titulo">
            <h1>Sobre Nuestra Empresa</h1>
          </div>
          <p className="nosotros-info__info">En TWK Motors nos apasionan las motos y la libertad que representan. Ofrecemos modelos de alta calidad, asesoramiento personalizado y un servicio excepcional. Nuestro compromiso es ayudarte a encontrar la moto perfecta, ya sea para la ciudad o aventuras largas. ¡Tu próxima moto te espera aca! ​</p>
          <button type="submit" className="nosotros-info__button">Registrarme</button>

      </div> 

      <div className="nosotros-services">
          <h1 className="nosotros-services__title">Nuestros Servicios</h1>

          <div className="nosotros-services__item">
             <i className="fa-solid fa-handshake fa-2xl" ></i> 
            <div>
              <h3>Garantia Del Vendedor</h3>
              <p>Ofrecemos garantía en cada moto vendida, asegurando calidad y confianza. Nos comprometemos a resolver cualquier inconveniente, brindando respaldo y tranquilidad en cada compra realizada en nuestra concesionaria. </p>
            </div>
          </div>

          <div className="nosotros-services__item">
            <i className="fa-solid fa-screwdriver-wrench fa-2xl" /* style="color: #d41c23;" */></i> 
            <div>
              <h3>Servicio De Mantenimiento</h3>
              <p>Contamos con un equipo especializado para mantener tu moto en óptimas condiciones. Ofrecemos mantenimiento preventivo, reparaciones y diagnósticos para garantizar tu seguridad y el mejor rendimiento.</p>
            </div>
          </div>

          <div className="nosotros-services__item">
            <i className="fa-solid fa-shield fa-2xl" /* style="color: #d41c23;" */></i> 
            <div>
              <h3>Seguros Y Mas...</h3>
              <p>Protege tu moto con nuestros seguros personalizados. Ofrecemos coberturas completas, asistencia en ruta y otros beneficios adicionales para que solo te preocupes por disfrutar cada viaje.</p>
            </div>
          </div>

      </div> 

    </section>
  </main>
  )
}

export default Nosotros