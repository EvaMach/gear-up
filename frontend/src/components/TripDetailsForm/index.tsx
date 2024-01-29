import { useForm } from 'react-hook-form';
import { useState } from 'react';
import tentImg from './img/tent.jpg';
import hotelImg from './img/hotel.jpg';
import FormSectionHead from '../FormSectionHead';

interface Props {
  onSubmitDetails: (formValues: TripDetails) => void;
  onChangeDetails: () => void;
  tripDetails: TripDetails;
}

export interface TripDetails {
  stayLength: number;
  type: 'tent' | 'hotel';
}

const TripDetailsForm = ({
  onSubmitDetails,
  onChangeDetails,
  tripDetails,
}: Props): JSX.Element => {
  const { register, handleSubmit, getValues } = useForm<TripDetails>({
    defaultValues: tripDetails,
  });
  const [step, setStep] = useState('empty');

  const onSubmit = (formValues: TripDetails): void => {
    setStep('filled');
    onSubmitDetails(formValues);
  };

  const changeDetails = (): void => {
    setStep('empty');
    onChangeDetails();
  };

  const tripTypeLabel = getValues('type') === 'tent' ? 'Pod stanem' : 'Hotel';

  return (
    <>
      <FormSectionHead count={1} title="Zadej základní informace  " />
      {step === 'empty' ? (
        <form
          className="flex flex-col justify-center sm:items-center gap-2 mb-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label className="flex gap-3 items-center font-medium">
              Počet dní:
              <input
                defaultValue={3}
                min={1}
                className="p-1 w-20 bg-inputBg rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                type="number"
                {...register('stayLength', { required: true })}
              />
            </label>
            <label className="flex flex-col font-medium">
              <div className="mb-3">Typ výletu:</div>
              <div className="flex items-center gap-10">
                <label htmlFor="tent">
                  <input
                    className="peer sr-only"
                    type="radio"
                    id="tent"
                    value="tent"
                    {...register('type', { required: true })}
                  />
                  <img
                    className="w-70 sm:w-40 md:w-52 cursor-pointer ring-transparent peer-checked:ring-accent rounded-3xl ring-offset-2 ring-4"
                    src={tentImg}
                    alt="camping"
                  />
                </label>
                <div>
                  <label htmlFor="hotel">
                    <input
                      className="sr-only peer"
                      type="radio"
                      id="hotel"
                      value="hotel"
                      {...register('type', { required: true })}
                    />
                    <img
                      className="w-70 sm:w-40 md:w-52 cursor-pointer ring-transparent peer-checked:ring-accent ring-offset-2 ring-4 rounded-3xl"
                      src={hotelImg}
                      alt="hotel"
                    />
                  </label>
                </div>
              </div>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className="h-10 px-6 mt-4 font-semibold w-48 rounded-md bg-primary text-white my-3"
              type="submit"
            >
              Seznam ke sbalení
            </button>
          </div>
        </form>
      ) : (
        <div className="relative shadow-sm rounded-lg p-2 bg-white mb-2 w-1/2">
          <button
            onClick={changeDetails}
            className="absolute right-2 text-primary font-medium bg-primary/30 rounded-md p-1"
          >
            Změnit
          </button>
          <div className="font-medium">
            Počet dní: {getValues('stayLength')}
          </div>
          <div className="font-medium">Typ výletu: {tripTypeLabel}</div>
        </div>
      )}
    </>
  );
};

export default TripDetailsForm;
