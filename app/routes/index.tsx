import { useState } from 'react';

import SignUp from '../components/signUp';
import SuccessMessage from '../components/SuccessMessage';

const Index = () => {
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  return (
    <main>
      <SignUp aria-hidden={isSuccessfull} />
      <SuccessMessage aria-hidden={!isSuccessfull} />
    </main>
  );
};

export default Index;
