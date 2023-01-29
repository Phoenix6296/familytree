import styles from './Structure.module.css'
import Tree from '../Tree/Tree';
import Options from '../Options/Options';
import Search from '../Search/Search';

const Structures = () => {
    return (
        <div className={`${styles.structure}`}>
            <Search />
            <Tree />
            <Options />
        </div>
    )
}

export default Structures