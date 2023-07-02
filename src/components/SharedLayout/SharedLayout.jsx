import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectError, selectIsLoading } from "../../redux/streamer/selectors";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AlertMessage } from "../AlertMessage/AlertMessage";
import { MainLoader } from "../Loader/Loader";

import { LayoutContainer, Main } from "./SharedLayout.styled";

export const SharedLayout = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <LayoutContainer>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          <Header />
          <Main>
            {error ? (
              <AlertMessage>
                Something wrong, please try again later or contact our support
                team for further assistance. Thank you for your understanding.
              </AlertMessage>
            ) : (
              <>
                <Suspense>
                  <Outlet />
                </Suspense>
              </>
            )}
          </Main>
          <Footer />
        </>
      )}
    </LayoutContainer>
  );
};
