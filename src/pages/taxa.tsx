import Head from 'next/head'

export default function TaxaPage() {
  return (
    <>
      <Head>
        <title>Taxa de Verificação - ShopeeCash</title>
        <meta
          name="description"
          content="Verificação de segurança para saque"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              <div style={{ color: '#333', fontSize: '0.9rem' }}>Cash</div>
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
              <strong style={{ color: '#dc3545' }}>GANHAR R$ 293,96 </strong>
              Este valor está{' '}
              <strong style={{ color: '#dc3545' }}>100% disponível</strong> para
              saque, mas precisamos de uma{' '}
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
              <strong>🔒 Proteção Anti-Fraude:</strong> Esta pequena taxa é{' '}
              <strong style={{ color: '#dc3545' }}>100% REEMBOLSÁVEL</strong> e
              será devolvida
              <strong style={{ color: '#dc3545' }}>
                {' '}
                instantaneamente
              </strong>{' '}
              após confirmarmos sua identidade. É nossa política de segurança
              obrigatória.
            </p>
          </div>

          {/* Urgency Message */}
          <div
            style={{
              backgroundColor: '#ff6b6b',
              color: 'white',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            ⏰ ATENÇÃO: Este saldo expira em 24 horas caso não faça a
            verificação!
          </div>

          {/* Action Button */}
          <button
            onClick={() =>
              window.open(
                'https://checkout.perfectpay.com.br/pay/PPU38COEU3P?upsell=true',
                '_blank',
              )
            }
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
    </>
  )
}
