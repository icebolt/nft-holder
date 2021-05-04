import { Typography } from 'antd'
import { useEffect, useState } from 'react'

import Layout from '../components/layout'
import styles from '../styles/faq.module.css'

const { Title, Paragraph, Link } = Typography

export default function Faq() {
  const [href, setHref] = useState<string>()

  useEffect(() => {
    setHref(location.hostname)
  }, [])

  return (
    <Layout>
      <div className="container">
        <Typography className={styles.content}>
          <Title level={4}>我购买的是什么？</Title>
          <Paragraph>
            该微博本身将继续在新浪微博上发布。 您所购买的是新浪微博的 NFT
            卡片，该卡片是唯一的，因为它已由创建者签名并验证。
            <br />
            这份亲笔签名的卡片仅在 NFT-Holder 上发行一次。
            它使用加密技术进行签名，并包含原始微博的元数据，例如：发布该微博时，该微博的文本内容、时间戳等。
          </Paragraph>
          <Title level={4}>我为什么要买微博卡片？</Title>
          <Paragraph>
            有任何数字内容的卡片都算是一项金融投资，可以保持情感价值，并可以在持有人和作者之间建立联系。
            就像 NBA
            篮球卡上的亲笔签名一样，微博卡片本身就是创作者对内容的亲笔签名，使其稀缺，独特且有价值。
          </Paragraph>
          <Title level={4}>如何使用 NFT-Holder 购买微博卡片？</Title>
          <Paragraph>
            打开{' '}
            <Link target="_blank" href={href}>
              {href}
            </Link>
            ，然后输入您要购买的微博网址，进行报价，报价需是10的整数倍。注意，微博是否卖出，卖给谁是由微博所有者决定，并不是价高者得。
            <br />
            如果微博卡片所有者不接受我的报价会怎么样？
            如果您的报价未被接受，则在后24小时，报价自动作废。
          </Paragraph>
          <Title level={4}>如何使用 NFT-Holder 出售我的微博？</Title>
          <Paragraph>
            <ol>
              <li>拥有一个新浪微博账号，并发布微博信息。</li>
              <li>等待您的“粉丝”报价并选择接受关于您微博的报价。</li>
            </ol>
          </Paragraph>
          <Title level={4}>我购买的微博卡片该怎么使用？</Title>
          <Paragraph>
            您可以在 NFT-Holder
            卡片管理中看到它们，也可以使用分享功能向周围的朋友展示它们或与任何收藏品一样，您可以选择将其保存在私人收藏中。后续我们还会推出多次转卖功能，便于您在收藏升值后出售它们，敬请期待。
          </Paragraph>
          <Title level={4}>购买微博卡片的钱去哪了？</Title>
          <Paragraph>
            90％ 将进入到微博所有者的微博钱包。 10％ 给到 NFT-Holder
            用于支付维护和更新平台费用。
          </Paragraph>
          <Title level={4}>
            如果微博原有者在接受我的报价后改变了主意怎么办？
          </Title>
          <Paragraph>
            我们以区块链的方式完成每次交易，区块链上的交易是不可逆的。现在您无疑是该微博卡片的所有者。
          </Paragraph>
          <Title level={4}>我可以买谁的微博？</Title>
          <Paragraph>
            目前，您可以在公开微博帐户发布的任何微博上报价。
          </Paragraph>
        </Typography>
      </div>
    </Layout>
  )
}
