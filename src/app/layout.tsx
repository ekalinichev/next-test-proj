import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { FC, PropsWithChildren } from "react"

import { AntdContainer } from "@/features/ui/AntdContainer"
import { Layout } from "@/ui/layout"

const inter = Inter({ subsets: ["latin"] })

const title = "App title"

export const metadata: Metadata = {
  title,
  description: "Generated by create next app",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
    <body className={inter.className} style={{ margin: 0 }}>
      <AntdContainer>
        <Layout title={title}>
          {children}
        </Layout>
      </AntdContainer>
    </body>
    </html>
  )
}

export default RootLayout

