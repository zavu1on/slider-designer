import { type FC } from 'react';
import { Loader2 } from 'lucide-react';
import { Button, type ButtonProps } from './ui';

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader2 className="animate-spin" />}
      {children}
    </Button>
  );
};
