import { Box, css } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Bellefair } from 'next/font/google'
import './globals.css'

import { Header } from '@/components'

import type { Metadata } from 'next'

const bellefair = Bellefair({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sylvester Abeng',
  description: 'Sample portfolio project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={css`
        color: t('colors.neutral.500');
        background: t('colors.neutral.100');

        ::-moz-selection {
          background: t('colors.neutral.200');
        }

        ::selection {
          background: t('colors.neutral.200');
        }
      `}
    >
      <body className={bellefair.className}>
        <KumaRegistry>
          <Box px={64}>
            <Header />
            {children}
          </Box>
        </KumaRegistry>
      </body>
    </html>
  )
}
