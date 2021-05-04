import { useState } from 'react'
import { Button, Modal, Checkbox } from 'antd'
import { formatMoney } from 'accounting'

import styles from './quoted-price-modal.module.css'

export interface QuotedPriceModalProps {
  visible?: boolean
  price?: number
  name?: string
  loading?: boolean
  onOk?: () => void
  onCancel?: () => void
}

const SellModal: React.FC<QuotedPriceModalProps> = ({
  visible = false,
  price = 0,
  name = '',
  loading = false,
  onOk,
  onCancel
}) => {
  const [isAgree, setIsAgree] = useState<boolean>(false)

  return (
    <Modal width={530} closable={false} footer={false} visible={visible}>
      <div className={styles.content}>
        <div className={styles.title}>
          确定要以 {formatMoney(price, '¥ ')} 元价格出售给 {name} 吗？
        </div>
        <div className={`${styles.text} ${styles.red}`}>
          NFT-Holder 将收取10%手续费，剩余金额 NFT-Holder
          微博账号将通过微博钱包转至您的微博账户
        </div>
        <div style={{ marginTop: 15 }}>
          <Checkbox
            defaultChecked={isAgree}
            onChange={(e) => setIsAgree(e.target.checked)}
          >
            我已知晓并同意
          </Checkbox>
        </div>
        <div className={styles.btns}>
          <Button
            block
            type="primary"
            size="large"
            className={`${styles.btn} ${styles.ok}`}
            disabled={!isAgree}
            loading={loading}
            onClick={onOk}
          >
            确定
          </Button>
          <Button
            block
            type="primary"
            size="large"
            className={styles.btn}
            onClick={onCancel}
          >
            取消
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default SellModal
