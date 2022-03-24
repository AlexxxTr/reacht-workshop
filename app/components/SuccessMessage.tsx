import type { HTMLProps } from "react";

type Props = HTMLProps<HTMLDivElement>;

const SuccessMessage = ({...divProps}: Props) => {
    return (
        <div {...divProps}>
            <h2>You're subscribed!</h2>
            <p>Please check your email to confirm your subscription.</p>
            <button>Start over</button>
        </div>
    );
};

export default SuccessMessage;