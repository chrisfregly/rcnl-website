import { useRef } from 'react';
import { MdClose } from 'react-icons/md';

export default function SearchInput({ id, value, onChange, placeholder }) {
  const inputRef = useRef(null);

  return (
    <div className="relative">
      <input ref={inputRef} id={id} className="clearable-search w-full min-h-11 border-b-2 border-blue pl-2 pr-12 py-1 text-base"
        placeholder={placeholder} type="search" value={value} onChange={event => onChange(event.target.value)} />
      {value.length > 0 && (
        <button type="button" aria-label="Clear search" className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-slate-600 hover:text-blue"
          onClick={() => { onChange(''); inputRef.current?.focus(); }}>
          <MdClose aria-hidden="true" className="text-xl" />
        </button>
      )}
    </div>
  );
}
