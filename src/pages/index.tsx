/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'
import Check from '../../public/check.webp'
import Pix from '../../public/pix.svg'
import PowerBank from '../../public/powerbanknew.webp'
import FoneJBL from '../../public/fonejbl.png'
import Smartwatch from '../../public/smartwatch.jpg'
import CopoStanley from '../../public/copostanley.webp'
import TenisMeia from '../../public/tenismeiafeminino.webp'
import MesaCabeceira from '../../public/mesa.webp'

import {
  BoxContainer,
  BoxContainer3,
  BoxContainer4,
  BoxContainer5,
  BoxContainer6,
  InputContainer,
  MainContainer,
  MainContent,
  ModalButton,
  ModalContent,
  ModalOverlay,
  SeguroContainer,
} from '@/styles/index.styles'
import { useState } from 'react'
import Image from 'next/image'
import {
  LockSimple,
  PaperPlaneRight,
  Gift,
  Clock,
  CheckCircle,
  Star,
} from 'phosphor-react'
import Header from '@/components/header'
import Questionario from '../components/Questionario'

const Vietnam = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  const [page, setPage] = useState(0)
  const [email, setEmail] = useState('')
  const [showEmailError, setShowEmailError] = useState(false)

  // Estados para controlar se cada avaliação foi completada
  const [evaluation1Completed, setEvaluation1Completed] = useState(false)
  const [evaluation2Completed, setEvaluation2Completed] = useState(false)
  const [evaluation3Completed, setEvaluation3Completed] = useState(false)
  const [evaluation4Completed, setEvaluation4Completed] = useState(false)
  const [evaluation5Completed, setEvaluation5Completed] = useState(false)
  const [evaluation6Completed, setEvaluation6Completed] = useState(false)

  // Estado para forçar reset dos componentes Questionario
  const [resetCounter, setResetCounter] = useState(0)

  // Função para validar email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Função para lidar com o clique do botão Entrar
  const handleEntrar = () => {
    if (!email || !isValidEmail(email)) {
      setShowEmailError(true)
      return
    }
    setShowEmailError(false)
    setPage(1)
  }

  // Função para resetar estados das avaliações quando mudar de página
  const resetEvaluationStates = () => {
    setEvaluation1Completed(false)
    setEvaluation2Completed(false)
    setEvaluation3Completed(false)
    setEvaluation4Completed(false)
    setEvaluation5Completed(false)
    setEvaluation6Completed(false)
  }

  // Função para navegar para próxima página e resetar estados
  const goToNextPage = (nextPage: number) => {
    resetEvaluationStates()
    setResetCounter((prev) => prev + 1) // Incrementa o contador para forçar reset
    setPage(nextPage)
  }

  return (
    <>
      <Head>
        <title>App ShopeeCash</title>
        <meta name="description" content="App shopee cash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

      <MainContainer className={Vietnam.className}>
        {page === 0 ? (
          <MainContent>
            <Header price="114,26" />
            <BoxContainer>
              <h1>
                Bem vindo ao aplicativo{' '}
                <span style={{ color: '#ff580c' }}>Shopee Cash!</span>
              </h1>
              <InputContainer>
                <p>Digite o email utilizado na compra:</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setShowEmailError(false) // Remove o erro quando o usuário digita
                  }}
                  placeholder="seuemail@exemplo.com"
                />
                {showEmailError && (
                  <p
                    style={{
                      color: '#ff4444',
                      fontSize: '12px',
                      margin: '5px 0',
                    }}
                  >
                    Por favor, digite um email válido
                  </p>
                )}
                <div>
                  <button onClick={handleEntrar} disabled={!email}>
                    Entrar
                  </button>
                </div>
              </InputContainer>
            </BoxContainer>
            <SeguroContainer>
              <LockSimple size={15} color="#fff" weight="fill" />
              <p>100% Seguro e Confiável</p>
            </SeguroContainer>
          </MainContent>
        ) : page === 1 ? (
          <MainContent>
            <Header price="114,26" />
            <BoxContainer>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <CheckCircle size={24} color="#28a745" weight="fill" />
                <h1
                  style={{ margin: '0', fontSize: '1.5rem', fontWeight: '600' }}
                >
                  Email confirmado com sucesso!
                </h1>
              </div>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#333',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5',
                }}
              >
                🎉 <strong>Parabéns!</strong> Seu acesso foi liberado e você já
                tem{' '}
                <span style={{ color: '#ff580c', fontWeight: 'bold' }}>
                  R$ 114,26
                </span>{' '}
                disponível para saque!
              </p>

              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  border: '2px solid #e9ecef',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginBottom: '1rem',
                  }}
                >
                  <Gift size={20} color="#ff580c" weight="fill" />
                  <h3 style={{ margin: '0', fontSize: '1rem', color: '#333' }}>
                    Como funciona?
                  </h3>
                </div>
                <div
                  style={{
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    color: '#555',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#ff580c' }}>1.</span> Responda
                    perguntas sobre produtos
                  </p>
                  <p
                    style={{
                      margin: '0 0 0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#ff580c' }}>2.</span> Ganhe dinheiro
                    por cada resposta
                  </p>
                  <p
                    style={{
                      margin: '0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#ff580c' }}>3.</span> Saque direto na
                    sua conta PIX
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  backgroundColor: '#fff3cd',
                  borderRadius: '8px',
                  padding: '0.8rem',
                  border: '1px solid #ffeaa7',
                  marginBottom: '1.5rem',
                }}
              >
                <Clock size={18} color="#856404" />
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: '#856404',
                    fontWeight: '500',
                  }}
                >
                  ⏰ Você é um dos poucos a conseguir acesso! Não perca essa
                  oportunidade única.
                </span>
              </div>

              <div>
                <button onClick={() => setPage(2)}>
                  <Star size={20} color="#fff" weight="fill" />
                  Começar a Ganhar Agora!
                </button>
              </div>
            </BoxContainer>
            <SeguroContainer>
              <LockSimple size={15} color="#fff" weight="fill" />
              <p>100% Seguro e Confiável</p>
            </SeguroContainer>
          </MainContent>
        ) : page === 2 ? (
          <MainContent>
            <Header price="137,06" />
            <BoxContainer3>
              <Questionario
                ganhos="22,80"
                marca="Fone Bluetooth JBL"
                foto={FoneJBL}
                pergunta1="Sobre este Fone Bluetooth JBL, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 89,90 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
                onAllAnswered={setEvaluation1Completed}
                resetTrigger={resetCounter}
              />
              <button
                onClick={() => goToNextPage(3)}
                disabled={!evaluation1Completed}
                style={{
                  opacity: evaluation1Completed ? 1 : 0.5,
                  cursor: evaluation1Completed ? 'pointer' : 'not-allowed',
                }}
              >
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
              {!evaluation1Completed && (
                <p
                  style={{
                    color: '#ff4444',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  ⚠️ Responda todas as perguntas para continuar
                </p>
              )}
            </BoxContainer3>
          </MainContent>
        ) : page === 3 ? (
          <MainContent>
            <Header price="165,56" />
            <BoxContainer4>
              <Questionario
                ganhos="28,50"
                marca="Smartwatch Xiaomi"
                foto={Smartwatch}
                pergunta1="Sobre este Smartwatch Xiaomi, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 129,90 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
                onAllAnswered={setEvaluation2Completed}
                resetTrigger={resetCounter}
              />
              <button
                onClick={() => goToNextPage(4)}
                disabled={!evaluation2Completed}
                style={{
                  opacity: evaluation2Completed ? 1 : 0.5,
                  cursor: evaluation2Completed ? 'pointer' : 'not-allowed',
                }}
              >
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
              {!evaluation2Completed && (
                <p
                  style={{
                    color: '#ff4444',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  ⚠️ Responda todas as perguntas para continuar
                </p>
              )}
            </BoxContainer4>
          </MainContent>
        ) : page === 4 ? (
          <MainContent>
            <Header price="194,06" />
            <BoxContainer5>
              <Questionario
                ganhos="34,90"
                marca="Power Bank 20000mAh"
                foto={PowerBank}
                pergunta1="Sobre este Power Bank 20000mAh, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 45,90 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
                onAllAnswered={setEvaluation3Completed}
                resetTrigger={resetCounter}
              />
              <button
                onClick={() => goToNextPage(5)}
                disabled={!evaluation3Completed}
                style={{
                  opacity: evaluation3Completed ? 1 : 0.5,
                  cursor: evaluation3Completed ? 'pointer' : 'not-allowed',
                }}
              >
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
              {!evaluation3Completed && (
                <p
                  style={{
                    color: '#ff4444',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  ⚠️ Responda todas as perguntas para continuar
                </p>
              )}
            </BoxContainer5>
          </MainContent>
        ) : page === 5 ? (
          <MainContent>
            <Header price="228,96" />
            <BoxContainer6>
              <Questionario
                ganhos="32,60"
                marca="Copo Stanley"
                foto={CopoStanley}
                pergunta1="Sobre este Copo Stanley, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 89,90 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
                onAllAnswered={setEvaluation4Completed}
                resetTrigger={resetCounter}
              />
              <button
                onClick={() => goToNextPage(6)}
                disabled={!evaluation4Completed}
                style={{
                  opacity: evaluation4Completed ? 1 : 0.5,
                  cursor: evaluation4Completed ? 'pointer' : 'not-allowed',
                }}
              >
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
              {!evaluation4Completed && (
                <p
                  style={{
                    color: '#ff4444',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  ⚠️ Responda todas as perguntas para continuar
                </p>
              )}
            </BoxContainer6>
          </MainContent>
        ) : page === 6 ? (
          <MainContent>
            <Header price="261,56" />
            <BoxContainer3>
              <Questionario
                ganhos="31,20"
                marca="Tênis Meia Feminino"
                foto={TenisMeia}
                pergunta1="Sobre este Tênis Meia Feminino, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 28,90 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
                onAllAnswered={setEvaluation5Completed}
                resetTrigger={resetCounter}
              />
              <button
                onClick={() => goToNextPage(7)}
                disabled={!evaluation5Completed}
                style={{
                  opacity: evaluation5Completed ? 1 : 0.5,
                  cursor: evaluation5Completed ? 'pointer' : 'not-allowed',
                }}
              >
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
              {!evaluation5Completed && (
                <p
                  style={{
                    color: '#ff4444',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  ⚠️ Responda todas as perguntas para continuar
                </p>
              )}
            </BoxContainer3>
          </MainContent>
        ) : page === 7 ? (
          <MainContent>
            <Header price="293,96" />
            <BoxContainer3>
              <Questionario
                ganhos="29,70"
                marca="Mesa de Cabeceira Retro"
                foto={MesaCabeceira}
                pergunta1="Sobre esta Mesa de Cabeceira Retro, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 27,90 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
                onAllAnswered={setEvaluation6Completed}
                resetTrigger={resetCounter}
              />
              <button
                onClick={() => goToNextPage(8)}
                disabled={!evaluation6Completed}
                style={{
                  opacity: evaluation6Completed ? 1 : 0.5,
                  cursor: evaluation6Completed ? 'pointer' : 'not-allowed',
                }}
              >
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
              {!evaluation6Completed && (
                <p
                  style={{
                    color: '#ff4444',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  ⚠️ Responda todas as perguntas para continuar
                </p>
              )}
            </BoxContainer3>
          </MainContent>
        ) : page === 8 ? (
          <MainContent>
            <Header price="293,96" />
            <ModalOverlay>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <Image alt="check" quality={100} src={Check} width={130} />
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                  }}
                >
                  Parabéns!
                </h2>
                <p
                  style={{
                    fontSize: '1.3rem',
                    lineHeight: '1.6',
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                  }}
                >
                  Você acumulou R$ 293,96 por ter respondido as pesquisas!
                </p>
                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.5',
                    color: '#666',
                    marginBottom: '1.5rem',
                  }}
                >
                  Suas avaliações ajudaram muito a Shopee a melhorar nossos
                  produtos e serviços. Obrigado pela sua contribuição valiosa!
                  🙏
                </p>

                <ModalButton
                  href="/taxa"
                  style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}
                >
                  <Image
                    alt="pix"
                    quality={100}
                    src={Pix}
                    width={28}
                    height={28}
                  />
                  SACAR AGORA!
                </ModalButton>
              </ModalContent>
            </ModalOverlay>
          </MainContent>
        ) : page === 9 ? (
          <MainContent>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                padding: '1rem',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {/* Header */}
              <div
                style={{
                  backgroundColor: '#e9ecef',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#ff580c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                    }}
                  >
                    $
                  </div>
                  <div>
                    <div
                      style={{
                        color: '#ff580c',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                      }}
                    >
                      Shopee
                    </div>
                    <div style={{ color: '#333', fontSize: '0.9rem' }}>
                      Cash
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: '#ff580c',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                  }}
                >
                  SALDO: R$ 293,96
                </div>
              </div>

              {/* Main Content */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <h1
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '0.5rem',
                  }}
                >
                  Parabéns!
                </h1>

                <p
                  style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    marginBottom: '1.5rem',
                  }}
                >
                  Você está a apenas um passo de sacar seus ganhos!
                </p>

                {/* Progress Bar */}
                <div
                  style={{
                    backgroundColor: '#e9ecef',
                    borderRadius: '10px',
                    height: '20px',
                    marginBottom: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#28a745',
                      height: '100%',
                      width: '90%',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                    }}
                  >
                    90%
                  </div>
                </div>

                {/* Current Balance */}
                <h2
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '1rem',
                  }}
                >
                  💰 Seus ganhos acumulados
                </h2>

                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#28a745',
                    marginBottom: '2rem',
                  }}
                >
                  R$ 293,96
                </div>

                {/* Warning Message */}
                <div
                  style={{
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffeaa7',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    textAlign: 'left',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#856404',
                      margin: '0',
                      lineHeight: '1.6',
                    }}
                  >
                    <strong>🚨 ATENÇÃO!</strong> Você acaba de{' '}
                    <strong style={{ color: '#dc3545' }}>
                      GANHAR R$ 293,96{' '}
                    </strong>
                    Este valor está{' '}
                    <strong style={{ color: '#dc3545' }}>
                      100% disponível
                    </strong>{' '}
                    para saque, mas precisamos de uma{' '}
                    <strong style={{ color: '#dc3545' }}>
                      verificação de segurança
                    </strong>{' '}
                    obrigatória.
                  </p>
                </div>

                {/* Fee Explanation */}
                <div
                  style={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#495057',
                      margin: '0',
                      lineHeight: '1.6',
                    }}
                  >
                    <strong>🔒 Proteção Anti-Fraude:</strong> Esta pequena taxa
                    é{' '}
                    <strong style={{ color: '#dc3545' }}>
                      100% REEMBOLSÁVEL
                    </strong>{' '}
                    e será devolvida
                    <strong style={{ color: '#dc3545' }}>
                      {' '}
                      instantaneamente
                    </strong>{' '}
                    após confirmarmos sua identidade. É nossa política de
                    segurança obrigatória.
                  </p>
                </div>

                {/* Action Button */}
                <button
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: '0 auto',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
                  }}
                  onMouseOver={(e) => {
                    ;(e.target as HTMLElement).style.backgroundColor = '#218838'
                  }}
                  onMouseOut={(e) => {
                    ;(e.target as HTMLElement).style.backgroundColor = '#28a745'
                  }}
                >
                  🔓 Liberar R$ 293,96 agora
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#28a745',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}
                  >
                    $
                  </div>
                </button>
              </div>
            </div>
          </MainContent>
        ) : page === 9 ? (
          <MainContent>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                padding: '1rem',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {/* Header */}
              <div
                style={{
                  backgroundColor: '#e9ecef',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#ff580c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                    }}
                  >
                    $
                  </div>
                  <div>
                    <div
                      style={{
                        color: '#ff580c',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                      }}
                    >
                      Shopee
                    </div>
                    <div style={{ color: '#333', fontSize: '0.9rem' }}>
                      Cash
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: '#ff580c',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                  }}
                >
                  SALDO: R$ 293,96
                </div>
              </div>

              {/* Main Content */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <h1
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '0.5rem',
                  }}
                >
                  🎉 Sucesso Total!
                </h1>

                <p
                  style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    marginBottom: '1.5rem',
                  }}
                >
                  Você está a apenas um passo de sacar seus ganhos!
                </p>

                {/* Progress Bar */}
                <div
                  style={{
                    backgroundColor: '#e9ecef',
                    borderRadius: '10px',
                    height: '20px',
                    marginBottom: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#28a745',
                      height: '100%',
                      width: '90%',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                    }}
                  >
                    90%
                  </div>
                </div>

                {/* Current Balance */}
                <h2
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '1rem',
                  }}
                >
                  💰 Seus ganhos acumulados
                </h2>

                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#28a745',
                    marginBottom: '2rem',
                  }}
                >
                  R$ 293,96
                </div>

                {/* Warning Message */}
                <div
                  style={{
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffeaa7',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    textAlign: 'left',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#856404',
                      margin: '0',
                      lineHeight: '1.6',
                    }}
                  >
                    <strong>🚨 ATENÇÃO!</strong> Você acaba de{' '}
                    <strong style={{ color: '#dc3545' }}>
                      GANHAR R$ 293,96
                    </strong>{' '}
                    em menos de 10 minutos! Este valor está{' '}
                    <strong style={{ color: '#dc3545' }}>
                      100% disponível
                    </strong>{' '}
                    para saque, mas precisamos de uma{' '}
                    <strong style={{ color: '#dc3545' }}>
                      verificação de segurança
                    </strong>{' '}
                    obrigatória.
                  </p>
                </div>

                {/* Fee Explanation */}
                <div
                  style={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#495057',
                      margin: '0',
                      lineHeight: '1.6',
                    }}
                  >
                    <strong>🔒 Proteção Anti-Fraude:</strong> Esta pequena taxa
                    é{' '}
                    <strong style={{ color: '#dc3545' }}>
                      100% REEMBOLSÁVEL
                    </strong>{' '}
                    e será devolvida
                    <strong style={{ color: '#dc3545' }}>
                      instantaneamente
                    </strong>{' '}
                    após confirmarmos sua identidade. É nossa política de
                    segurança obrigatória.
                  </p>
                </div>

                {/* Action Button */}
                <button
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: '0 auto',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
                  }}
                  onMouseOver={(e) => {
                    ;(e.target as HTMLElement).style.backgroundColor = '#218838'
                  }}
                  onMouseOut={(e) => {
                    ;(e.target as HTMLElement).style.backgroundColor = '#28a745'
                  }}
                >
                  🔓 Liberar R$ 293,96 agora
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#28a745',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}
                  >
                    $
                  </div>
                </button>
              </div>
            </div>
          </MainContent>
        ) : (
          ''
        )}
      </MainContainer>
    </>
  )
}
