import './App.css';
import GearListForm from './components/GearListForm';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <>
      <div>
        <Header />
        <div className="mx-6 flex flex-col justify-center">
          <GearListForm />
        </div>
      </div>
    </>
  );
};

export default App;
