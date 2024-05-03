export const sortAz = (data) => {
    return [...data].sort((a, b) => a.title.localeCompare(b.title));
  };
  
export const sortZa = (data) => {
    return [...data].sort((a, b) => b.title.localeCompare(a.title));
  };
  
  export const sortLPrice = (data) => {
    return [...data].sort((a, b) => a.price - b.price);
  };
  
  export const sortHPrice = (data) => {
    return [...data].sort((a, b) => b.price - a.price);
  }; 

  