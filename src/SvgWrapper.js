const SvgWrapper = ({ type }) => {
  return (
    <div className="icons">
      <svg>
        <use href={`${process.env.PUBLIC_URL}/icons.svg#${type}`}></use>
      </svg>
    </div>
  );
};

export default SvgWrapper;
