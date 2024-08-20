import { LockSimpleOpen } from 'phosphor-react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
}

export default function BuyButton({ title }: ButtonProps) {
  return (
    <>
      <ButtonContainer href="https://go.mundpay.com/xttv8">
        <LockSimpleOpen size={30} color="#fff" weight="fill" /> {title}
      </ButtonContainer>
    </>
  )
}
