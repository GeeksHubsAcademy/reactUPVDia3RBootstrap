
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const DropDownRB = ({array, functionHandler}) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      {array.map(character => (
        <Dropdown.Item key={character.id} >{character.name}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

