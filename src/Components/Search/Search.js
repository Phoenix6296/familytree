import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput } from '@mui/material';
const Search = () => {
    return (
        <OutlinedInput
            type="text"
            placeholder="Search a Member"
            fullWidth
            sx={{ border: 'none' }}
            endAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    )
}

export default Search