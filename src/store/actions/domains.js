export const addDomain = name => ({
    type: "ADD_DOMAIN",
    payload: { 
      name,
      isFavorite: false
     }
});

export const resetDomain = name => ({
  type: "RESET_DOMAIN",
});

export const favorite = (name, isFavorite) => ({
  type: "FAVORITE",
  payload: {
    name,
    isFavorite
  }
})