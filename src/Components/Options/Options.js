import styles from './Options.module.css'
import Button from '@mui/material/Button';

const Options = () => {
    return (
        <div className={`${styles.options} ${styles.center}`}>
            <div className={`${styles.center}`}>
                <Button variant="outlined" fullWidth={true}>Import JSON</Button>
                <Button variant="outlined" fullWidth={true} >Add Member</Button>
            </div>
            <div className={`${styles.center}`}>
                <Button variant="outlined" fullWidth={true}>Export JSON</Button>
                <Button variant="outlined" fullWidth={true}>Print Family Tree</Button>
            </div>
        </div>
    )
}

export default Options