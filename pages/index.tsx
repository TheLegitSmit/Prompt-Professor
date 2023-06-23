import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12 bg-purple-900 text-zinc-100 min-h-screen min-w-full px=6 items-center">
      <section className="flex flex-col gap-6 lg:w-1/2">
        <Text variant="h1">Prompt Engineering 101</Text>
        <Text className="text-zinc-200">
          Learn the basics of developing a good prompt for GPT chatbots.
        </Text>
      </section>

      <section className="flex flex-col gap-3 lg:w-1/2">
        <div className="">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
