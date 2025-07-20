import { Field, Input as InputField, Label } from '@headlessui/react';
import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ type = 'text', className = '', ...props }) => {
  return (
    <Field className='space-y-1'>
      <Label className='block text-sm font-medium text-gray-700'>{props.label}</Label>
      <InputField
        type={type}
        name={props.name}
        className={clsx('rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500', className)}
        placeholder={props.placeholder || 'Enter text here'}
        aria-label={props['aria-label'] || 'Input field'}
        {...props}
      />
    </Field>
  );
};

export default Input;
