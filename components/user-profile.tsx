import { useRouter } from 'next/router'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import useMe from '../hooks/use-me'
import styles from './user-profile.module.css'

export interface UserProfileProps {
  children: React.ReactNode
}

export default function UserProfile({ children }: UserProfileProps) {
  const router = useRouter()
  const { me } = useMe({
    redirectTo: `/login?ref=${encodeURIComponent(router.asPath)}`
  })

  return (
    <div className="container">
      <div className={styles.user}>
        <Avatar
          size={88}
          src={me?.avatar}
          className={styles.avatar}
          icon={<UserOutlined />}
        />
        <div className={styles.name}>{me?.name}</div>
        <div className={styles.point}>信誉积分：{me?.credit}</div>
      </div>
      <main>{children}</main>
    </div>
  )
}
