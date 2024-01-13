interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const IconButton = ({ children, onClick }: Props): JSX.Element => (
  <button type="button" onClick={onClick} className="hover:text-primary">
    {children}
  </button>
);

export default IconButton;
