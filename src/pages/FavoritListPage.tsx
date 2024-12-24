import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/redux/hooks';

export const FavoritListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts)
  const favorites = useAppSelector((state) => state.favorites)
  
  const [favoriteContacts, setFavoriteContacts] = useState<ContactDto[]>([])
  useEffect(() => {
    setFavoriteContacts(() => contacts.filter(({id}) => favorites.includes(id)));
  }, [contacts, favorites])
  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
