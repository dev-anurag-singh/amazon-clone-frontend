const Dropdown = ({ label, options, name }) => {
  const renderDropdownOptions = () => {
    return options.map((el, i) => {
      return (
        <option key={i} className='dropdown__option' value='1'>
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
