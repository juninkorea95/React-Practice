const Button = ({clickButtonHandler, children}) => {
    return <button onClick = {clickButtonHandler}>{children}</button>
  }

  export default Button;