import { useState }from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const hanleInputChange =(evt) => {
    setSearch(evt.target.value);
  };

  const hanleInputKeyDown =(evt) => {
    if(evt.key === 'Enter'){
      onSearch(search);
    }
  };

  return  (
  <div>
    <p>Mi boletera</p>
    <input 
    placeholder = "Busca tu evento favorito" 
    onChange={hanleInputChange}
    onKeyDown={hanleInputKeyDown}
    value={search}
    />
   
  </div>
  );
};

export default Navbar;
