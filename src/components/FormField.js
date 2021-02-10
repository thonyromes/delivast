// @flow

import React, { useState } from 'react';

import type { Node, SyntheticEvent } from 'react';

type Props = {
  label: string,
  id: string,
  name: string,
  type: string,
  value: string,
  onChange: any,
};

export default function FormField(props: Props): Node {
  // prettier-ignore
  const {
    label, id, name, type, value, onChange,
  } = props;

  const [input, setInput] = useState({
    class: '',
    errMsg: '',
    fieldValue: value,
  });

  const validateInput = (val) => val !== '';

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const oldValue = e.currentTarget.value;

    if (!validateInput(oldValue)) {
      setInput(() => ({
        class: 'danger',
        errMsg: `${label} is required`,
        fieldValue: oldValue,
      }));

      return;
    }

    setInput(() => ({
      class: 'success',
      errMsg: 'Good!',
      fieldValue: oldValue,
    }));

    onChange((prevState) => ({ ...prevState, [name]: oldValue }));
  };

  return (
    <label htmlFor={id} className="d-block">
      <div className="form-group">
        <strong className="form-label">{label}</strong>
        <input
          id={id}
          type={type}
          className={`form-input ${input.class}`}
          placeholder={label}
          name={name}
          value={input.fieldValue}
          onChange={handleChange}
        />
      </div>
      <small className={`text-${input.class}`}>{input.errMsg}</small>
    </label>
  );
}
