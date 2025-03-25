interface Props {
  error: string;
}

const ErrorScreen = ({ error }: Props) => {
  return <div>Error: {error}</div>;
};

export default ErrorScreen;
