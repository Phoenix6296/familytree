import styles from './App.module.css'
import Details from './Components/Details/Details'
import Structure from './Components/Structure/Structure'
const App = () => {
  return (
    <div className={`${styles.app}`}>
      <Structure />
      <Details />
    </div>
  )
}

export default App