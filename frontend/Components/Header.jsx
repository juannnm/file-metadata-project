export const Header = () => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">FileServices</h3>
        <nav className="nav nav-masthead justify-content-center float-md-center">
          <a className="nav-link fw-bold py-1 px-0 active" current="page" href="#">Home</a>
          <a className="nav-link fw-bold py-1 px-0 ml-1rem" href="#">Archives</a>
          <a className="nav-link fw-bold py-1 px-0" href="#">Categories</a>
        </nav>
      </div>
    </header>
  )
}