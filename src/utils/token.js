export const setStoreData = ({ name, value }) => {
  try {
    localStorage.setItem(name, value)
  } catch (error) {
    return error
  }
}

export const getStoreData = (name) => {
  try {
    const token = localStorage.getItem(name)
    return token
  } catch (error) {
    return error
  }
}


export const removeStoreData = (name) => {
  try {
    localStorage.removeItem(name)
  } catch (error) {
    return error
  }
}