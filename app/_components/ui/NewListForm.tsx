"use client"
import React, { useState, useEffect } from 'react';
import { createNewList } from '../../_api/todoAPI'
import Overlay from '../hoc/Overlay'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import CancelButton from '../form/CancelButton'
import CreateButton from '../form/CreateButton'
// @ts-ignore
import { useFormState } from "react-dom";

type Props = {}

export default function NewListForm({ }: Props) {
  const [overlay, setOverlay] = useState(false)
  const [state, formAction] = useFormState(createNewList, { success: false })

  console.log(state)

  useEffect(() => {
    if (state.success) {
      toggleOverlay()
    }
  }, [state]);

  const toggleOverlay = () => {
    setOverlay(!overlay)
  }

  return (
    <div className='w-full'>
      <div className="flex justify-end mb-5">
        <CreateButton text='Add new list' onClick={toggleOverlay} css='rounded-full w-auto px-4' />
      </div>
      <Overlay
        header='Create new list'
        overlay={overlay}
        showOverlay={toggleOverlay}
      >
        <form action={formAction} id="new-list-form">
          <Input name="text" type="text" value="" placeholder='Enter a new list...' />
          <div className="flex justify-end w-full pt-5">
            <CancelButton text='Cancel' onClick={toggleOverlay}/>
            <SubmitButton type='submit' label='Submit' />
          </div>
        </form>
      </Overlay>
    </div>
  )
}