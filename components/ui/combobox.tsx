import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface ComboboxProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Combobox = ({ options, value, onChange }: ComboboxProps) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Combobox;
