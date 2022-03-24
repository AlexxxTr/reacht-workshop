import { useState } from 'react';

import SignUp from '../components/SignUp';
import SuccessMessage from '../components/SuccessMessage';

const Index = () => {
  const [isSuccessfull, setIsSuccessful] = useState(false);
  const handleSubscription = () => setIsSuccessful(true);
  return (
    <main>
      <SignUp aria-hidden={isSuccessfull} onSubscription={handleSubscription} />
      <SuccessMessage aria-hidden={!isSuccessfull} />
    </main>
  );
};

export default Index;
