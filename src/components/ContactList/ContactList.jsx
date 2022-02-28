import { ContactsItem,ButtonList } from '../style.styled'
import { useDispatch } from 'react-redux'
import { Delete } from '../../redux/slice'
export default function ContactList({ visibal, click }) {
  const dispatch = useDispatch()
  
  return (
    <ContactsItem>
      {visibal.map((select) => (
        <li key={select.id}>
          {select.name}:{select.number}
          <ButtonList onClick={() => dispatch(Delete(select.id))}>
            delete
          </ButtonList>
        </li>
      ))}
    </ContactsItem>
  )
}
