import React, { useRef, useEffect, useState } from 'react';
import Script from 'next/script'; // Para melhor manejo de scripts externos
import { VslContent } from './styles';

export function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState('');

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth; // Obter a largura do iframe
      const scaleFactor = 0.56267; // Fator de escala
      const newHeight = `${width * scaleFactor}px`; // Calcula a nova altura em pixels
      setIframeHeight(newHeight); // Define a nova altura para o estado
    }
  };

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura();
    const handleResize = () => ajustarAltura();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="vid_66c4bb6377838e000c738a12"
        style={{
          position: 'relative',
          width: '100%',
          padding: '56.25% 0 0',
          borderRadius: '.8rem',
          boxShadow: '8px 8px 5px 0px rgba(0,0,0,0.35)',
        }}
      >
        <img
          id="thumb_66c4bb6377838e000c738a12"
          src="https://images.converteai.net/36581e86-3fe7-44d1-89e4-c5eb502798e8/players/65af118a5a68c1000982c45d/thumbnail.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: iframeHeight,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          id="backdrop_66c4bb6377838e000c738a12"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
          }}
        />
      </div>
      <Script
        id="scr_66c4bb6377838e000c738a12"
        type="text/javascript"
        src="https://scripts.converteai.net/36581e86-3fe7-44d1-89e4-c5eb502798e8/ab-test/66c4bb6377838e000c738a12/player.js"
        strategy="lazyOnload"
      />
      <style jsx>{`
        .elementor-element:has(#smartplayer) {
          width: 100%;
        }
      `}</style>
    </>
  );
}
