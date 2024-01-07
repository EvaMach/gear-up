interface Props {
  children: React.ReactNode;
  danger?: boolean;
  onClick: () => void;
}

const IconButton = ({ children, danger, onClick }: Props): JSX.Element => (
  <button onClick={onClick} className="hover:text-primary">
    {children}
  </button>
);

export default IconButton;
