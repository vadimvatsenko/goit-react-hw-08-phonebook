import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Contacts from 'components/contacts/contacts';
import { fetchContatcts } from 'redux/contacts/operations';

export default function Tasks() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContatcts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Contacts />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <Contacts />
    </>
  );
}