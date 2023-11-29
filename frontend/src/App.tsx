import './App.css';
import PackingGuide from './TravelListForm';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <>
      <div>
        <Header />
        <div className="mx-6 flex flex-col justify-center">
          <PackingGuide />
        </div>
      </div>
    </>
  );
};

export default App;
