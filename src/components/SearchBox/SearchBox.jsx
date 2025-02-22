import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className={styles.label}>Find contacts by name</label>
      <div className={styles.inputWrapper}>
        <FaSearch className={styles.icon} />
        <input
          id="search"
          type="text"
          value={filter}
          onChange={handleChange}
          className={styles.input}
          placeholder="Search contacts by name..."
        />
      </div>
    </div>
  );
};

export default SearchBox;