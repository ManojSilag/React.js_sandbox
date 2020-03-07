import React from "react";
import useResources from './useResources';

const ResoureList = (props) => {

    const resources = useResources(props.resource);

  return (
    <ul>
      {resources.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ResoureList;
