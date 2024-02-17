import { ChangeEventHandler } from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { id, type, placeholder, value, onChange, name } = props;
  const labelText = id[0].toUpperCase() + id.slice(1);

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-lg mb-2">
        {labelText}
      </label>

      <input
        className="w-full px-4 py-2 border text-white border-violet-900 bg-violet-900/5 rounded-xl outline-none focus:border-violet-600 transition"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
      />
    </div>
  );
};
