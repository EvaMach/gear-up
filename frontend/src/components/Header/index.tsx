import logo from './logo.svg';

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-center mt-6">
      <img src={logo} alt="Mountain logo" />
    </div>
  );
};

export default Header;
