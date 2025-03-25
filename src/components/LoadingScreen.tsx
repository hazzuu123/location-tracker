interface Props {
  message: string;
}

const LoadingScreen = ({ message }: Props) => {
  return <div>{message}</div>;
};

export default LoadingScreen;
