import { ThreeDots as Spinner } from "react-loader-spinner";

import { MiniLoaderOverlay, MainLoaderOverlay } from "./Loader.styled";

export const MiniLoader = () => {
  return (
    <MiniLoaderOverlay>
      <Spinner
        height="80"
        width="80"
        radius="9"
        color="#7295BC"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </MiniLoaderOverlay>
  );
};

export const MainLoader = () => {
  return (
    <MainLoaderOverlay>
      <Spinner
        height="250"
        width="250"
        radius="9"
        color="#8BAA36"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </MainLoaderOverlay>
  );
};
