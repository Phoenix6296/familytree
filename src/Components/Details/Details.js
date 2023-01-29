import { useState } from 'react';
import styles from './Details.module.css'
import InputLabel from '@mui/material/InputLabel';
import { Input, OutlinedInput } from '@mui/material';
const Details = () => {
    const [name, setName] = useState('');
    const [spouse, setSpouse] = useState('');
    const [location, setLocation] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddress] = useState('');
    const [photo, setPhoto] = useState('');

    //Store all the details in a single object
    const details = { name, spouse, location, birthDate, address, photo }

    return (
        <div className={`${styles.details} ${styles.center}`}>
            <h1>Fill the details </h1>
            <form action="" type="submit" className={`${styles.form}`}>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="name" sx={{ color: 'white' }}>Name:</InputLabel>
                    <OutlinedInput id="name" required onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="spouse" sx={{ color: 'white' }}>Spouse:</InputLabel>
                    <OutlinedInput id="spouse" required onChange={(e) => { setSpouse(e.target.value) }} />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="location" sx={{ color: 'white' }}>Location:</InputLabel>
                    <OutlinedInput id="location" required onChange={(e) => { setLocation(e.target.value) }} />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="birthDate" sx={{ color: 'white' }}>Birth Date:</InputLabel>
                    <OutlinedInput id="date" type="date" required onChange={(e) => { setBirthDate(e.target.value) }} />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="address" sx={{ color: 'white' }}>Address:</InputLabel>
                    <OutlinedInput id="address" multiline onChange={(e) => { setAddress(e.target.value) }} />
                </div>
                <div className={`${styles.center}`}>
                    <InputLabel htmlFor="photo" sx={{ color: 'white' }}>Photo:</InputLabel>
                    <Input id="photo" type="file" required onChange={(e) => { setPhoto(e.target.value) }} />
                </div>
            </form>
        </div>
    )
}

export default Details