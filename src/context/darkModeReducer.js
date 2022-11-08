 const DarkModeReducer=(state,action)=>{
    switch (action.type) {
      case "LIGHT": {
        return {
          darkMode: false,
        };
      }
      case "DARK": {
        return {
          darkMode: true,
        };
      }
      case "TOGGLE": {
        return {
          darkMode: !state.darkMode,
        };
      }
      default :
      return{
          darkMode:state.darkMode
      }
    }
}

export default DarkModeReducer