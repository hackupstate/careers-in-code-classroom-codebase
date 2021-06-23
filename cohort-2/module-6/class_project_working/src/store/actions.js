export const UPDATE_USERNAME = "UPDATE_USERNAME"
export const TOGGLE_THEME = "TOGGLE_THEME"

export const updateUsername = (text) => {
  return {
    type: UPDATE_USERNAME,
    payload: text,
  }
}

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}
