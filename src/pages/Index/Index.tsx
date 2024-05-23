import SponsorsBar from "../../components/SponsorsBar/SponsorsBar";
import "./Index.css";
import mf3Logo from "../../assets/mf3-logo.svg";
import aboutUsPicture from "../../assets/about-us-picture.png";

function Index() {
  return (
    <>
      <section className="hero">
        <h1>Bienvenidos a la casa del Functional Fitness en México</h1>
        <p className="subtitle mt-8">
          Entérate del Calendario 2024 en nuestras redes sociales y participa en
          nuestros eventos.
        </p>
        <p>
          Participa en nuestros eventos online y asegura tu lugar en los Eventos
          Regionales de la MF3.
        </p>
        <a className="button">Comenzar</a>
      </section>
      <div className="absolute inset-x-1/4 top-[750px] z-10">
        <SponsorsBar />
      </div>
      <div className="section-wrapper bg-black">
        <section className="about-us">
          <div>
            <h2>¿Quiénes somos?</h2>
            <div className="flex flex-col gap-2 mb-16">
              <p className="font-semibold	text-lg">
                Bienvenidos a la <span className="text-gold">MF3</span>, tu casa
                para todo lo relacionado con el Functional Fitness y la huella
                que dejarás en la disciplina.
              </p>
              <p>
                La Federación somos un equipo multidisciplinario, dedicados a la
                trascendencia del deporte, y los participantes.
              </p>
              <p>
                Somos un organismo que estandariza y regula el deporte en muchos
                ámbitos, desde la concepción del deporte a la realización de
                eventos cerca de ti.
              </p>
            </div>
            <p className="font-semibold text-gold text-lg">
              Nuestra aportación al deporte la podrás ver en:
            </p>
            <br />
            <ul className="list-disc list-inside">
              <li>Sistema de Jueces Regulados por la Federación</li>
              <li>Sistemas de Puntuación Regulados</li>
              <li>
                Sistemas deportivos estandarizados con base en los lineamientos
                de la Federación Internacional de Functional Fitness IF3
                (Creación de Manuales Deportivos, de Jueceo y de Entrenamiento,
                así como Ética y Responsabilidad en el Deporte)
              </li>
              <li>
                Calendarización deportiva para crear y dar oportunidad a eventos
                existentes de formar parte del camino a los Nacionales MF3, que
                determinan quienes serán los delegados nacionales en eventos
                internacionales.
              </li>
              <li>
                Estandarización de Eventos Online y Presenciales. (Sistemas de
                Jueceo y Puntuación, así como requerimientos mínimos para el
                desempeño del deporte y los eventos físicos u online de una
                manera satisfactoria y justa)
              </li>
            </ul>
          </div>
          <div className="relative min-w-max w-[625px] flex justify-end -z-10">
            <img
              src={mf3Logo}
              className="absolute -bottom-20 right-[322px] h-[179px]"
            />
            <img src={aboutUsPicture} className="" />
          </div>
        </section>
      </div>
      <div className="section-wrapper bg-gray-6">
        <section className="community">
          <h2>Forma parte de la comunidad:</h2>
          <div className="grid grid-cols-3">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
      <div className="section-wrapper bg-gray-6 bg-[url('/roadmap-bg.png')]">
        <p>
          Comienza tu historia en <span>MF3</span> y sé tu mejor versión
        </p>
        <p>
          Si quieres formar parte de la MF3, tu primera prueba será medirte en
          los clasificatorios (Qualifiers MF3) que se están llevando a cabo en
          todo el país.
        </p>
        <p>
          Inscríbete y participa contra otros deportistas que buscan abrirse
          camino en el Functional Fitness, gracias a su formato Online, podrás
          participar desde el Box en el que estás inscrito y así ver en donde
          estás en el mundo del F.F. de México.
        </p>
      </div>
      <div className="section-wrapper bg-gray-6 relative z-0 after:-z-10 after:absolute after:w-full after:h-full after:bg-gray-5/75 after:mix-blend-multiply">
        <p>¡No te quedes atrás y síguenos!</p>
      </div>
    </>
  );
}

export default Index;
