import './App.css';
import PackingGuide from './TravelListForm';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="mx-20 flex flex-col justify-center">
        <PackingGuide />
      </div>
    </>
  );
};

export default App;
