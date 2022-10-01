import { Navbar, Container } from "react-bootstrap";

    // Set today date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;

const Header = () => {
  return (
    <Navbar bg='primary' variant='light' static='top'>
  <Container fluid>
    <Navbar.Brand>Weekly Targets</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        {today}
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header;