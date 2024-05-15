function reducer(state, action) {


    switch (action.type) {
      case "SetProducts":
        return {
          ...state,
          suppliers: action.suppliers,
          
        };
  
      case "SearchWord": {
        let arr = state.suppliers.filter((elem) =>
          elem.title.includes(action.searchValue)
        );
  
        return { ...state, filteredProd: arr };
      }
      case "AtoZ": {
        let arr = [...state.suppliers].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
  
        return { ...state, filteredProd: arr };
      }
  
      default:
        break;
    }
  }
  
  export default reducer;