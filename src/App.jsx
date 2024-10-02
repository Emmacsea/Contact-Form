import { useState } from 'react';
import { ContactForm } from './Components/Contactform';


function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [message, setMessage] = useState('');
  const [selectedquery, setSelectedQuery] = useState(null);
  const [checkConsent, setCheckConsent] = useState(null);

  // const confirmDetails = () => {
  //   window.alert(`Your details have been successfully been uploaded`)
  // }

  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  }

  const onChangeEmailAddress = (e) => {
    setEmailaddress(e.target.value);
  }

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const selectQuery = (e) => {
    setSelectedQuery(e.target.value);
  }

  const checkedConsent = (e) => {
    setCheckConsent(e.target.checked);
  }


  return (
    <>
      <ContactForm
      firstname={firstname}
      lastname={lastname}
      emailaddress={emailaddress}
      message={message}
      query={selectedquery}
      consent={checkConsent}
      onChangeFirstname={onChangeFirstname}
      onChangeLastname={onChangeLastname}
      onChangeEmailAddress={onChangeEmailAddress}
      onChangeMessage={onChangeMessage}
      onChangeQuery={selectQuery}
      onChangeConsent={checkedConsent}
      // onSubmitDetails={confirmDetails}
      />
    </>
  )
}

export default App
