interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const IconButton = ({ children, onClick, className }: Props): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className={`hover:text-primary ${className}`}
  >
    {children}
  </button>
);

export default IconButton;
