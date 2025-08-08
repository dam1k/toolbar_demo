import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - DeceptiConf',
    default: 'DeceptiConf - A community-driven design conference',
  },
  description:
    'At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
        <script
          async
          id="toolbar-script"
          data-toolbar-api-key="57c7a9a4-7f60-43bb-bdb5-50b56568c6f4"
          src="http://localhost:60014/embedded-app.js"
          // src="https://get.usetool.bar/embedded-app.js"
        ></script>
      </body>
    </html>
  )
}
