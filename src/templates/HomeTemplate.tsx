interface Props {
  children: React.ReactNode;
}

const HomeTemplate = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default HomeTemplate;
