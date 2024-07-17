import React, { useState, useEffect } from 'react';
import { createNewTodo } from '../../_api/todoAPI'
import Overlay from '../hoc/Overlay'
import SubmitButton from '../components/SubmitButton'
import Input from '../form/Input'
import CreateButton from '../components/CreateButton'
// @ts-ignore
import { useFormState } from "react-dom";

type Props = {
  listId: string
}

export default function NewTodoForm({ listId }: Props) {
  const [overlay, setoverlay] = useState(false)
  const [state, formAction] = useFormState(createNewTodo, { success: false })

  useEffect(() => {
    if (state.success) {
      toggleOverlay()
    }
  }, [state]);

  const toggleOverlay = () => {
    setoverlay(!overlay)
  }

  return (
    <div>
      <div className="flex justify-center w-full mb-5">
        <CreateButton text='Add new item' onClick={toggleOverlay} css='w-full'/>
      </div>
      <Overlay
        header='Add new item to the list'
        overlay={overlay}
        showOverlay={toggleOverlay}
      >
        <form action={formAction}>
          <input type="hidden" name='listId' value={listId} />
          <Input name="text" type="text" value="" placeholder='Enter a new todo...' />
          <div className="flex justify-end w-full pt-5">
            <button type="reset" className='text-blue-600 font-semibold hover:underline pr-5' onClick={() => toggleOverlay()}>Cancel</button>
            <SubmitButton type='submit' label='Submit' />
          </div>
        </form>
      </Overlay>
    </div>
  )
}