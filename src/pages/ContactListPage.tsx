import React, {memo, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import {ContactDto} from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/redux/hooks';


export const ContactListPage = memo(() => {
  //Почему так не работает? не очень понятно (в консоли ошибка)
  // const { contacts, groups } = useAppSelector((state) => ({
  //   contacts: state.contacts,
  //   groups: state.groups
  // })) 
  const contacts = useAppSelector((state) => state.contacts)
  const groups = useAppSelector((state) => state.groups)

  const [contactsState, setContactsState] = useState<ContactDto[]>(contacts)
  
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({name}) => (
        name.toLowerCase().indexOf(fvName) > -1
      ))
    }

    if (fv.groupId) {
      const groupContacts = groups.find(({id}) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({id}) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }

    setContactsState(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groups} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contactsState.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
})
