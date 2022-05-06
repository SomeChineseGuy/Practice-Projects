
export const DropdownContainer = (props) => {
  const DropdownItem = (props) => {
    console.log(props);
    return(
      <div>
        
      </div>
    );
  }

  const showData = (data) => {
    return data.map((item) => {
      return (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <DropdownItem
            id={item.id}
            options={item.options}
            placeholder={item.placeholder}
            require={item.require}
            type={item.type}
            value={item.value}
            width={item.width}
          />
        </div>        
      );
    })
  };

  showData(props.formData)
  return (
    <div>
      {showData(props.formData)}
    </div>
  )
}