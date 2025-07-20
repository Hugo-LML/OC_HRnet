import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { FC } from 'react';
import { SelectOptionProps } from '../../../types';
import { ChevronDown } from '../../icons/ChevronDown';

interface SelectProps {
  label: string;
  options: SelectOptionProps[];
  value: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ label, options, value, onChange }) => {
  const valueDisplayed = options.find(option => option.value === value)?.name;

  return (
    <Field className='space-y-1'>
      <Label className='block text-sm font-medium text-gray-700'>{label}</Label>
      <Listbox value={value} onChange={onChange} as='div' className='relative z-[1] w-full'>
        {({ open }) => (
          <>
            <ListboxButton className='flex w-full items-center justify-between rounded-md border border-gray-300 bg-white p-2'>
              <span>{valueDisplayed}</span>
              <ChevronDown className={clsx('transition-transform', { 'rotate-180': open })} />
            </ListboxButton>
            <ListboxOptions className='absolute max-h-60 w-full overflow-y-scroll rounded-md border border-gray-300 bg-white' modal={false}>
              {options.map(option => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className={clsx('cursor-pointer p-2 transition-colors hover:bg-blue-500 hover:text-white', {
                    hidden: option.value === value,
                  })}
                >
                  <span>{option.name}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </Field>
  );
};

export default Select;
