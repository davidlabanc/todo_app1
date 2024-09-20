'use server'

import { revalidatePath } from "next/cache";

//not using useFormState hook so doenst need prevState
export async function editTodo(formData: FormData) {
  console.log(formData)
  const rawFormData = {
    text: formData.get('text'),
  }

  const res = await fetch(`${process.env.BASE_URL}/todos/${formData.get('id')}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')
}

export async function changeStatusTodo(formData: FormData) {
  const rawFormData = {
    completed: formData.get('checkbox') === 'on' ? true : false
  }

  const res = await fetch(`${process.env.BASE_URL}/todos/${formData.get('id')}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')
}

//added prevState because of useFormState hook that controls loading 
export async function deleteTodo(prevState: any, formData: FormData) {

  const res = await fetch(`${process.env.BASE_URL}/lists/${formData.get('listId')}/todos/${formData.get('id')}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')

  return { success: true }
}

export async function createNewList(prevState: any, formData: FormData) {
  const rawFormData = {
    name: formData.get('text'),
  }

  const res = await fetch(`${process.env.BASE_URL}/lists`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')

  return { success: true }
}

export async function createNewTodo(prevState: any, formData: FormData) {
  const rawFormData = {
    text: formData.get('text'),
  }

  const res = await fetch(`${process.env.BASE_URL}/lists/${formData.get('listId')}/todos`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')

  return { success: true }
}