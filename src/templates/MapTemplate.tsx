interface Props {
  children: React.ReactNode;
}

const MapTemplate = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default MapTemplate;
