import {
  SingInBtn,
  RegistrationBtn,
  AddBtn,
  VoteBtn,
  ButtonUp,
  BackTorecipeBtn,
} from './Button.styled';


export const SingInButton = ({ type = 'button', onClick, children }) => {
  return (
    <SingInBtn to="/signin" type={type} onClick={onClick}>
      {children}
    </SingInBtn>
  );
};

export const RegistrationButton = ({ type = 'button', onClick, children }) => {
  return (
    <RegistrationBtn to="/register" type={type} onClick={onClick}>
      {children}
    </RegistrationBtn>
  );
};

export const AddButton = ({ type = 'button', onClick, children }) => {
  return (
    <AddBtn type={type} onClick={onClick}>
      {children}
    </AddBtn>
  );
};

export const VotesButton = ({ type = "button", option, onClick, children }) => {
  return (
    <VoteBtn type={type} onClick={onClick} option={option}>
      {children}
    </VoteBtn>
  );
};

export const ButtonScrollUp = ({
  type = 'button',
  onClick,
  children,
  isButtonUp,
}) => {
  return (
    <ButtonUp type={type} onClick={onClick} isButtonUp={isButtonUp}>
      {children}
    </ButtonUp>
  );
};

export const GoBackToRecipeBtn = ({ from, children }) => {
  return <BackTorecipeBtn to={from}>{children}</BackTorecipeBtn>;
};
