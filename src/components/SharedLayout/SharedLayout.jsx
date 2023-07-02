import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
// import { useSelector } from 'react-redux';

// import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
// import { MotivationModal } from 'components/MotivationModal/MotivationModal';
// import { ButtonScrollUp } from 'components/Button/Button';

import { LayoutContainer, Main } from "./SharedLayout.styled";

export const SharedLayout = ({ onClick }) => {
  const [socket, setSocket] = useState(null);
  // const [isButtonUp, setIsButtonUp] = useState(false);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    setSocket(io("http://localhost:3001"));
    //   window.addEventListener('scroll', () => {
    //     if (window.scrollY > 200) {
    //       setIsButtonUp(true);
    //       return;
    //     }
    //     setIsButtonUp(false);
    //   });
  }, []);

  // const handleOnScrollUp = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Suspense>
          <Outlet  context={socket} />
        </Suspense>
      </Main>
      <Footer />
      {/* <ButtonScrollUp isButtonUp={isButtonUp} onClick={handleOnScrollUp}>
        ^
      </ButtonScrollUp> */}
    </LayoutContainer>
  );
};
