import type { ChangeEvent, FormEvent,HTMLProps } from 'react';
import { useState } from 'react';

type Props = HTMLProps<HTMLFormElement>;

const SignUp = ({ ...formProps }: Props) => {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form method="post" onSubmit={handleSubmit} {...formProps}>
      <h2>Subscribe!</h2>
      <p>Don't miss any of the action!</p>
      <fieldset>
        <input
          aria-label="Email address"
          aria-describedby="error-message"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="you@example.com"
        />
        <button type="submit">Subscribe</button>
      </fieldset>

      <p id="error-message" />
    </form>
  );
};

export default SignUp;
