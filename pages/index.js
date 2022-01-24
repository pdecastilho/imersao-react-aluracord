function Title(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

function HomePage() {
  return (
    <div>
      <Title tag="h2">Boas vindas de volta!</Title>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
