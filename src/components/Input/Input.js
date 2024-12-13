import './Input.scss';

const Input = ({onChange, iconOnClick, value, type, placeholder, name, icon}) => {
  return (
    <div className='mainInput'>
        <input
            className='mainInput__input'
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            
        />
        {
            icon &&
            <button
                className='mainInput__btn'
                onClick={iconOnClick}
                type='button'
            >
                {icon}
            </button>
        }

    </div>
  );
};

export default Input;