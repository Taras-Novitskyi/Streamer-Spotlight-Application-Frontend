import {  AddBtn, VoteBtn } from "./Button.styled";

export const AddButton = ({ type = "button", onClick, children }) => {
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
