import GlassCard from "../../../components/GlassCard/GlassCard";
import runningSvg from "../../../assets/running.svg";

function AthleteGlassCard() {
  return (
    <GlassCard>
      <div className="self-center relative">
        <img src={runningSvg} className="absolute m-auto inset-0" />
        <div className="rounded-full h-20 w-20 bg-green-neutral opacity-20 blur-lg"></div>
      </div>
      <p className="title">
        Afiliación <span className="text-green-neutral">Atleta</span>
      </p>
      <p className="font-semibold">
        Da el primer paso de tu carrera deportiva en la MF3, únete a la
        Federación como atleta y participa en nuestro Calendario 2024.
      </p>
      <p>
        Tu historia en nuestro deporte comienza hoy, toma la decisión y únete a
        tu comunidad, afíliate y podrás competir por un lugar en el camino hacia
        Hungría en los Worlds 2024 de la IF3.
      </p>
      <div className="action-wrapper">
        <a className="bg-green-neutral">Afiliarme</a>
      </div>
    </GlassCard>
  );
}

export default AthleteGlassCard;
