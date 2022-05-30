export const setStoreData = ({ name, value }) => {
  try {
    const jsonToken = JSON.stringify(value)
    localStorage.setItem(name, jsonToken)
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