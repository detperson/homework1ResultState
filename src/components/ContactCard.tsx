import React, {memo} from 'react';
import {ContactDto} from 'src/types/dto/ContactDto';
import {Card, ListGroup, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useAppDispatch, useAppSelector, useAppStore } from 'src/redux/hooks';
import { addToFavoritesActionCreator, deleteFromFavoritesActionCreator } from 'src/redux/actions';

interface ContactCardProps {
  contact: ContactDto,
  withLink?: boolean
}

export const ContactCard = memo<ContactCardProps>(({
    contact: {
      photo,
      id,
      name,
      phone,
      birthday,
      address
    }, withLink
  }) => {
    
    const inFavorites = useAppSelector((state) => {
      return state.favorites.includes(id)
    })
    const dispatch = useAppDispatch()

    function handleFavoritesClick() {
      if (inFavorites) {
        dispatch(deleteFromFavoritesActionCreator(id))
      } else {
        dispatch(addToFavoritesActionCreator(id))
      }
    }
    
    return (
      <Card key={id}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>
            {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}
          </Card.Title>
          <Button 
            variant={inFavorites ? "success": "outline-success"} 
            size='sm'
            onClick={handleFavoritesClick}
          >
            {inFavorites ? 'В избранном' : 'В избранное'}
          </Button>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item><Link to={`tel:${phone}`} target="_blank">{phone}</Link></ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  }
)
