

  export const sortAzUsername = (data) => {
    return [...data].sort((a, b) => a.userName.localeCompare(b.userName));
  };

  export const sortAzName = (data) => {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  };
  export const sortZaName = (data) => {
    return [...data].sort((a, b) => b.name.localeCompare(a.name));
  };

  