import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider } from "antd"
import { ThemeConfig } from "antd/lib"
import { FC, PropsWithChildren } from "react"

const theme: ThemeConfig = {
  token: {
    colorBgLayout: "#f4f4f4",
    colorBgContainer: "#fff",
    colorPrimary: "#3E7972",
  }
}

export const AntdContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  )
}
