import React, { useState, useRef, useEffect } from 'react';
import Checkbox from '../form/Checkbox'
import DeleteButton from '../form/DeleteButton'
import { Todo } from '../../_interfaces/global'
import { changeStatusTodo, deleteTodo } from '../../_api/todoAPI'
import Overlay from '../hoc/Overlay'
import SubmitButton from '../form/SubmitButton'
// @ts-ignore
import { useFormState, useFormStatus } from "react-dom";

interface ITodoItemDefault extends Todo {
  index: string
  listId: string;
}

export default function TodoItemDefault({ id, index, text, completed, listId }: ITodoItemDefault) {
  const [overlay, setoverlay] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(deleteTodo, {success: false})

  useEffect(() => {
    if (state.success) {
      toggleOverlay()
    }
  }, [state]);

  const toggleOverlay = () => {
    setoverlay(!overlay)
  }

  const handleChange = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <div key={id}>
      <div className='flex justify-between items-center group mb-2'>
        <div className='flex items-center'>
          <div className='pr-3'>{index}.</div>
          <div>{text}</div>
        </div>
        <div className="flex">
          <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
            <DeleteButton onClick={toggleOverlay} />
          </div>
          <form action={changeStatusTodo} ref={formRef} className="flex items-center">
            <input type="hidden" name='id' value={id} />
            <Checkbox checked={completed} onChange={handleChange} name="checkbox" />
          </form>
        </div>
      </div>
      <Overlay
        header='Do you really want to delete this item?'
        overlay={overlay}
        showOverlay={toggleOverlay}
      >
        <form action={formAction} className='flex items-center mb-2 flex-grow'>
          <input type="hidden" name='id' value={id} />
          <input type="hidden" name='listId' value={listId} />
          <div className="flex justify-end w-full">
            <button type="reset" className='text-blue-600 font-semibold hover:underline pr-5' onClick={() => toggleOverlay()}>Cancel</button>
            <SubmitButton type='submit' label='Submit' />
          </div>
        </form>
      </Overlay>
    </div>
  );
}