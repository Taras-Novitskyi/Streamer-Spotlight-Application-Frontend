import {
  NotFoundContainer,
  AlertContainer,
  AlertTextPartOne,
  AlertTextPartTwo,
} from "./NotFound.styled";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <AlertContainer>
        <AlertTextPartOne>We are sorry,</AlertTextPartOne>
        <AlertTextPartTwo>
          but the page you were looking for can’t be found...
        </AlertTextPartTwo>
      </AlertContainer>
    </NotFoundContainer>
  );
};
