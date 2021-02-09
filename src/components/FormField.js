// @flow

import React from 'react';

import type { Node } from 'react';

type Props = {
  label: string,
  id: string,
  name: string,
  type: string,
};

export default function FormField(props: Props): Node {
  // prettier-ignore
  const {
    label, id, name, type,
  } = props;

  return (
    <label htmlFor="firstName" className="d-block mb-3">
      <div className="form-group">
        <strong className="form-label">First name</strong>
        <input
          id="firstName"
          type="text"
          className="form-input"
          placeholder="First name"
        />
      </div>
    </label>
  );
}
