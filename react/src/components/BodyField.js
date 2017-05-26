import React from 'react';

const BodyField = (props) => {
  return (
    <label>{props.label}
      <textarea
        onChange = {props.handleBodyChange}
        name={props.name}
        type='text'
        value={props.content}
      />
    </label>
  );
}

export default BodyField;
