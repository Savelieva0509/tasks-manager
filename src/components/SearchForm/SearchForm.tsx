import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { setSearchQuery } from '../../redux/search-slice';

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Start enter the title"
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchForm;
