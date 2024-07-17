import List from './_components/components/List'
import { List as IList, Lists } from './_interfaces/global'
import NewListForm from './_components/components/NewListForm'
import Theme from './_components/components/Theme'

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/lists`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  let data: IList[] = await res.json()

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    const res = await fetch(`${process.env.BASE_URL}/lists/${element.id}/todos`, { cache: 'no-store' })
    const todo = await res.json()
    data[index].todo = todo
  }

  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <div className='dark:bg-zinc-900 min-h-screen'>
      <Theme />
      <main className="dark:text-neutral-200 pt-24 w-full flex flex-col items-center">
        <div className='w-1/3 justify-center rounded-lg min-w-80'>
          <NewListForm />
        </div>
        <List lists={data} />
      </main>
    </div>

  );
}