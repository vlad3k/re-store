import React from 'react';
import { bookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <bookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                      bookstoreService={bookstoreService} />);
          }
        }
      </bookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;