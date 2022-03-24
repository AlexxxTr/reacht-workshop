import { useState } from 'react';

type ConvertKitResponse = {
  error?: string;
  message?: string;
  subscription?: string;
};

type SubscribeToConvertKitParams = {
  email?: string;
  onSubscription: () => void;
};

const useConvertKitSubmission = () => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const subscribeToConvertKit = async ({ email, onSubscription }: SubscribeToConvertKitParams) => {
    setErrorMessage(undefined);

    const { CONVERT_KIT_API_URL, CONVERT_KIT_API_KEY, CONVERT_KIT_API_FORM_ID } = window.ENV;
    const subscribeUrl = `${CONVERT_KIT_API_URL}/forms/${CONVERT_KIT_API_FORM_ID}/subscribe`;

    const response = await fetch(subscribeUrl, {
      method: 'post',
      body: JSON.stringify({ email, api_key: CONVERT_KIT_API_KEY }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });

    const { error, message } = (await response.json()) as ConvertKitResponse;

    if (error) return setErrorMessage(message);

    return onSubscription();
  };

  return { errorMessage, subscribeToConvertKit };
};

export default useConvertKitSubmission;
