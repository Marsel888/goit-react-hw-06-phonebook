import React from 'react'
import { InputRe, Button, Form } from '../style.styled'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/slice'
import { nanoid } from 'nanoid'
function ContackForm({ contacts }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  let select = useSelector((state) => state.user.contacts)
  const dispatch = useDispatch()
  const inputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value)
    }
  }
  const test = (data) => {
    return select.some((item) => {
      return item.name?.toLowerCase() === data
    })
  }

  const submitForm = ({ name, number }) => {
    if (test(name.toLowerCase())) {
      return alert(`${name} уже есть`)
    }
    localStorage.setItem('Контакты', JSON.stringify(select))
    dispatch(addContact({ id: nanoid(), name, number }))
  }

  const hendlerSubmit = (e) => {
    e.preventDefault()
    submitForm({ name, number })

    setName('')
    setNumber('')
  }

  return (
    <Form action="" onSubmit={hendlerSubmit}>
      <label>
        Имя
        <InputRe
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Имя"
        />
      </label>
      <label>
        <InputRe
          type="tel"
          name="number"
          value={number}
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="телефон"
          required
        />
      </label>

      <Button type="submit">Поиск</Button>
    </Form>
  )
}

export default ContackForm
