import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { checkServerStatusAction } from 'src/redux/actions';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

export const MainMenu = () => {
  const [showServerStatus, setShowServerStatus] = useState(false)

  const loadingStatus = useAppSelector((state) => state.serverStatus.loading)
  const serverAnswerIsOk = useAppSelector((state) => state.serverStatus.answerIsOk)
  
  const dispatch = useAppDispatch()

  function handleServerCheckClick() {
    dispatch(checkServerStatusAction())
    setShowServerStatus(true)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link className='nav-link' to={'/'}><h1>Книга контактов</h1></Link></Navbar.Brand>
        <Nav className="me-auto">
          <Link className='nav-link' to={'/groups'}>Группы</Link>
          <Link className='nav-link' to={'/favorit'}>Избранное</Link>
        </Nav>
        <div>
          <Button variant="outline-primary" size='sm' disabled={loadingStatus} onClick={handleServerCheckClick}>
            Check Server {loadingStatus && <Spinner animation="grow" size="sm" />}
          </Button>
          {showServerStatus && 
            <div>
              Server: {serverAnswerIsOk ? 'Ok' : 'Not Working'}
            </div>
          }
        </div>
      </Container>
    </Navbar>
  );
}
