import { ButtonMain } from './styles';

const Button = ({
  onClick,
  disabled,
  children,
  backgroundColor = '#000'
}) => (
    <ButtonMain
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonMain>
  )

export default Button;