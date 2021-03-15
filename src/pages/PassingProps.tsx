import React from "react";

interface Props {
  firstName: String;
  middleName?: String;
  lastName: String;
}

function PassingProps(props: Props) {
  const { firstName, lastName } = props;

  return (
    <div>
      <p>{`${firstName} ${lastName}`}</p>
    </div>
  );
}

export default PassingProps;
