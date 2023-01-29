import Member from '../Member/Member'
import styles from './Tree.module.css'
const Tree = () => {
  return (
    <div className={styles.tree}>
      <h4>Family Tree</h4>
      <hr />
      <Member />
    </div>
  )
}

export default Tree