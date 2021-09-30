const Dropdown = ({ label, options, name, onChange }) => {
  const renderDropdownOptions = () => {
    return options.map((el, i) => {
      return (
        <option key={i} className='dropdown__option' value={el}>
          {el}
        </option>
      );
    });
  };

  return (
    <div className='dropdown'>
      <label className='dropdown__label' htmlFor='selector'>
        {label}
      </label>
      <select
        onChange={e => onChange(e.target.value * 1)}
        className='dropdown__select'
        name='dropdown selector'
        id='selector'
      >
        {renderDropdownOptions()}
      </select>
    </div>
  );
};

export default Dropdown;
