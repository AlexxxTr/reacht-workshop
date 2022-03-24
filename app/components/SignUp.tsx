import type { HTMLProps } from "react";

type Props = HTMLProps<HTMLFormElement>;

const SignUp = ({...formProps}: Props) => {
    return (
        <form method="post" {...formProps}>
        <h2>Subscribe!</h2>
        <p>Don't miss any of the action!</p>
        <fieldset>
          <input
            aria-label="Email address"
            aria-describedby="error-message"
            type="email"
            name="email"
            placeholder="you@example.com"
          />
          <button type="submit">Subscribe</button>
        </fieldset>
  
        <p id="error-message" />
      </form>
    )
}

export default SignUp;