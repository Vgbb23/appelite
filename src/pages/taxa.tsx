import Head from 'next/head'

export default function TaxaPage() {
  return (
    <>
      <Head>
        <title>Verificação Premium - Shopee Elite Club</title>
        <meta
          name="description"
          content="Verificação de segurança premium para saque VIP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

      <div
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
          minHeight: '100vh',
          padding: '1rem',
          fontFamily: "'Playfair Display', Georgia, serif",
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Header Premium */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
            borderBottom: '2px solid #D4AF37',
            boxShadow: '0 4px 30px rgba(212, 175, 55, 0.2)',
            padding: '1.5rem',
            borderRadius: '15px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0A0A0A',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
                border: '2px solid #F4E4B8',
              }}
            >
              💎
            </div>
            <div>
              <div
                style={{
                  color: '#D4AF37',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '1px',
                  textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
                }}
              >
                Shopee Elite Club
              </div>
              <div style={{ color: '#F4E4B8', fontSize: '0.9rem', fontWeight: '500' }}>
                Programa VIP
              </div>
            </div>
          </div>
          <div
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
              color: '#0A0A0A',
              padding: '0.8rem 1.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              border: '2px solid #F4E4B8',
              fontFamily: "'Playfair Display', serif",
              animation: 'goldPulse 2s infinite ease-in-out',
            }}
          >
            SALDO: R$ <span data-premium-number="true">418,95</span>
          </div>
        </div>

        {/* Main Content Premium */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
            textAlign: 'center',
            border: '2px solid #D4AF37',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
              borderRadius: 20,
              opacity: 0.3,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
          />
          <div
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #F4E4B8)',
              padding: '0.5rem 2rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: '700',
              color: '#0A0A0A',
              letterSpacing: '2px',
              marginBottom: '1rem',
              display: 'inline-block',
              textTransform: 'uppercase',
            }}
          >
            VERIFICAÇÃO PREMIUM
          </div>

          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#F4E4B8',
              marginBottom: '1rem',
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 2px 20px rgba(212, 175, 55, 0.5)',
              letterSpacing: '1px',
            }}
          >
            💎 Parabéns, Membro Elite!
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#C0C0C0',
              marginBottom: '1.5rem',
              fontWeight: '500',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Você está a apenas um passo de sacar seus ganhos premium!
          </p>

          {/* Progress Bar Premium */}
          <div
            style={{
              background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
              borderRadius: '15px',
              height: '25px',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid #D4AF37',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 100%)',
                height: '100%',
                width: '95%',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0A0A0A',
                fontWeight: '700',
                fontSize: '1rem',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '1px',
                animation: 'goldPulse 2s infinite ease-in-out',
              }}
            >
              95%
            </div>
          </div>

          {/* Current Balance Premium */}
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#F4E4B8',
              marginBottom: '1rem',
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 2px 15px rgba(212, 175, 55, 0.4)',
            }}
          >
            💰 Seus ganhos premium acumulados
          </h2>

          <div
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#D4AF37',
              marginBottom: '1.5rem',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '2px',
              textShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
              animation: 'goldPulse 2s infinite ease-in-out',
            }}
          >
            R$ <span data-premium-number="true">418,95</span>
          </div>

          {/* Warning Message Premium */}
          <div
            style={{
              background: 'rgba(212, 175, 55, 0.15)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem',
              textAlign: 'left',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                color: '#F4E4B8',
                margin: '0',
                lineHeight: '1.7',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <strong style={{ color: '#D4AF37' }}>🚨 ATENÇÃO VIP!</strong> Você acaba de{' '}
              <strong style={{ color: '#D4AF37', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}>
                GANHAR R$ <span data-premium-number="true">418,95</span>
              </strong>{' '}
              em menos de 10 minutos! Este valor está{' '}
              <strong style={{ color: '#D4AF37' }}>100% disponível</strong> para
              saque VIP, mas precisamos de uma{' '}
              <strong style={{ color: '#D4AF37' }}>
                verificação de segurança premium
              </strong>{' '}
              obrigatória.
            </p>
          </div>

          {/* Fee Explanation Premium */}
          <div
            style={{
              background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: '#C0C0C0',
                margin: '0',
                lineHeight: '1.7',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <strong style={{ color: '#D4AF37' }}>🔒 Proteção Anti-Fraude Premium:</strong> Esta pequena taxa é{' '}
              <strong style={{ color: '#D4AF37', textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}>
                100% REEMBOLSÁVEL
              </strong>{' '}
              e será devolvida{' '}
              <strong style={{ color: '#D4AF37' }}>
                instantaneamente
              </strong>{' '}
              após confirmarmos sua identidade. É nossa política de segurança
              premium obrigatória.
            </p>
          </div>

          {/* Urgency Message Premium */}
          <div
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 100%)',
              color: '#0A0A0A',
              borderRadius: '15px',
              padding: '1.5rem',
              marginBottom: '2rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              textAlign: 'center',
              boxShadow: '0 4px 25px rgba(212, 175, 55, 0.4)',
              border: '2px solid #F4E4B8',
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '1px',
              textTransform: 'uppercase',
              animation: 'goldPulse 2s infinite ease-in-out',
            }}
          >
            ⏰ ATENÇÃO VIP: Este saldo premium expira em 24 horas caso não faça a
            verificação!
          </div>

          {/* Action Button Premium */}
          <button
            onClick={() =>
              window.open(
                'https://checkout.perfectpay.com.br/pay/PPU38COEU3P?upsell=true',
                '_blank',
              )
            }
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
              color: '#FFFFFF',
              border: '2px solid #16a34a',
              borderRadius: '40px',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              margin: '0 auto',
              width: '90%',
              maxWidth: '350px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 6px 25px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              fontFamily: "'Playfair Display', serif",
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseOver={(e) => {
              ;(e.target as HTMLElement).style.transform = 'translateY(-2px) scale(1.02)'
              ;(e.target as HTMLElement).style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.7)'
            }}
            onMouseOut={(e) => {
              ;(e.target as HTMLElement).style.transform = 'translateY(0) scale(1)'
              ;(e.target as HTMLElement).style.boxShadow = '0 6px 25px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            }}
          >
            🔓 Liberar R$ <span data-premium-number="true">418,95</span> agora
            <div
              style={{
                width: '24px',
                height: '24px',
                background: '#FFFFFF',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#16a34a',
                fontSize: '1rem',
                fontWeight: 'bold',
                fontFamily: "'JetBrains Mono', monospace",
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                flexShrink: 0,
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
