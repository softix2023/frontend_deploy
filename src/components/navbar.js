import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useCookies} from 'react-cookie'
import {Link, useNavigate,useLocation} from 'react-router-dom'
let expand="md";
function OffcanvasExample() {
  const [cookies,setCookie,removeCookie]=useCookies('user');
  const navigate=useNavigate();
  const locationn=useLocation();
  
  React.useEffect(()=>{

    console.log(locationn?.pathname)
    
  },[])

  // Create a new variable - M.Alauddin
  // const newPath = locationn?.pathname;
   

  
  return (
    <>
        
       <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>

            {/* <Navbar.Brand  >
              <Link className="sadw3ena" to='/' >
              {
                      locationn?.pathname!="/"?"Back":"ATM"
                    
              }
              </Link>
            </Navbar.Brand> */}

            {/* This code snippets added by Muhammad Alauddin Ansari - Start */}
            
            {/* if( locationn?.pathname==="/details" ){

                <Navbar.Brand  >
                  <Link className="sadw3ena" to='/' >
                  {
                          locationn?.pathname!="/"?"Back":"ATM"
                        
                  }
                  </Link>
                </Navbar.Brand>
                

            }else{

              <Navbar.Brand  >
                <Link className="sadw3ena" to='/filter' >
                {
                      locationn?.pathname==="/details"?"All Events":"Back"                          
                }
                </Link>
              </Navbar.Brand> 

            }                    */}

            {/* This code snippets added by Muhammad Alauddin Ansari - End */}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link className="sadw3ena" to={"/"}>{
                      locationn?.pathname!="/"?"Back":"ATM" 
                  }</Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">

                <Nav.Link  >
                  <Link className="sadw3ena" to="/">Home</Link>
                </Nav.Link>

                  {
                    
                    cookies?.user?<>
                    {
                      cookies?.user?.role!=2?<>
                         <Nav.Link>
                          <Link className="sadw3ena" to="/event">Add New Event</Link>
                         </Nav.Link>

                         <Nav.Link >
                          <Link className="sadw3ena" to="/filter">List Event</Link>
                         </Nav.Link>
                      </>
                         :<>
                                          

                      </>
                    }                    

                     <Nav.Link onClick={()=>{
                      
                                            removeCookie("user")
                                            window?.location.reload();
                                           }}>Log Out</Nav.Link>
                  
                    </>:<>
                  <Nav.Link >
                    <Link className="sadw3ena" to="/login">Login</Link>
                    </Nav.Link>
                    </>
                  }
              
                </Nav>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample;