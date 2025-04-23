import React from 'react'
import freeShippingIcon from '../public/freeShippingIcon.svg'
import securePaymentIcon from '../public/securePaymentIcon.svg'
import giftCertificateIcon from '../public/giftCertificateIcon.svg'
import supportIcon from '../public/supportIcon.svg'
import Advantage from './Advantage'
export default function Advantages() {
  const advantages = [
    {
      icon: freeShippingIcon,
      title: 'Free Shipping',
      subtitle: 'Orders over $200',
      isHighlighted: false,
    },
    {
      icon: securePaymentIcon,
      title: 'Secure Payment',
      subtitle: '100% secure payment',
      isHighlighted: false,
    },
    {
      icon: giftCertificateIcon,
      title: 'Gift Cerificate',
      subtitle: 'Buy now $500 to $1000',
      isHighlighted: true,
    },
    {
      icon: supportIcon,
      title: '24/7 Support',
      subtitle: 'Ready support',
      isHighlighted: false,
    },
  ]
  return (
    <div className='w-full h-[260px] bg-[#F3F3F3] px-[20px] lg:px-[70px] xl:px-[100px] flex justify-between items-center'>
      {advantages.map((advantage, index) => (
        <Advantage
          key={index}
          icon={advantage.icon}
          title={advantage.title}
          subtitle={advantage.subtitle}
          isHighlighted={advantage.isHighlighted}
        />
      ))}
    </div>
  )
}
