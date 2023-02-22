import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavConfig } from './nav-config';

export default function WebHeader() {
  const [dropdownOpen, setDropdownOpen] = React.useState(null);
  const [navbar, setNavbar] = React.useState(false);

  const [show, setShow] = React.useState(null);
  const showDropdown = (e) => {
    setShow(e);
  }
  const hideDropdown = e => {
    setShow(e);
  }

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
  }, []);

  return (
    <Navbar
      style={{
        backgroundColor: navbar ? "rgba(255, 255, 255, 0.5)" : "#fff",
        color: navbar ? "#000" : "#fff",
        transition: navbar ? "0.3s" : "0.5s",
        boxShadow: '1px -6px 19px #000',
      }}
      expand="lg"
      collapseOnSelect>
      <Container>
        <Link href="/" legacyBehavior passHref>
          <Navbar.Brand>
            <Image src="/images/logo.png" height={45} width={200} alt='Reeda Udaipur' />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={`navbar-expand`}
          aria-labelledby={`navbar-expand`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`navbar-expand`}>
              Reeda Udaipur
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>

            <Nav className="ms-auto">
              {NavConfig && NavConfig.map((menu, index) => {

                if (menu.children && menu.children.length) {
                  return (
                    <NavDropdown key={`menu-${index}`} title={menu.title}
                      show={show == index}
                      onMouseEnter={() => showDropdown(index)}
                      onMouseLeave={() => hideDropdown(null)}>
                      {menu.children && menu.children.map((children, childrenIndex) => {

                        if (children.children && children.children.length) {
                          return (
                            <NavDropdown key={`menu-children-${childrenIndex}`} href={children.href} title={children.title} drop="end">
                              {children.children && children.children.map((children2, children2Index) => {
                                return (
                                  <NavDropdown.Item key={`menu-children2-${children2Index}`} href={children2.href}>
                                    {children2.title}
                                  </NavDropdown.Item>
                                )
                              })}
                            </NavDropdown>
                          )
                        } else {

                          return (
                            <Link key={`menu-children-${childrenIndex}`} href={children.href} legacyBehavior passHref>
                              <NavDropdown.Item>{children.title}</NavDropdown.Item>
                            </Link>
                          )
                        }
                      })}
                    </NavDropdown>
                  )
                } else {
                  return (
                    <Link key={`menu-${index}`} href={menu.href} legacyBehavior passHref>
                      <Nav.Link>
                        {menu.title}
                      </Nav.Link>
                    </Link>
                  )
                }


              })}

            </Nav>

          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
