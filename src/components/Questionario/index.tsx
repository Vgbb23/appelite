import {
  Question,
  Smiley,
  SmileyBlank,
  SmileyMeh,
  SmileyNervous,
  SmileySad,
} from 'phosphor-react'
import {
  QuestionContainer,
  RespondaContainer,
  SelectConent,
  SelectConent2,
  SelectContainer,
} from './styles'
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'

interface QuestionarioProps {
  ganhos: string
  marca: string
  foto: StaticImageData | string
  pergunta1: string
  resposta1: string
  resposta2: string
  pergunta2: string
  resposta3: string
  resposta4: string
  onAllAnswered?: (allAnswered: boolean) => void
  resetTrigger?: number
}

export default function Questionario({
  ganhos,
  marca,
  foto,
  pergunta1,
  resposta1,
  resposta2,
  pergunta2,
  resposta3,
  resposta4,
  onAllAnswered,
  resetTrigger,
}: QuestionarioProps) {
  const [selectedButton, setSelectedButton] = useState<number | null>(null)

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex)
  }

  const [selectedButton2, setSelectedButton2] = useState<number | null>(null)

  const handleButtonClick2 = (buttonIndex2: number) => {
    setSelectedButton2(buttonIndex2 === selectedButton2 ? null : buttonIndex2)
  }

  const [selectedButton3, setSelectedButton3] = useState<number | null>(null)

  const handleButtonClick3 = (buttonIndex3: number) => {
    setSelectedButton3(buttonIndex3 === selectedButton3 ? null : buttonIndex3)
  }

  // Verifica se todas as perguntas foram respondidas
  useEffect(() => {
    const allAnswered =
      selectedButton !== null &&
      selectedButton2 !== null &&
      selectedButton3 !== null
    if (onAllAnswered) {
      onAllAnswered(allAnswered)
    }
  }, [selectedButton, selectedButton2, selectedButton3, onAllAnswered])

  // Reset dos estados quando resetTrigger muda
  useEffect(() => {
    setSelectedButton(null)
    setSelectedButton2(null)
    setSelectedButton3(null)
  }, [resetTrigger])
  return (
    <>
      <QuestionContainer>
        <Question size={20} color="#D4AF37" weight="fill" />
        <h3
          style={{
            color: '#F4E4B8',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Avaliação Elite
        </h3>
      </QuestionContainer>
      <RespondaContainer>
        <h3>
          💎 GANHE R$ <span data-premium-number="true">{ganhos}</span> VIP
        </h3>
        <p>Transferência Premium via PIX</p>
      </RespondaContainer>
      <Image alt="produto" quality={100} src={foto} width={230} height={230} />
      <SelectContainer>
        <p>De 0 a 5, que nota você dá para o {marca}?</p>
        <SelectConent>
          <button
            onClick={() => handleButtonClick(1)}
            style={{
              background: '#b91c1c',
              filter: selectedButton === 1 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 1 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileyNervous size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(2)}
            style={{
              background: '#c2410c',
              filter: selectedButton === 2 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 2 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileySad size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(3)}
            style={{
              background: '#ca8a04',
              filter: selectedButton === 3 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 3 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileyBlank size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(4)}
            style={{
              background: '#65a30d',
              filter: selectedButton === 4 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 4 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileyMeh size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(5)}
            style={{
              background: '#0d9488',
              filter: selectedButton === 5 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 5 ? 'scale(1.05)' : 'none',
            }}
          >
            <Smiley size={32} color="#fff" />
          </button>
        </SelectConent>
      </SelectContainer>

      <SelectContainer>
        <p>{pergunta1}</p>
        <SelectConent2>
          <button
            onClick={() => handleButtonClick2(1)}
            style={{
              background:
                selectedButton2 === 1
                  ? 'linear-gradient(135deg, #D4AF37, #F4E4B8)'
                  : '#2A2A2A',
              color: selectedButton2 === 1 ? '#0A0A0A' : '#E0E0E0',
              transform: selectedButton2 === 1 ? 'scale(1.05)' : 'none',
              border:
                selectedButton2 === 1
                  ? '2px solid #F4E4B8'
                  : '2px solid #3A3A3A',
              fontWeight: selectedButton2 === 1 ? '700' : '500',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {resposta1}
          </button>

          <button
            onClick={() => handleButtonClick2(2)}
            style={{
              background:
                selectedButton2 === 2
                  ? 'linear-gradient(135deg, #D4AF37, #F4E4B8)'
                  : '#2A2A2A',
              color: selectedButton2 === 2 ? '#0A0A0A' : '#E0E0E0',
              transform: selectedButton2 === 2 ? 'scale(1.05)' : 'none',
              border:
                selectedButton2 === 2
                  ? '2px solid #F4E4B8'
                  : '2px solid #3A3A3A',
              fontWeight: selectedButton2 === 2 ? '700' : '500',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {resposta2}
          </button>
        </SelectConent2>
      </SelectContainer>
      <SelectContainer>
        <p>{pergunta2}</p>
        <SelectConent2>
          <button
            onClick={() => handleButtonClick3(1)}
            style={{
              background:
                selectedButton3 === 1
                  ? 'linear-gradient(135deg, #D4AF37, #F4E4B8)'
                  : '#2A2A2A',
              color: selectedButton3 === 1 ? '#0A0A0A' : '#E0E0E0',
              transform: selectedButton3 === 1 ? 'scale(1.05)' : 'none',
              border:
                selectedButton3 === 1
                  ? '2px solid #F4E4B8'
                  : '2px solid #3A3A3A',
              fontWeight: selectedButton3 === 1 ? '700' : '500',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {resposta3}
          </button>

          <button
            onClick={() => handleButtonClick3(2)}
            style={{
              background:
                selectedButton3 === 2
                  ? 'linear-gradient(135deg, #D4AF37, #F4E4B8)'
                  : '#2A2A2A',
              color: selectedButton3 === 2 ? '#0A0A0A' : '#E0E0E0',
              transform: selectedButton3 === 2 ? 'scale(1.05)' : 'none',
              border:
                selectedButton3 === 2
                  ? '2px solid #F4E4B8'
                  : '2px solid #3A3A3A',
              fontWeight: selectedButton3 === 2 ? '700' : '500',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {resposta4}
          </button>
        </SelectConent2>
      </SelectContainer>
    </>
  )
}
