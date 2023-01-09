interface Props {
  name: String;
  image: String;
}

const Language = (props: Props) => {
  return (
    <div className="language">
      <img src={`${props.image}`} alt="props.name" />
      <span> {props.name}</span>
    </div>
  );
};

export default Language;
