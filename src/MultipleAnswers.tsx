import { useState } from 'react';

type Option = { readonly key: string; readonly label: string };

const options: ReadonlyArray<Option> = [
  { key: 'A', label: 'Venus' },
  { key: 'B', label: 'Newton' },
  { key: 'C', label: 'Mars' },
  { key: 'D', label: 'Sun' },
  { key: 'NONE_OF_THE_ABOVE', label: 'None of the above' },
];

const MultipleAnswers = () => {
  const [selections, setSelections] = useState<Option[]>([]);

  const handleChange = (option: Option, checked: boolean) =>
    setSelections(prev =>
      checked ? prev.concat(option) : prev.filter(o => o !== option),
    );

  return (
    <form>
      <fieldset className="mb-4">
        <legend className="text-gray-600 mb-2">
          Select all planets:
        </legend>
        <div className="mt-2 space-y-2">
          {options.map(option => (
            <div key={option.key}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={selections.includes(option)}
                  onChange={e =>
                    handleChange(option, e.target.checked)
                  }
                />
                <span className="ml-2">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
};

export default MultipleAnswers;
