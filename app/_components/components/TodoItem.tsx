import React, { useState, useRef, useEffect } from 'react';
import Checkbox from '../form/Checkbox'
import DeleteButton from '../components/DeleteButton'
import { Todo } from '../../_interfaces/global'
import { changeStatusTodo, deleteTodo } from '../../_api/todoAPI'
import Overlay from '../hoc/Overlay'
import SubmitButton from '../components/SubmitButton'
// @ts-ignore
import { useFormState, useFormStatus } from "react-dom";
import CheckButton from '../components/CheckButton'
import Input from '../form/Input'
import { editTodo } from '../../_api/todoAPI'



export interface ITodoItemProps extends Todo {
  mode: boolean;
  index: string;
  listId: string;
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, text, completed, index, mode, listId }) => {


  const [overlay, setoverlay] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(deleteTodo, { success: false })

  useEffect(() => {
    if (state.success) {
      // apply logic here
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

  const overlayComponent = (
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
  )

  if (mode) {
    return (
      <div key={id} className='flex items-center mb-2'>
        <div className='flex items-center'>
          <div className='pr-3 text-lg'>{index}.</div>
        </div>
        <div className="flex items-cener"></div>
        <form action={editTodo} className='flex justify-between items-center mb-2 flex-grow'>
          <input type="hidden" name='id' value={id} />
          <Input name="text" type="text" value={text} />
          <CheckButton type="submit" css='ml-1'/>
        </form>
        <DeleteButton onClick={toggleOverlay} css='mx-0 mb-2 ml-2 block sm:hidden' />
        {overlayComponent}
      </div>
    );

  } else {
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
        {overlayComponent}
      </div>
    );
  }






  // if (mode) {
  //   return <TodoItemEdit index={index} id={id} text={text} completed={completed} />
  // } else {
  //   return <TodoItemDefault index={index} id={id} text={text} completed={completed} listId={listId} />
  // }
};

export default TodoItem