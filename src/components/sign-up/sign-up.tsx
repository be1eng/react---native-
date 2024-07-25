import type { ReactNode } from 'react';

export type SignUpProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function SignUp({ children }: SignUpProps) {
  return (
    <div>
      {children}
    </div>
  );
}
