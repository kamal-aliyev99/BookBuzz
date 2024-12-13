import './Button.scss';

const Button = ({type, onClick, className, children}) => {
  return (
    <button
        className={`btn ${className}`}
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
  );
};

export default Button;