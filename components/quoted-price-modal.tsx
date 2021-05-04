import { Button, Modal } from 'antd'
import { formatMoney } from 'accounting'

import styles from './quoted-price-modal.module.css'

export interface QuotedPriceModalProps {
  visible?: boolean
  price?: number
  loading?: boolean
  onOk?: () => void
  onCancel?: () => void
}

const QuotedPriceModal: React.FC<QuotedPriceModalProps> = ({
  visible = false,
  price = 0,
  loading = false,
  onOk,
  onCancel
}) => {
  return (
    <Modal width={530} closable={false} footer={false} visible={visible}>
      <div className={styles.content}>
        <div className={styles.title}>
          确定报价 {formatMoney(price, '¥ ')} 元吗？
        </div>
        <div className={styles.text}>
          报价无需进行付款，报价后24小时内如果版权所有者同意出售，须在24小时内支付。逾期未付将扣除20信誉值.如24小时内版权所有者未同意，报价自动视为失效。
        </div>
        <div className={`${styles.text} ${styles.red}`}>
          如已有报价，报价将会被覆盖
        </div>
        <div className={styles.btns}>
          <Button
            block
            type="primary"
            size="large"
            className={`${styles.btn} ${styles.ok}`}
            loading={loading}
            onClick={onOk}
          >
            确定报价
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

export default QuotedPriceModal
