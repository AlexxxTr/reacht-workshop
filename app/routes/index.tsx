import { useState } from 'react';

import SignUp from '../components/SignUp';
import SuccessMessage from '../components/SuccessMessage';

const Index = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isStartingOver, setIsStartingOver] = useState(false);

  const handleSubscription = () => setIsSuccessful(true);

  const startOver = () => {
    setIsSuccessful(false);
    setIsStartingOver(true);
  }

  return (
    <main>
      <SignUp 
      aria-hidden={isSuccessful} 
      isStartingOver={isStartingOver}
      setIsStartingOver={setIsStartingOver}
      onSubscription={handleSubscription} />
      <SuccessMessage aria-hidden={!isSuccessful} onStartOver={startOver} />
    </main>
  );
};

export default Index;
