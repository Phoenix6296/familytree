import styles from './Search.module.css'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    return (
        <div className={`${styles.search} ${styles.center}`}>
            <input type="text" placeholder="Search a Member" />
            <SearchIcon sx={{
                cursor: 'pointer',
            }} />
        </div>
    )
}

export default Search