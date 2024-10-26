import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchRecipe } from '../redux/recipeSlice'




const Header = ({searchBar}) => {
    const dispatch=useDispatch()
  return (
    <>
       <Navbar style={{height:"100px"}} expand="lg" className="bg-primary">
      <Container fluid>
    <Navbar.Brand className='ms-5' href="#"><i class="fa-solid fa-bowl-rice fa-xl me-4" style={{color: "#f5f5f5"}}></i><span style={{color:"white"}} className='fs-1 '>plate chronicels</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
        { searchBar &&  <Form className="d-flex" style={{width:"350px"}}>
            <Form.Control onChange={(e)=>dispatch(searchRecipe(e.target.value.toLowerCase()))}
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
          </Form>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    
    </>
  )
}

export default Header