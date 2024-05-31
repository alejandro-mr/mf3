import styles from "./RegionsMap.module.css";
import regionsMapSvg from "../../../../assets/regiones.svg";
import redGlowSvg from "@/assets/red-glow.svg";

function RegionsMap() {
  return (
    <div className="relative w-full flex flex-col items-center z-0">
      <img
        src={redGlowSvg}
        className="absolute -top-[150px] -z-10 h-[300px] w-[592px]"
      />
      <div className={styles.container}>
        <h2>Regiones MF3</h2>
        <img src={regionsMapSvg} className="mb-14" />
        <div className={styles.regions}>{Regions()}</div>
      </div>
    </div>
  );
}

function Regions() {
  return (
    <>
      <div className={styles.region}>
        <p className={styles.title + " text-green-neutral"}>Región 1</p>
        <p className={styles.vacants}># Vacantes</p>
        <ul>
          <li>BC</li>
          <li>BCS</li>
          <li>Chihuahua</li>
          <li>Durango</li>
          <li>Sinaloa</li>
          <li>Sonora</li>
        </ul>
      </div>

      <div className={styles.region}>
        <p className={styles.title + " text-gold"}>Región 2</p>
        <p className={styles.vacants}># Vacantes</p>
        <ul>
          <li>Chiapas</li>
          <li>Campeche</li>
          <li>Quintana Roo</li>
          <li>Tabasco</li>
          <li>Veracruz</li>
          <li>Yucatán</li>
        </ul>
      </div>

      <div className={styles.region}>
        <p className={styles.title + " text-violet-neutral"}>Región 3</p>
        <p className={styles.vacants}># Vacantes</p>
        <ul>
          <li>Coahuila</li>
          <li>Nuevo León</li>
          <li>San Luis Potosí</li>
          <li>Tamaulipas</li>
          <li>Zacatecas</li>
        </ul>
      </div>

      <div className={styles.region}>
        <p className={styles.title + " text-red-neutral"}>Región 4</p>
        <p className={styles.vacants}># Vacantes</p>
        <ul>
          <li>Ciudad de México</li>
          <li>Estado de México</li>
          <li>Hidalgo</li>
          <li>Oaxaca</li>
          <li>Puebla</li>
          <li>Querétaro</li>
        </ul>
      </div>

      <div className={styles.region}>
        <p className={styles.title + " text-mustard"}>Región 5</p>
        <p className={styles.vacants}># Vacantes</p>
        <ul>
          <li>Aguascalientes</li>
          <li>Colima</li>
          <li>Guanajuato</li>
          <li>Jalisco</li>
          <li>Michoacán</li>
          <li>Nayarit</li>
        </ul>
      </div>
    </>
  );
}

export default RegionsMap;
