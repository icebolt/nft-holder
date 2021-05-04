import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

import { UserType } from '../typings/user'

export interface UseMeProps {
  redirectTo?: boolean | string
  redirectIfFound?: boolean
}

export default function useMe({
  redirectTo = false,
  redirectIfFound = false
}: UseMeProps = {}) {
  const { data: me, mutate: mutateMe } = useSWR<UserType>('/api/me')

  useEffect(() => {
    if (!redirectTo || !me) return

    if (
      (redirectTo && !redirectIfFound && !me?.isLoggedIn) ||
      (redirectIfFound && me?.isLoggedIn)
    ) {
      Router.push(redirectTo as string)
    }
  }, [me, redirectIfFound, redirectTo])

  return { me, mutateMe }
}
