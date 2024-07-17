import React from 'react'
import { Todo } from '../../_interfaces/global'
import CheckButton from '../components/CheckButton'
import Input from '../form/Input'
import { editTodo } from '../../_api/todoAPI'

interface ITodoItemDefault extends Todo {
  index: string
}

export default function TodoItemDefault({ id, index, text }: ITodoItemDefault) {
  return (
    <div key={id} className='flex items-center mb-2'>
      <div className='flex items-center'>
        <div className='pr-3 text-lg'>{index}.</div>
      </div>
      <form action={editTodo} className='flex justify-between items-center mb-2 flex-grow'>
        <input type="hidden" name='id' value={id} />
        <Input name="text" type="text" value={text} />
        <CheckButton type="submit" />
      </form>
    </div>
  );
}