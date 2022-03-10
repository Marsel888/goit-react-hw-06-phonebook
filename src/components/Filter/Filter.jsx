import { LabelName } from '../style.styled'
import { filteredContact } from '../../redux/slice'
import { useDispatch, useSelector } from 'react-redux'

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch()
  const changeFilter = (e) => {
    dispatch(filteredContact(e.target.value))
  }
  let fil = useSelector((state) => state.user.filter)

  return (
    <LabelName>
      Поиск по Имени
      <input
        type="text"
        value={fil}
        onChange={changeFilter}
        placeholder="Поиск "
      />
    </LabelName>
  )
}
