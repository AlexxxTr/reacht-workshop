/* 
  This file contains all types you require to get a working application.
  You can use copy/paste these inside your components/hooks or try to create your own.

  For Props always use Props, I had to name them specifically because you can't assign types to
  different values.

  Some explanation to what some types mean:
    - key?: they question mark means that the entry can be undefined
    - Record<Key, Value>: an object which takes a generic Key and Value type
    - <T>: a Generic Type, meaning we can pass in our own type
           `useState<boolean>()` means that our state will be a boolean. 
    - HTMLProps<T>: allows us to pass any HTML attribute as a prop such as aria-*, click handlers,...
    - Dispatch<SetStateAction<T>>: these are the types React uses to type a setState function
*/

import type { Dispatch, HTMLProps, SetStateAction } from 'react';

/* ********** */
/* SignUp.tsx */
/* ********** */

// HTMLProps<Element> allows to pass any HTML attribute as a prop such as aria-attributes, click handlers, etc.
type SignUpProps = HTMLProps<HTMLFormElement> & {
  isStartingOver: boolean;
  // setState function that takes a boolean -> React types
  setIsStartingOver: Dispatch<SetStateAction<boolean>>;
  onSubscription: () => void;
};

/* ****************** */
/* SuccessMessage.tsx */
/* ****************** */

type SuccessMessageProps = HTMLProps<HTMLDivElement> & {
  onStartOver: () => void;
};

/* *************************** */
/* useConvertKitSubmission.tsx */
/* *************************** */

type ConvertKitResponse = {
  error?: string;
  message?: string;
  subscription?: Record<string, string>;
};

type SubscribeToConvertKitParams = {
  email?: string;
  onSubscription: () => void;
};
