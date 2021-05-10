import logo from "../../logo.svg";

export default function NavBar(props: any) {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" id="logo" />          <span className="navbar-brand">
            Super Software
          </span>
        </div>
      </nav>

      {props.children}

    </div>
  )
}
