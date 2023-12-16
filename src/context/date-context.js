import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducers";

const initialState = {
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  //isSearchResultOpen: true,
};

const DateContext = createContext(initialState);

const DateProvider = ({ childern }) => {
  const [
    {
      destination,
      guests,
      checkInDate,
      checkOutDate,
      isSearchModalOpen,
      //isSearchResultOpen,
    },
    dateDispatch,
  ] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider
      value={{
        destination,
        guests,
        checkInDate,
        checkOutDate,
        isSearchModalOpen,
       // isSearchResultOpen,
        dateDispatch,
      }}
    >
      {childern}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
