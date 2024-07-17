import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface SwitchProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const CustomSwitch: React.FC<SwitchProps> = ({ isChecked, onChange, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  };

  return (
    <FormControlLabel
      control={
        <Switch checked={isChecked} onChange={handleChange} />
      }
      label={label}
    />
  );
}

export default CustomSwitch