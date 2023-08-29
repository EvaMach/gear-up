import React from 'react';
import tentImg from './img/tent.jpg';
import hotelImg from './img/hotel.jpg';
import './style.css';


const PackingGuide = (): JSX.Element => {
  return (
    <form
      className="flex flex-col items-center gap-3"
    >
      <input
        className="p-1 ... bg-slate-300 rounded-md border-zinc-500"
        placeholder="Název seznamu"
        type="text"
        name="listName"
      />
      <input
        className="p-1 ... bg-slate-300 rounded-md border-zinc-500"
        type="number"
        name="stayLength"
      />
      <div className="flex items-center gap-2">
        <div>
          <input
            className="input-hidden"
            type="radio"
            name="tentOption"
            id="tentOption"
          />
          <label htmlFor="tentOption">
            <img className="h-28 cursor-pointer" src={tentImg} alt="camping" />
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
            <img className="h-28 cursor-pointer" src={hotelImg} alt="hotel" />
          </label>
        </div>
      </div>
      <button
        className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white"
        type="submit"
      >
        Vytvořit seznam
      </button>
    </form>
  );
};

export default PackingGuide;
