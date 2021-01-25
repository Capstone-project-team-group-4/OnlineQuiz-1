/* eslint-disable prefer-destructuring */
import React, { 
  ChangeEvent
  , FormEvent
  , MouseEvent
  , ReactElement
  , useState 
} from 'react';
import { User, UserIndexSignature } from './model/User';
import { UserAPI } from './common/service/UserAPI';
import { 
  Button, Col, Container, Form, FormControl, Nav, Navbar, Row 
} from 'react-bootstrap';
import './App.css';

function App (): ReactElement {
  let [user, setUser] = useState<User> (new User ());
  let updatedUser: User | undefined;
  let inputField: 
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | undefined;
  let userAPI: UserAPI | undefined;
  // let userID: string;

  function handleUserChange (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void {  
    updatedUser = user;
    inputField = event.target;
    updatedUser[inputField.name as keyof UserIndexSignature] = inputField.value;
    setUser (updatedUser);
  } 
  
  function signUp (event: FormEvent<HTMLFormElement>){
    event.preventDefault ();
    userAPI = new UserAPI ();
    userAPI.registerUser (user);  
  }

  /*
   * function deleteUser (event: MouseEvent<HTMLButtonElement>){
   *   event.preventDefault ();
   *   userAPI = new UserAPI ();
   *   userID = user.userID;
   *   userAPI.deleteUser (userID);
   * }
   */

  return (
    <Container fluid = {true}> 
      <Container fluid = {true}>
        <header>
        </header>
        <nav>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
              />
              <Button variant="info">Search</Button>
            </Form>
          </Navbar>
        </nav>
      </Container>
      <main>
        <Container>
          <Row>
            <Col>
              <Form
                noValidate = {true}
                onSubmit = {(event) => {
                  signUp (event);
                }}
              >
                <Form.Group>
                  <Form.Label>
                    User Name:
                  </Form.Label>
                  <Form.Control
                    type = "text"
                    autoComplete = "on"
                    autoFocus = {true}
                    name = "userName"
                    id = "userName"
                    pattern = "^[\\p{L} .'-]+$"
                    placeholder = "Any user name"
                    required = {true}
                    spellCheck = {false}
                    // value = {user.userName}
                    onChange = {handleUserChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Email:
                  </Form.Label>
                  <Form.Control
                    type = "email"
                    autoComplete = "on"
                    autoFocus = {false}
                    name = "email"
                    id = "email"
                    placeholder = "Enter your email"
                    required = {true}
                    spellCheck = {false}
                    onChange = {handleUserChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Password:
                  </Form.Label>
                  <Form.Control
                    type = "password"
                    autoComplete = "off"
                    autoFocus = {false}
                    name = "password"
                    id = "password"
                    pattern = "^\\S+$"
                    placeholder = "Your new password"
                    required = {true}
                    spellCheck = {false}
                    onChange = {handleUserChange}
                  />
                </Form.Group>
                <Button 
                  variant = "success"
                  type = "submit"
                  block = {true}
                >
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
      </footer>
    </Container>
    /*
     * <div id = "PageContentContainer">
     *   <div id = "PageBodyContainer">
     *     <form
     *       onSubmit = {(event) => {
     *         signUp (event);
     *       }}
     *     >
     *       <label>
     *         UserID:
     *       </label>
     *       <br/>
     *       <input 
     *         type = "text"
     *         autoComplete = "userID"
     *         name="userID"
     *         required
     *         id="userID"
     *         // value = {user.userID}
     *         autoFocus
     *         onChange = {(event) => {
     *           setUser (updateUser (event));
     *         }}
     *       />
     *       <br/>
     *       <label>
     *         User Name:
     *       </label>
     *       <br/>
     *       <input 
     *         type = "text"
     *         autoComplete = "User-name"
     *         name="userName"
     *         required
     *         id="userName"
     *         // value = {user.userID}
     *         onChange = {(event) => {
     *           setUser (updateUser (event));
     *         }}
     *       />
     *       <br/>
     *       <label>
     *         First Name:
     *       </label>
     *       <br/>
     *       <input 
     *         type = "text"
     *         autoComplete = "First-name"
     *         name="firstName"
     *         required
     *         id="firstName"
     *         // value = {user.userID}
     *         onChange = {(event) => {
     *           setUser (updateUser (event));
     *         }}
     *       />
     *       <br/>
     *       <label>
     *         Last Name:
     *       </label>
     *       <br/>
     *       <input 
     *         type = "text"
     *         autoComplete = "Last-name"
     *         name="lastName"
     *         required
     *         id="lastName"
     *         // value = {user.userID}
     *         onChange = {(event) => {
     *           setUser (updateUser (event));
     *         }}
     *       />
     *       <br/>
     *       <label>
     *         Email:
     *       </label>
     *       <br/>
     *       <input 
     *         type = "text"
     *         autoComplete = "Email-address"
     *         name="userName"
     *         required
     *         id="userName"
     *         // value = {user.userID}
     *         onChange = {(event) => {
     *           setUser (updateUser (event));
     *         }}
     *       />
     *       <br/>
     *       <button
     *         type = "submit"
     *       >
     *         Sign Up
     *       </button>
     *     </form>
     *   </div>
     * </div>
     */
    /*
     * <div id = "borderBottomImageContainer">
     * </div> 
     */
  );
}

export default App;
