"use server";

import { revalidatePath } from "next/cache";

//added prevState because of useFormState hook that controls loading and state
export async function editTodo(prevState: any, formData: FormData) {
  const rawFormData = {
    text: formData.get("text"),
  };

  const todoId = formData.get("id");

  try {
    const res = await fetch(`${process.env.BASE_URL}/todos/${todoId}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function changeStatusTodo(prevState: any, formData: FormData) {
  const rawFormData = {
    completed: formData.get("checkbox") === "on" ? true : false,
  };

  const todoId = formData.get("id");

  try {
    const res = await fetch(`${process.env.BASE_URL}/todos/${todoId}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function deleteTodo(prevState: any, formData: FormData) {
  const todoId = formData.get("id");
  const listId = formData.get("listId");

  console.log(todoId, listId)

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/lists/${listId}/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function createNewList(prevState: any, formData: FormData) {
  const rawFormData = {
    name: formData.get("text"),
  };

  try {
    const res = await fetch(`${process.env.BASE_URL}/lists`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function createNewTodo(prevState: any, formData: FormData) {
  const rawFormData = {
    text: formData.get("text"),
    completed: false
  };

  const listId = formData.get("listId");

  try {
    const res = await fetch(`${process.env.BASE_URL}/lists/${listId}/todos`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}
