
import '../style.css'
import { nanoid } from 'nanoid'
import ContackForm from './contactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { logIn} from '../redux/slice'
function App() {


  const dispatch = useDispatch()

  let select = useSelector((state) => state.user.login)
  let fil = useSelector((state) => state.user.filter)


  const submitForm = ({ name, number }) => {
    if (test(name.toLowerCase())) {
      return alert(`${name} уже есть`)
    }
    localStorage.setItem('Контакты', JSON.stringify(select))
    dispatch(logIn({ id: nanoid(), name, number }))
  }
  
  const test = (data) => {
    return select.some((item) => {
      return item.name?.toLowerCase() === data
    })
  }

  localStorage.setItem('Контакты', JSON.stringify(select))
  const visibal = select?.filter((sel) => {
    return sel.name?.toLowerCase().includes(fil?.toLowerCase())
  })

  return (
    <>
      <ContackForm submitForm={submitForm} />

      <Filter value={fil} />

      <ContactList visibal={visibal} />
    </>
  )
}

export default App
