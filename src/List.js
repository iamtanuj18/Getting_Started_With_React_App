import React from "react";

const List = (props) => {
  const { name, age, image } = props;
  return (
    <>
      <section className="person">
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </section>
    </>
  );
};

export default List;
