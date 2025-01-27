import { TripDetails } from "./tripDetailsForm";

interface Props {
  details: TripDetails;
}

const TripDetailsBoard = ({ details }: Props): JSX.Element => {
  const tripTypeLabel = details.type === 'tent' ? 'Pod stanem' : 'Hotel';
  return (
    <div className="relative shadow-sm rounded-lg p-2 bg-white mb-2 w-full lg:w-1/2">
      <button
        // onClick={changeDetails}
        className="absolute right-2 text-primary font-medium bg-primary/30 rounded-md p-1"
      >
        Změnit
      </button>
      <div className="font-medium">
        Počet dní: {details.stayLength}
      </div>
      <div className="font-medium">Typ výletu: {tripTypeLabel}</div>
    </div>
  );
};

export default TripDetailsBoard;