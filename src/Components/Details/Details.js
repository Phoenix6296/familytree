import styles from './Details.module.css'
import InputLabel from '@mui/material/InputLabel';
import { Input, OutlinedInput } from '@mui/material';
const Details = () => {
    return (
        <div className={`${styles.details} ${styles.center}`}>
            <h1>Fill the details </h1>
            <form action="" type="submit" className={`${styles.form}`}>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="name" sx={{ color: 'white' }}>Name:</InputLabel>
                    <OutlinedInput id="name" required autoComplete />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="spouse" sx={{ color: 'white' }}>Spouse:</InputLabel>
                    <OutlinedInput id="spouse" required autoComplete />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="location" sx={{ color: 'white' }}>Location:</InputLabel>
                    <OutlinedInput id="location" required autoComplete />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="birthDate" sx={{ color: 'white' }}>Birth Date:</InputLabel>
                    <OutlinedInput id="date" type="date" required autoComplete />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="address" sx={{ color: 'white' }}>Address:</InputLabel>
                    <OutlinedInput id="address" multiline autoComplete />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="photo" sx={{ color: 'white' }}>Photo:</InputLabel>
                    <Input id="photo" type="file" required autoComplete />
                </div>
            </form>
        </div>
    )
}

export default Details