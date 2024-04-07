import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import Image from 'next/image'
import robotImage from '@/app/robot.png'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to engage-vercel-ai-sdk-3.
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source AI chatbot app template built with:
          <ul className="py-5">
            <li>
              <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://sdk.vercel.ai">
                Vercel AI SDK
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://vercel.com/storage/kv">
                Vercel KV
              </ExternalLink>
            </li>
          </ul>
        </p>
        <p className="leading-normal text-muted-foreground">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          to combine text with generative UI as output of the LLM. The UI state
          is synced through the SDK so the model is aware of your interactions
          as they happen.
        </p>
      </div>
      <p className="p-5 text-sm flex gap-2">
        <div>
          <strong>NOTE:</strong>
        </div>

        <div>
          Data is currently being simulated for illustrative purposes and should
          not be considered as financial advice.
        </div>
      </p>
    </div>
  )
}
