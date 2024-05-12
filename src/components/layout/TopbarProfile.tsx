"use client"

import { Avatar, Button, Dropdown } from "antd"
import { signIn, signOut, useSession } from "next-auth/react"
import { FC, useCallback } from "react"

const SignInButton: FC = () => {
  const onClick = useCallback(async () => {
    await signIn("auth0")
  }, [])

  return (
    <Button type="primary" onClick={onClick}>Sign In</Button>
  )
}

export const TopbarProfile: FC = () => {
  const { data } = useSession()

  const onSignOut = useCallback(async () => {
    await signOut()
  }, [])

  if (!data?.user) {
    return <SignInButton />
  }

  return (
    <Dropdown menu={{
      items: [
        {
          key: 0,
          label: "Sign Out",
          onClick: onSignOut,
        }
      ]
    }}>
      <Button style={{ height: 40 }}>
        {data.user.image && <Avatar src={data.user.image} style={{ marginRight: 8 }} />}
        {data.user?.name || data.user?.email}
      </Button>
    </Dropdown>
  )
}
