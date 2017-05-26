import React from 'react';

const TitleField = (props) => {
  return (
    <label>{props.label}
      <input
        onChange = {props.handleTitleChange}
        name={props.name}
        type='text'
        value={props.content}
      />
    </label>
  );
}

export default TitleField;
