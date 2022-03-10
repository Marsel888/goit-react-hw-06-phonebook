import { ContactsItem, ButtonList } from '../style.styled'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/slice'
import { useSelector } from 'react-redux'
export default function ContactList({ click }) {
  const dispatch = useDispatch()

  let select = useSelector((state) => state.user.contacts)
  let fil = useSelector((state) => state.user.filter)

  localStorage.setItem('Контакты', JSON.stringify(select))
  const visibal = select?.filter((sel) => {
    return sel.name?.toLowerCase().includes(fil?.toLowerCase())
  })

  return (
    <ContactsItem>
      {visibal.map((select) => (
        <li key={select.id}>
          {select.name}:{select.number}
          <ButtonList onClick={() => dispatch(deleteContact(select.id))}>
            delete
          </ButtonList>
        </li>
      ))}
    </ContactsItem>
  )
}
