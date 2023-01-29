import styles from './Member.module.css'
import Avatar from '@mui/icons-material/Boy';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Member = () => {
    return (
        <div className={`${styles.member}`}>
            <ArrowRightIcon sx={{ cursor: 'pointer' }} />
            <div>
                <Avatar />
                <p>Member Name</p>
            </div>
        </div>
    )
}

export default Member