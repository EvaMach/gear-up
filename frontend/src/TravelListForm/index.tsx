import React from 'react';
import tentImg from './img/tent.jpg';
import hotelImg from './img/hotel.jpg';
import './style.css';

const PackingGuide = (): JSX.Element => {
  return (
    <>
      <h1 className="text-center mb-8">
        Sbal se na další výlet rychle a bez stresu!
      </h1>
      <form className="flex flex-col gap-8 align-center packingForm">
        <label>
          Délka pobytu:
          <input
            className="p-1 ... bg-slate-300 rounded-md border-zinc-500"
            type="number"
            name="stayLength"
          />
        </label>
        <label>
          Tip výletu
          <div className="flex items-center gap-10">
            <div>
              <input
                className="input-hidden"
                type="radio"
                name="tentOption"
                id="tentOption"
              />
              <label htmlFor="tentOption">
                <img
                  className="h-28 cursor-pointer"
                  src={tentImg}
                  alt="camping"
                />
              </label>
            </div>
            <div>
              <input
                className="input-hidden"
                type="radio"
                name="tentOption"
                id="hotelOption"
              />
              <label htmlFor="hotelOption">
                <img
                  className="h-28 cursor-pointer"
                  src={hotelImg}
                  alt="hotel"
                />
              </label>
            </div>
          </div>
        </label>

        <button
          className="h-10 px-6 font-semibold w-48 rounded-md bg-primary text-white"
          type="submit"
        >
          Vytvořit seznam
        </button>
      </form>
    </>
  );
};

export default PackingGuide;
