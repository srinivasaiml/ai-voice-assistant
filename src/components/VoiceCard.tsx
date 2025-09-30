import React from 'react';
import styled, { keyframes } from 'styled-components';

// Props interface from your original VoiceCard component
interface VoiceCardProps {
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  currentTranscript: string;
  onToggleListening: () => void;
}

const VoiceCard: React.FC<VoiceCardProps> = ({
  isListening,
  isProcessing,
  isSpeaking,
  currentTranscript,
  onToggleListening
}) => {
  // Logic to determine the status text
  const getStatusText = () => {
    if (isListening) return 'Listening...';
    if (isProcessing) return 'Processing...';
    if (isSpeaking) return 'Speaking...';
    return 'Click the card to start';
  };

  return (
    <StyledWrapper>
      <div className="grid">
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <label className="wrap">
          {/* The input is now controlled by the component's props */}
          <input
            type="checkbox"
            checked={isListening}
            onChange={onToggleListening}
          />
          <div className="card">
            <div className="wave" />
            <div className="outline" />
            <div className="circle-1">
              <div className="lines">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 463 462" stroke="currentColor" height={462} width={463}>
                  {/* SVG paths from the new animation component */}
                  <path strokeLinecap="round" d="M231.5 97V5" style={{ '--i': 1 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M239.914 97.2644L245.691 5.44598" style={{ '--i': 2 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M248.295 98.0566L259.825 6.78207" style={{ '--i': 3 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M256.609 99.3735L273.848 9.00308" style={{ '--i': 4 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M264.824 101.21L287.704 12.1002" style={{ '--i': 5 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M272.908 103.558L301.338 16.0612" style={{ '--i': 6 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M280.829 106.41L314.696 20.8705" style={{ '--i': 7 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M288.554 109.753L327.726 26.5091" style={{ '--i': 8 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M296.055 113.575L340.376 32.9547" style={{ '--i': 9 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M303.301 117.86L352.597 40.1819" style={{ '--i': 10 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M310.263 122.592L364.339 48.1622" style={{ '--i': 11 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M316.915 127.751L375.558 56.864" style={{ '--i': 12 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M323.229 133.318L386.208 66.2531" style={{ '--i': 13 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M329.182 139.271L396.247 76.2924" style={{ '--i': 14 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M334.749 145.585L405.636 86.9422" style={{ '--i': 15 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M339.908 152.237L414.338 98.1605" style={{ '--i': 16 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M344.64 159.199L422.318 109.903" style={{ '--i': 17 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M348.925 166.445L429.545 122.124" style={{ '--i': 18 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M352.747 173.946L435.991 134.774" style={{ '--i': 19 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M356.09 181.671L441.629 147.804" style={{ '--i': 20 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M358.942 189.592L446.439 161.162" style={{ '--i': 21 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M361.29 197.676L450.4 174.796" style={{ '--i': 22 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M363.126 205.891L453.497 188.652" style={{ '--i': 23 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M364.443 214.205L455.718 202.675" style={{ '--i': 24 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M365.236 222.586L457.054 216.809" style={{ '--i': 25 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M365.5 231L457.5 231" style={{ '--i': 26 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M365.236 239.414L457.054 245.191" style={{ '--i': 27 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M364.443 247.795L455.718 259.325" style={{ '--i': 28 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M363.126 256.109L453.497 273.348" style={{ '--i': 29 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M361.29 264.324L450.4 287.204" style={{ '--i': 30 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M358.942 272.408L446.439 300.838" style={{ '--i': 31 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M356.09 280.329L441.629 314.196" style={{ '--i': 32 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M352.747 288.054L435.991 327.226" style={{ '--i': 33 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M348.925 295.555L429.545 339.876" style={{ '--i': 34 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M344.64 302.801L422.318 352.097" style={{ '--i': 35 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M339.908 309.763L414.338 363.839" style={{ '--i': 36 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M334.749 316.415L405.636 375.058" style={{ '--i': 37 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M329.182 322.729L396.247 385.708" style={{ '--i': 38 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M323.229 328.682L386.208 395.747" style={{ '--i': 39 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M316.915 334.249L375.558 405.136" style={{ '--i': 40 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M310.263 339.408L364.339 413.838" style={{ '--i': 41 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M303.301 344.14L352.597 421.818" style={{ '--i': 42 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M296.055 348.425L340.376 429.045" style={{ '--i': 43 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M288.554 352.247L327.726 435.491" style={{ '--i': 44 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M280.829 355.59L314.696 441.129" style={{ '--i': 45 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M272.908 358.442L301.338 445.939" style={{ '--i': 46 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M264.824 360.79L287.704 449.9" style={{ '--i': 47 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M256.609 362.626L273.848 452.997" style={{ '--i': 48 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M248.295 363.943L259.825 455.218" style={{ '--i': 49 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M239.914 364.736L245.691 456.554" style={{ '--i': 50 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M231.5 365L231.5 457" style={{ '--i': 51 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M223.086 364.736L217.309 456.554" style={{ '--i': 52 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M214.705 363.943L203.175 455.218" style={{ '--i': 53 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M206.391 362.626L189.152 452.997" style={{ '--i': 54 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M198.176 360.79L175.296 449.9" style={{ '--i': 55 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M190.092 358.442L161.662 445.939" style={{ '--i': 56 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M182.171 355.59L148.304 441.129" style={{ '--i': 57 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M174.446 352.247L135.274 435.491" style={{ '--i': 58 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M166.945 348.425L122.624 429.045" style={{ '--i': 59 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M159.699 344.14L110.403 421.818" style={{ '--i': 60 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M152.737 339.408L98.6605 413.838" style={{ '--i': 61 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M146.085 334.249L87.4422 405.136" style={{ '--i': 62 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M139.771 328.682L76.7924 395.747" style={{ '--i': 63 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M133.818 322.729L66.7531 385.708" style={{ '--i': 64 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M128.251 316.415L57.364 375.058" style={{ '--i': 65 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M123.092 309.763L48.6622 363.839" style={{ '--i': 66 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M118.36 302.801L40.6819 352.097" style={{ '--i': 67 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M114.075 295.555L33.4547 339.876" style={{ '--i': 68 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M110.253 288.054L27.0091 327.226" style={{ '--i': 69 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M106.91 280.329L21.3705 314.196" style={{ '--i': 70 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M104.058 272.408L16.5612 300.838" style={{ '--i': 71 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M101.71 264.324L12.6002 287.204" style={{ '--i': 72 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M99.8735 256.109L9.50308 273.348" style={{ '--i': 73 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M98.5566 247.795L7.28207 259.325" style={{ '--i': 74 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M97.7644 239.414L5.94596 245.191" style={{ '--i': 75 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M97.5 231H5.5" style={{ '--i': 76 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M97.7644 222.586L5.94598 216.809" style={{ '--i': 77 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M98.5566 214.205L7.28207 202.675" style={{ '--i': 78 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M99.8735 205.891L9.50308 188.652" style={{ '--i': 79 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M101.71 197.676L12.6002 174.796" style={{ '--i': 80 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M104.058 189.592L16.5612 161.162" style={{ '--i': 81 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M106.91 181.671L21.3705 147.804" style={{ '--i': 82 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M110.253 173.946L27.0091 134.774" style={{ '--i': 83 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M114.075 166.445L33.4547 122.124" style={{ '--i': 84 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M118.36 159.199L40.6819 109.903" style={{ '--i': 85 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M123.092 152.237L48.6622 98.1605" style={{ '--i': 86 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M128.251 145.585L57.364 86.9422" style={{ '--i': 87 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M133.818 139.271L66.7531 76.2924" style={{ '--i': 88 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M139.771 133.318L76.7923 66.2531" style={{ '--i': 89 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M146.085 127.751L87.4422 56.864" style={{ '--i': 90 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M152.737 122.592L98.6605 48.1622" style={{ '--i': 91 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M159.699 117.86L110.403 40.1819" style={{ '--i': 92 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M166.945 113.575L122.624 32.9547" style={{ '--i': 93 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M174.446 109.753L135.274 26.5091" style={{ '--i': 94 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M182.171 106.41L148.304 20.8705" style={{ '--i': 95 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M190.092 103.558L161.662 16.0612" style={{ '--i': 96 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M198.176 101.21L175.296 12.1002" style={{ '--i': 97 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M206.391 99.3735L189.152 9.00308" style={{ '--i': 98 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M214.705 98.0566L203.175 6.78207" style={{ '--i': 99 } as React.CSSProperties} />
                  <path strokeLinecap="round" d="M223.086 97.2644L217.309 5.44595" style={{ '--i': 100 } as React.CSSProperties} />
                </svg>
              </div>
            </div>
            <div className="circle-2">
              <div className="bg" />
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon-1">
                <defs>
                  <linearGradient y2="100%" x2="0%" y1="0%" x1="0%" id="grad-1">
                    <stop stopColor="rgba(255, 255, 255, 0.6)" offset="0%" />
                    <stop stopColor="rgba(255, 255, 255, 0.2)" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3zM5 12a1 1 0 1 1 2 0 5 5 0 0 0 10 0 1 1 0 1 1 2 0 7.001 7.001 0 0 1-6 6.93V21a1 1 0 1 1-2 0v-2.07A7.001 7.001 0 0 1 5 12z" clipRule="evenodd" fillRule="evenodd" fill="url(#grad-1)" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 800 800" className="icon-2">
                <path d="M623.961 465.502C630.134 444.383 633.336 422.34 633.333 400C633.333 391.16 629.822 382.681 623.57 376.43C617.319 370.179 608.841 366.667 600 366.667C591.16 366.667 582.681 370.179 576.43 376.43C570.179 382.681 566.667 391.16 566.667 400C566.667 402.679 566.602 405.351 566.474 408.015L623.961 465.502ZM546.326 479.791C538.769 493.651 529.215 506.487 517.851 517.851C486.595 549.107 444.203 566.667 400 566.667C355.797 566.667 313.405 549.107 282.149 517.851C250.893 486.595 233.333 444.203 233.333 400C233.333 391.16 229.822 382.681 223.57 376.43C217.319 370.179 208.841 366.667 200 366.667C191.16 366.667 182.681 370.179 176.43 376.43C170.179 382.681 166.667 391.16 166.667 400C166.659 456.117 186.873 510.358 223.605 552.783C260.337 595.208 311.126 622.977 366.667 631V700C366.667 708.841 370.179 717.319 376.43 723.57C382.681 729.822 391.16 733.333 400 733.333C408.841 733.333 417.319 729.822 423.57 723.57C429.822 717.319 433.333 708.841 433.333 700V631C488.874 622.977 539.663 595.208 576.395 552.783C583.12 545.015 589.292 536.851 594.887 528.352L546.326 479.791ZM500 341.541V166.667C500 140.145 489.464 114.71 470.711 95.9561C451.957 77.2024 426.522 66.6667 400 66.6667C373.478 66.6667 348.043 77.2024 329.289 95.9561C315.947 109.299 306.764 126.024 302.576 144.116L500 341.541ZM300 233.464L495.664 429.128C490.926 444.686 482.421 459.001 470.711 470.711C451.957 489.464 426.522 500 400 500C373.478 500 348.043 489.464 329.289 470.711C310.536 451.957 300 426.522 300 400V233.464Z" clipRule="evenodd" fillRule="evenodd" />
                <path strokeLinecap="round" strokeWidth={60} stroke="white" d="M150.368 125.871L667.5 643.002" className="cut" />
              </svg>
            </div>
            <footer>
              <p>
                <span className="bold" style={{ '--i': 1 } as React.CSSProperties}>Advanced</span>
                <span className="bold" style={{ '--i': 2 } as React.CSSProperties}>voice-activated</span>
                <span className="bold" style={{ '--i': 3 } as React.CSSProperties}>AI.</span>
                <span style={{ '--i': 4 } as React.CSSProperties}>Control</span>
                <span style={{ '--i': 5 } as React.CSSProperties}>your</span>
                <span style={{ '--i': 6 } as React.CSSProperties}>world</span>
                <span style={{ '--i': 7 } as React.CSSProperties}>hands-free</span>
                <span style={{ '--i': 8 } as React.CSSProperties}>with</span>
                <span style={{ '--i': 9 } as React.CSSProperties}>instant</span>
                <span style={{ '--i': 10 } as React.CSSProperties}>voice</span>
                <span style={{ '--i': 11 } as React.CSSProperties}>commands.</span>
              </p>
            </footer>
          </div>
        </label>
      </div>

      {/* Status display from the original VoiceCard */}
      <div className="status-overlay">
        <div className="status-text">{getStatusText()}</div>
        {currentTranscript && (
          <div className="transcript">"{currentTranscript}"</div>
        )}
      </div>
    </StyledWrapper>
  );
}

// All styles are from the new animation component, with status styles added.
const StyledWrapper = styled.div`
  /* Added from original component to make the wrapper fill the screen */
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Status display styles from the original VoiceCard */
  .status-overlay {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 1000;
    animation: ${keyframes`
      0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
      100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    `} 0.5s ease-out;
  }

  .status-text {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }

  .transcript {
    color: #555;
    font-size: 16px;
    font-style: italic;
    max-width: 400px;
    word-wrap: break-word;
  }
  
  .grid {
    --perspective: 800px;

    position: absolute;
    left: 0;
    right: 0;
    top: -2.5rem;
    bottom: -2.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    transform-style: preserve-3d;
  }

  .grid .area {
    position: relative;
    z-index: 1;
  }

  .grid input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .grid::after,
  .grid::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    filter: blur(70px);
    opacity: 0.5;
    pointer-events: none;
  }
  .grid::after {
    width: 600px;
    height: 380px;
    background: radial-gradient(#f0d4e9 100%, #ae98c7 0%);
    transform: translateZ(-100px) translateX(-40px) translateY(-120px);
  }
  .grid::before {
    width: 500px;
    height: 500px;
    background: radial-gradient(#b0a8d9 100%, #a2a1bf 0%);
    transform: translateZ(-120px) translateX(100px) translateY(100px);
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card {
    transform-style: preserve-3d;
    padding: 7px 7px 7px 7px;
    will-change: transform;
    transition: all 0.6s ease;
    width: 326px;
    height: 360px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 10px 40px rgba(0, 0, 60, 0.25),
      inset 0 0 10px rgba(255, 255, 255, 0.5);
    padding-bottom: 70px;
    pointer-events: none;
  }
  .card::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    z-index: -1;
    transition: all 0.5s linear;
    background: rgba(208, 228, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .outline {
    position: absolute;
    overflow: hidden;
    inset: 0;
    outline: none;
    transition: all 0.4s ease;
    border-radius: 27px;
    transform-style: preserve-3d;
  }
  .outline::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 400px;
    height: 550px;
    margin: auto;
    background: linear-gradient(
      to right,
      transparent 0%,
      white 50%,
      transparent 100%
    );
    animation: rotate 3s linear infinite;
    transform: translateZ(10px);
    animation-play-state: paused;
  }

  .wave {
    position: absolute;
    width: 200px;
    height: 200px;
    inset: 0;
    bottom: 60px;
    margin: auto;
    opacity: 0;
    transition: all 0.3s linear;
  }
  .wave::before,
  .wave::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 30px rgba(106, 76, 172, 0.5);
    filter: blur(2px);
    inset: 0;
    animation: wave 1.5s linear infinite;
  }
  .wave::after {
    animation-delay: 0.4s;
  }

  .circle-1 {
    width: 224px;
    height: 224px;
    border-radius: 50%;
    position: absolute;
    box-shadow:
      inset 0 0 3px 0 white,
      inset 60px 40px 30px -40px rgba(106, 76, 172, 0.15),
      20px 20px 70px -5px rgb(150, 166, 197),
      -50px -50px 70px 20px rgba(255, 255, 255, 0.7),
      inset 0 0 30px 0 white;
    background: hsl(0deg 0% 70% / 10%);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: circle1 4.2s ease-in-out infinite 0.3s;
    transform-style: preserve-3d;
    z-index: 1;
    --z: 0px;
  }
  .circle-1::after,
  .circle-1::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    width: 30%;
    height: 30%;
  }
  .circle-1::before {
    background: #ff0073;
    top: 30%;
    right: 30%;
  }
  .circle-1::after {
    background: #00baff;
    bottom: 10%;
    left: 30%;
  }
  .circle-1 .lines {
    animation: rotate 30s linear infinite;
  }
  .circle-1 .lines svg {
    stroke: white;
    animation: lines 3s ease-in-out infinite;
    stroke-width: 2px;
  }
  .circle-1 .lines path {
    animation: line 3s ease-in-out calc(var(--i) * -1s) infinite;
    stroke-dasharray: 100;
    stroke-dashoffset: 10;
    transition: all 0.3s linear;
  }
  .circle-2 {
    width: 123px;
    height: 123px;
    border-radius: 50%;
    position: absolute;
    transform-style: preserve-3d;
    animation: circle2 4.2s ease-in-out infinite;
    background-color: white;
    z-index: 9;
    --z: 10px;
  }
  .circle-2::before,
  .circle-2::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(30px);
    z-index: 1;
  }
  .circle-2::before {
    background: #ff0073;
    width: 30%;
    height: 30%;
    top: 20%;
    right: 20%;
  }
  .circle-2::after {
    background: #00bbff;
    width: 20%;
    height: 20%;
    bottom: 10%;
    left: 40%;
  }
  .circle-2 .bg {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow:
      inset 0 0 25px 10px rgba(255, 255, 255, 0.8),
      0 0 10px 10px rgba(255, 255, 255, 0.9);
    background-color: #9292d8;
    animation: bgRotate 2.5s linear infinite;
    animation-play-state: paused;
    transition: all 0.3s ease;
  }
  .circle-2 .bg::before {
    content: "";
    position: absolute;
    inset: 0;
    animation: bg 4s linear infinite;
    border-radius: inherit;
    transition: all 0.4s linear;
    box-shadow: inset 0 0 25px 10px rgba(255, 255, 255, 0.8);
    opacity: 0;
  }

  .icon {
    transform: translateZ(50px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4px;
    position: absolute;
    z-index: 1;
  }
  .icon svg {
    width: 64px;
    transition: all 0.8s cubic-bezier(0.7, -1, 0.3, 1.5);
    position: absolute;
  }
  .icon-2 {
    transform: translateY(80px) scale(0.7) rotateX(90deg);
    filter: blur(2px);
    opacity: 0;
    mask-image: linear-gradient(
      to bottom,
      rgb(255 255 255 / 100%) 10%,
      rgb(255 255 255 / 20%)
    );
  }
  .icon-2 .cut {
    stroke-dasharray: 732;
    stroke-dashoffset: 732;
    animation: reducePath 0.5s ease forwards;
  }

  .card footer {
    transform: translateZ(10px);
    padding: 12px 18px;
    position: absolute;
    bottom: 17px;
    left: 17px;
    right: 17px;
    transform-style: preserve-3d;
  }
  .card footer::before {
    content: "";
    border-radius: 15px;
    animation: footer 9s ease infinite 0.8s;
    position: absolute;
    z-index: -1;
    inset: 0;
    filter: blur(15px) brightness(1.5);
    transform: scaleY(0);
    background: rgba(236, 237, 246, 0.7);
    box-shadow:
      inset 0 0 2px 0 white,
      0 5px 10px -5px rgba(0, 0, 60, 0.25);
    backdrop-filter: blur(5px);
    background: linear-gradient(
      to bottom,
      rgb(242 243 252 / 80%) 0%,
      rgb(220 220 232 / 80%) 100%
    );
  }
  .card footer p {
    display: flex;
    flex-wrap: wrap;
    gap: 0 4px;
    font-size: 11px;
    position: relative;
    z-index: 10;
    transform: translateZ(20px);
    line-height: 17px;
    transition: all 0.3s ease;
    color: #696969;
  }
  .card footer .bold {
    font-weight: 600;
    color: black;
  }
  .card footer span {
    display: inline-block;
    animation: labels 9s ease calc(1s + var(--i) * 0.05s) infinite;
    opacity: 0;
  }

  /** STATES */

  .wrap input:checked + .card .circle-1,
  .wrap input:checked + .card .circle-2,
  .wrap input:checked + .card .circle-1 .lines,
  .wrap input:checked + .card .circle-1 .lines svg,
  .wrap input:checked + .card .circle-1 .lines path,
  .wrap input:checked + .card .outline::before,
  .wrap input:checked + .card .circle-2 .bg {
    animation-play-state: paused;
  }
  .wrap input:checked + .card .circle-1 .lines path {
    opacity: 0;
  }
  .wrap input:checked + .card .wave {
    opacity: 0;
  }
  .wrap:hover .card:before {
    backdrop-filter: blur(10px);
    background: transparent;
  }
  .wrap:hover .outline::before {
    animation-play-state: running;
  }
  .wrap:hover input:checked + .card .icon-2 {
    transform: translateY(80px) scale(0.7) rotateX(90deg);
    filter: blur(2px);
    opacity: 0;
  }
  .wrap:hover input:checked + .card .icon-1 {
    transform: none;
    filter: none;
    opacity: 1;
  }
  .wrap:hover .icon-1 {
    transform: translateY(-80px) scale(0.7) rotateX(90deg);
    filter: blur(2px);
    opacity: 0;
  }
  .wrap:hover .icon-2 {
    transform: none;
    filter: none;
    opacity: 0.6;
  }
  .wrap:hover .icon-2 .cut {
    animation: growPath 0.3s ease 0.6s forwards;
  }
  .wrap:hover footer p {
    transform: translateY(-4px) translateZ(20px);
  }

  .wrap:hover .bg {
    animation-play-state: running;
  }

  .wrap:hover .wave {
    opacity: 1;
  }
  .wrap:hover .circle-2 .bg::before {
    opacity: 0.2;
  }

  .wrap:hover .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(0)
      scale3d(1, 1, 1);
  }

  .area:nth-child(15):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(15deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(14):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(13):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(0)
      scale3d(1, 1, 1);
  }
  .area:nth-child(12):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(-7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(11):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(-15deg)
      scale3d(1, 1, 1);
  }

  .area:nth-child(10):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(15deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(9):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(8):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(0)
      scale3d(1, 1, 1);
  }
  .area:nth-child(7):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(-7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(6):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(-15deg)
      scale3d(1, 1, 1);
  }

  .area:nth-child(5):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(15deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(4):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(3):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(0)
      scale3d(1, 1, 1);
  }
  .area:nth-child(2):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(-7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(1):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(-15deg)
      scale3d(1, 1, 1);
  }

  @keyframes lines {
    0% {
      transform: scale(0.41);
    }

    15% {
      transform: scale(0.37);
    }

    36% {
      transform: scale(0.41);
    }

    50% {
      transform: scale(0.38);
    }

    65% {
      transform: scale(0.43);
    }

    80% {
      transform: scale(0.39);
    }

    100% {
      transform: scale(0.41);
    }
  }

  @keyframes line {
    0% {
      stroke-dashoffset: 10;
    }
    50% {
      stroke-dashoffset: 45;
    }
    100% {
      stroke-dashoffset: 10;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes circle1 {
    0% {
      transform: scale(0.97) translateZ(calc(20px + var(--z)));
    }
    15% {
      transform: scale(1) translateZ(calc(30px + var(--z)));
    }
    30% {
      transform: scale(0.98) translateZ(calc(20px + var(--z)));
    }
    45% {
      transform: scale(1) translateZ(calc(30px + var(--z)));
    }
    60% {
      transform: scale(0.97) translateZ(calc(20px + var(--z)));
    }
    85% {
      transform: scale(1) translateZ(calc(30px + var(--z)));
    }
    100% {
      transform: scale(0.97) translateZ(calc(20px + var(--z)));
    }
  }

  @keyframes circle2 {
    0% {
      transform: scale(1) translateZ(calc(20px + var(--z)));
    }
    15% {
      transform: scale(1.03) translateZ(calc(30px + var(--z)));
    }
    30% {
      transform: scale(0.98) translateZ(calc(20px + var(--z)));
    }
    45% {
      transform: scale(1.04) translateZ(calc(30px + var(--z)));
    }
    60% {
      transform: scale(0.97) translateZ(calc(20px + var(--z)));
    }
    85% {
      transform: scale(1.03) translateZ(calc(30px + var(--z)));
    }
    100% {
      transform: scale(1) translateZ(calc(20px + var(--z)));
    }
  }

  @keyframes growPath {
    from {
      stroke-dashoffset: 732;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes reducePath {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 732;
    }
  }

  @keyframes bgRotate {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(90deg);
    }
    40% {
      transform: rotate(180deg) scale(0.95, 1);
    }
    60%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bg {
    20% {
      background-color: red;
    }
    40% {
      background-color: #5eff7e;
    }
    60% {
      background-color: #2cb5ff;
    }
    80% {
      background-color: #fc63ff;
    }
  }

  @keyframes wave {
    0% {
      transform: scale(1);
      opacity: 0;
      box-shadow: 0 0 30px rgba(106, 76, 172, 0.9);
    }
    35% {
      transform: scale(1.3);
      opacity: 1;
    }
    70%,
    100% {
      transform: scale(1.6);
      opacity: 0;
      box-shadow: 0 0 30px rgba(106, 76, 172, 0.3);
    }
  }

  @keyframes footer {
    0%,
    3% {
      transform: scaleY(0);
      filter: blur(15px) brightness(1.5);
    }
    10%,
    82% {
      filter: blur(0);
      transform: scaleY(1);
    }
    86% {
      transform: scaleY(0);
      filter: blur(15px) brightness(1.5);
    }
  }

  @keyframes labels {
    0% {
      transform: translateY(-30px) rotate(-30deg);
      filter: blur(10px);
    }
    5% {
      transform: translateY(10px);
      filter: blur(0);
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    73% {
      transform: translateY(0);
      opacity: 1;
    }
    76% {
      transform: translateY(-5px);
      filter: blur(0);
    }
    80% {
      transform: translateY(15px);
      opacity: 0;
      filter: blur(5px);
    }
  }
`;

export default VoiceCard;