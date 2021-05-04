import { InputNumber } from 'antd'
import { InputNumberProps } from 'antd/lib/input-number'

export interface PriceInputProps {
  value?: number
}

const currencyParser = (val: string | undefined) => {
  const value = val || '0'
  return parseInt(value.replace(/¥\s?|(,*)/g, ''))
}

const PriceInput: React.FC<
  PriceInputProps &
    Pick<
      InputNumberProps<number>,
      'onChange' | 'precision' | 'size' | 'disabled'
    >
> = (props) => {
  const { value, onChange, precision, size, disabled } = props
  return (
    <InputNumber
      size={size}
      style={{ width: '100%' }}
      min={0}
      max={20000}
      step={10}
      value={value}
      onChange={onChange}
      formatter={(value) => `¥ ${value}`}
      precision={precision}
      parser={currencyParser}
      disabled={disabled}
    />
  )
}

export default PriceInput
