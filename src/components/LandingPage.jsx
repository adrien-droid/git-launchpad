import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <div className="navigation-bar">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f505f5977683fcc68f2adcc44de2506040f7d7e4?width=282" 
          className="logo"
          alt="ELEVATORS Logo" 
        />
        <div className="nav-elements">
          <button className="nav-button active">
            <span className="nav-button-text">Our Vision</span>
          </button>
          <button className="nav-button">
            <span className="nav-button-text">Key Features</span>
          </button>
          <button className="nav-button">
            <span className="nav-button-text">How It Works</span>
          </button>
          <button className="nav-button">
            <span className="nav-button-text">Use Cases</span>
          </button>
          <button className="nav-button">
            <span className="nav-button-text">Network</span>
          </button>
          <button className="nav-button">
            <span className="nav-button-text">Team</span>
          </button>
        </div>
        <a href="#" className="nav-cta">
          <span className="nav-cta-text">Get Started</span>
        </a>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-first-block">
            <div className="hero-badge-text">
              <div className="hero-heading-container">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dfddaf61205afe55807da0287da676f677613e17?width=1888" 
                  className="hero-heading"
                  alt="Where intelligence meets expertise" 
                />
                <div className="hero-subtitle">
                  <span>Where intelligent automation meets </span>
                  <span style={{fontWeight: 700}}>human excellence</span>
                  <span>. The future of consulting is </span>
                  <span style={{fontWeight: 700}}>AI Powered</span>
                  <span> and </span>
                  <span style={{fontWeight: 700}}>Expert owned</span>
                  <span>.</span>
                </div>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#" className="cta-button cta-orange">
                <span className="cta-text">Get Started</span>
              </a>
              <a href="#" className="cta-button cta-white">
                <span className="cta-text">Download Pitch Deck</span>
              </a>
            </div>
          </div>
          <div className="hero-visual-wrapper">
            <img 
              className="hero-glow"
              src="https://api.builder.io/api/v1/image/assets/TEMP/748a0b7a1d3a8c590fde3815314a417aeed76b58?width=1888" 
              alt="Hero Glow Effect" 
            />
            <img 
              className="hero-interface"
              src="https://api.builder.io/api/v1/image/assets/TEMP/3e46603f1a1be0f2bbadf567f64bf87fa2cf75ac?width=1500" 
              alt="Hero Interface" 
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <div className="client-content">
          <div className="client-text">
            <span className="client-title">Trusted by forward-thinking companies</span>
          </div>
          <div className="logos-container">
            <svg className="logo-item" width="185" height="35" viewBox="0 0 185 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.46 28.1641H19.2708L16.65 25.7943V24.579L19.3633 22.0269V17.9861L22.9092 15.7075L26.9483 18.7153L21.46 28.1641ZM12.395 21.7839L12.7958 17.9861L11.47 14.5833H19.3017L18.0067 17.9861L18.3767 21.7839H12.395ZM14.1833 25.7943L11.5625 28.1944H9.3425L3.82333 18.7153L7.89333 15.7379L11.47 17.9861V22.0269L14.1833 24.579V25.7943ZM9.31166 7.56511H21.4292L22.8783 13.6415H7.89333L9.31166 7.56511ZM15.3858 0L0 8.75V26.25L15.3858 35L30.7717 26.25V8.75L15.3858 0Z" fill="white"/>
              <path d="M48.0384 25.612C43.9684 25.612 40.9775 22.4826 40.9775 18.6241C40.9775 14.7656 43.9992 11.5451 48.0692 11.5451C50.6592 11.5451 52.2625 12.487 53.5267 13.8542L51.5842 15.9201C50.6284 14.9175 49.6109 14.2491 48.0384 14.2491C45.7567 14.2491 44.0917 16.1936 44.0917 18.5634C44.0917 20.9939 45.7875 22.9384 48.1925 22.9384C49.6725 22.9384 50.7517 22.2396 51.7384 21.2674L53.6192 23.1207C52.2625 24.5486 50.69 25.612 48.0384 25.612Z" fill="white"/>
              <path d="M59.57 25.6121H56.425V11.5756H59.57V14.8569C60.4333 12.8517 62.0058 11.4541 64.4108 11.5756V14.8569H64.2258C61.4817 14.8569 59.57 16.619 59.57 20.2041V25.6121Z" fill="white"/>
              <path d="M80.845 11.5149L73.9075 29.3795H70.7317L72.2425 25.6121L66.2916 11.5149H69.6525L73.6917 21.9359L77.5766 11.5149H80.845Z" fill="white"/>
              <path d="M90.095 14.2189C87.9675 14.2189 86.1175 15.9203 86.1175 18.5635C86.1175 21.2067 87.9983 22.9081 90.095 22.9081C92.2533 22.9081 94.0108 21.2371 94.0108 18.5635C94.0108 15.8899 92.2225 14.2189 90.095 14.2189ZM90.8042 25.5817C88.5533 25.5817 87.135 24.4576 86.1792 23.2119V29.3795H83.0342V11.5149H86.1792V14.0366C87.1967 12.639 88.615 11.5149 90.8042 11.5149C94.0417 11.5149 97.1867 14.0366 97.1867 18.5331C97.1867 23.0296 94.0725 25.5817 90.8042 25.5817Z" fill="white"/>
              <path d="M104.062 14.4619V21.0851C104.062 22.27 104.679 22.7561 105.758 22.7561H106.992V25.5209H104.833C102.552 25.5209 100.917 24.5183 100.917 21.5712V14.4619H99.1908V11.8186H100.917V8.11204H104.062V11.8186H106.992V14.4619H104.062Z" fill="white"/>
              <path d="M116.889 14.2188C114.361 14.2188 112.757 16.1632 112.757 18.533C112.757 20.9332 114.484 22.908 116.92 22.908C119.448 22.908 121.052 20.9635 121.052 18.5938C121.113 16.1936 119.356 14.2188 116.889 14.2188ZM116.889 25.612C112.727 25.612 109.643 22.4826 109.643 18.6241C109.643 14.7352 112.757 11.5451 116.951 11.5451C121.144 11.5451 124.228 14.6745 124.228 18.5634C124.228 22.3915 121.144 25.612 116.889 25.612Z" fill="white"/>
            </svg>
            <svg className="logo-item" width="117" height="53" viewBox="0 0 117 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.18454 15.0111H10.6131L14.4548 22.2898H20.0499L15.3321 14.1341C15.9807 13.8346 16.564 13.4616 17.0786 13.0088C18.5963 11.6743 19.3552 9.8454 19.3552 7.52339C19.3552 5.15502 18.5963 3.30953 17.0786 1.98572C15.561 0.661905 13.4587 0 10.772 0H1.31967V22.2898H6.18454V15.0111ZM10.9107 4.31962C12.0229 4.31962 12.886 4.60363 13.5003 5.17284C14.1132 5.74206 14.4215 6.54895 14.4215 7.5935C14.4215 8.5917 14.1144 9.38195 13.5003 9.96186C12.886 10.543 12.0229 10.8329 10.9107 10.8329H6.18454V4.31962H10.9107ZM38.1922 16.4395H33.466C33.3498 16.8578 33.1364 17.2357 32.8234 17.572C32.5103 17.9083 32.1167 18.1697 31.6424 18.3563C31.1669 18.5429 30.5824 18.6343 29.8876 18.6343C29.0304 18.6343 28.2549 18.4597 27.5589 18.1115C26.8641 17.7633 26.3199 17.2178 25.9263 16.474C25.6914 16.0307 25.5279 15.5066 25.433 14.9066H38.2622C38.2846 14.6748 38.332 14.2482 38.332 13.5138C38.332 11.6564 37.961 10.0605 37.2199 8.7248C36.4777 7.39028 35.4592 6.35644 34.162 5.62561C32.8637 4.89358 31.3697 4.52876 29.6789 4.52876C27.9419 4.52876 26.4005 4.90665 25.0571 5.66125C23.7137 6.41585 22.6596 7.47228 21.8949 8.83056C21.1301 10.1888 20.7483 11.7741 20.7483 13.5851C20.7483 15.3962 21.142 16.9813 21.9305 18.3396C22.7178 19.6979 23.8014 20.7544 25.1792 21.509C26.557 22.2636 28.1268 22.6415 29.8876 22.6415C31.3697 22.6415 32.6965 22.38 33.8668 21.8572C35.0359 21.3342 36.0034 20.6094 36.7682 19.6801C37.5317 18.7497 38.006 17.6706 38.1922 16.4395ZM27.4367 8.89948C28.0734 8.58575 28.7743 8.42889 29.539 8.42889C30.2801 8.42889 30.9642 8.57388 31.5891 8.86383C32.2151 9.15497 32.7237 9.6018 33.1186 10.2043C33.3902 10.6202 33.5655 11.1205 33.6498 11.7016H25.5006C25.5954 11.2334 25.7306 10.827 25.9085 10.4823C26.2902 9.74083 26.7988 9.2132 27.4367 8.89948ZM45.381 22.2909H40.6204V4.87695H43.9913L44.8841 6.66659C45.3561 6.13659 45.9252 5.68978 46.5975 5.3297C47.5935 4.79614 48.74 4.52876 50.0383 4.52876C51.4517 4.52876 52.7085 4.8199 53.8089 5.39981C54.9092 5.98092 55.7842 6.81632 56.4327 7.90722C57.0814 8.9993 57.4062 10.2993 57.4062 11.8086V22.2921H52.6457V12.5405C52.6457 11.7516 52.4951 11.0718 52.1939 10.5037C51.8928 9.93453 51.4695 9.49959 50.9252 9.19776C50.381 8.89592 49.749 8.74499 49.0317 8.74499C47.9196 8.74499 47.0338 9.07535 46.3734 9.73726C45.713 10.3992 45.3834 11.3344 45.3834 12.5405V22.2909H45.381ZM77.5355 4.87695H74.1647L73.2707 6.67016C72.8937 6.2887 72.4799 5.9524 72.0281 5.66125C70.8578 4.90665 69.4966 4.52876 67.9446 4.52876C66.415 4.52876 65.0017 4.90665 63.7045 5.66125C62.4074 6.41585 61.3592 7.47228 60.5601 8.83056C59.761 10.1888 59.3614 11.7741 59.3614 13.5851C59.3614 15.3962 59.761 16.9813 60.5601 18.3396C61.3592 19.6979 62.4074 20.7544 63.7045 21.509C65.0017 22.2636 66.415 22.6415 67.9446 22.6415C69.4966 22.6415 70.8578 22.2648 72.0281 21.509C72.4799 21.2178 72.8937 20.8815 73.2707 20.5001L74.1647 22.2933H77.5355V4.87695ZM70.9325 17.7978C70.2603 18.1923 69.4954 18.3896 68.6393 18.3896C67.7822 18.3896 67.0174 18.1923 66.3463 17.7978C65.674 17.4032 65.1416 16.8459 64.7479 16.1258C64.3543 15.4069 64.1575 14.5584 64.1575 13.584C64.1575 12.5857 64.3543 11.7265 64.7479 11.0064C65.1416 10.2875 65.674 9.73012 66.3463 9.33441C67.0174 8.93989 67.7822 8.74262 68.6393 8.74262C69.4966 8.74262 70.2603 8.93989 70.9325 9.33441C71.6036 9.72894 72.1372 10.2863 72.5308 11.0064C72.9245 11.7265 73.1213 12.5857 73.1213 13.584C73.1213 14.5596 72.9245 15.4069 72.5308 16.1258C72.1372 16.8459 71.6048 17.4032 70.9325 17.7978ZM92.0069 4.87695H96.7674V15.256C96.7674 16.7425 96.42 18.0426 95.7252 19.1573C95.0304 20.2719 94.0688 21.1311 92.8404 21.7348C91.612 22.3385 90.1869 22.6403 88.5661 22.6403C86.1105 22.6403 84.1292 21.9843 82.6234 20.6723C81.1175 19.3604 80.3646 17.5553 80.3646 15.2571V4.87814H85.1252V14.7342C85.1252 15.9416 85.4382 16.8531 86.0631 17.4686C86.689 18.0841 87.5227 18.392 88.5649 18.392C89.6296 18.392 90.4702 18.0841 91.0845 17.4686C91.6986 16.8542 92.0058 15.9416 92.0058 14.7342L92.0069 4.87695ZM99.4803 0H104.241V22.2898H99.4803V0ZM23.0213 34.8718C23.0332 35.2082 23.0391 35.5397 23.0391 35.8641C23.0391 38.1161 22.5411 40.0554 21.5451 41.6798C20.5492 43.3055 19.1998 44.5532 17.4972 45.4244C15.7945 46.2954 13.8654 46.7303 11.711 46.7303C10.0428 46.7303 8.49663 46.4451 7.07143 45.8771C5.64624 45.3078 4.40719 44.501 3.35313 43.4564C2.29905 42.4119 1.47618 41.1926 0.885707 39.7999C0.295237 38.4071 0 36.886 0 35.2379C0 33.5896 0.289308 32.0685 0.869109 30.6759C1.44772 29.2831 2.25873 28.0698 3.30214 27.0359C4.34435 26.0033 5.57272 25.1963 6.98607 24.6153C8.39941 24.0353 9.93961 23.7443 11.6079 23.7443C13.6934 23.7443 15.5052 24.1162 17.0467 24.8589C18.5869 25.6016 19.8271 26.5773 20.7649 27.7845C21.7028 28.9919 22.2885 30.292 22.5197 31.6848H17.4462C17.2837 31.1274 16.9541 30.582 16.4562 30.0472C15.9581 29.5137 15.3096 29.0716 14.5105 28.7234C13.7112 28.3752 12.7556 28.2006 11.6434 28.2006C10.3463 28.2006 9.19381 28.4916 8.18599 29.0716C7.17815 29.6526 6.39086 30.4643 5.8229 31.51C5.25496 32.5546 4.97159 33.7976 4.97159 35.2367C4.97159 36.6769 5.26089 37.9306 5.8407 38.9978C6.41931 40.0661 7.22439 40.8907 8.25594 41.4707C9.2863 42.0518 10.4625 42.3417 11.7833 42.3417C13.0105 42.3417 14.0824 42.1504 14.9978 41.7666C15.9131 41.384 16.6317 40.8088 17.1522 40.0424C17.5398 39.4719 17.7959 38.7981 17.9204 38.0222H10.4281V33.9129H22.9383C22.981 34.2171 23.0095 34.5355 23.0213 34.8718ZM50.8078 29.7525C49.3945 28.9979 47.7963 28.62 46.0118 28.62C44.2273 28.62 42.6349 28.9979 41.2335 29.7525C39.8319 30.5071 38.7257 31.5635 37.9147 32.9218C37.1037 34.28 36.6982 35.8653 36.6982 37.6763C36.6982 39.4874 37.1037 41.0726 37.9147 42.4309C38.7257 43.7891 39.8319 44.8456 41.2335 45.6002C42.6349 46.3548 44.2273 46.7327 46.0118 46.7327C47.795 46.7327 49.3945 46.3559 50.8078 45.6002C52.2212 44.8456 53.3322 43.7891 54.1443 42.4309C54.9554 41.0726 55.3609 39.4874 55.3609 37.6763C55.3609 35.8653 54.9554 34.28 54.1443 32.9218C53.3334 31.5635 52.2212 30.5071 50.8078 29.7525ZM49.9743 40.2182C49.5806 40.9384 49.0411 41.4957 48.3582 41.8902C47.6741 42.2847 46.8927 42.482 46.0129 42.482C45.1557 42.482 44.385 42.2847 43.7021 41.8902C43.0179 41.4957 42.4795 40.9384 42.086 40.2182C41.6922 39.4992 41.4955 38.6507 41.4955 37.6763C41.4955 36.6781 41.6922 35.8189 42.086 35.0988C42.4795 34.3799 43.0179 33.8226 43.7021 33.4268C44.385 33.0323 45.1557 32.835 46.0129 32.835C46.8927 32.835 47.6753 33.0323 48.3582 33.4268C49.0411 33.8214 49.5795 34.3787 49.9743 35.0988C50.3679 35.8189 50.5648 36.6781 50.5648 37.6763C50.5648 38.6507 50.3679 39.4992 49.9743 40.2182ZM68.8884 28.9682H73.6489V39.3471C73.6489 40.8337 73.3016 42.1338 72.6067 43.2484C71.9119 44.3631 70.9503 45.2223 69.7219 45.826C68.4936 46.4296 67.0695 46.7315 65.4476 46.7315C62.992 46.7315 61.0107 46.0756 59.5049 44.7636C57.999 43.4517 57.2461 41.6466 57.2461 39.3483V28.9694H62.0066V38.8255C62.0066 40.0329 62.3197 40.9443 62.9446 41.5598C63.5705 42.1753 64.4042 42.4832 65.4463 42.4832C66.5111 42.4832 67.3517 42.1753 67.9659 41.5598C68.5801 40.9443 68.8873 40.0329 68.8873 38.8255V28.9682H68.8884ZM90.43 29.7525C89.1317 28.9979 87.7076 28.62 86.1555 28.62C84.626 28.62 83.2708 28.9979 82.0898 29.7525C81.6417 30.0388 81.2302 30.3692 80.8544 30.7424L79.9698 28.9682H76.599V53H81.3595V44.9347C81.6392 45.1926 81.9405 45.4267 82.2629 45.6347C83.3976 46.3654 84.6959 46.7315 86.1555 46.7315C87.7076 46.7315 89.1317 46.3548 90.43 45.599C91.7271 44.8444 92.7753 43.7879 93.5744 42.4296C94.3735 41.0715 94.7732 39.4862 94.7732 37.6752C94.7732 35.8641 94.3735 34.2788 93.5744 32.9205C92.7753 31.5635 91.7271 30.5071 90.43 29.7525ZM89.3866 40.2182C88.9929 40.9384 88.4594 41.4957 87.7883 41.8902C87.116 42.2847 86.3511 42.482 85.4951 42.482C84.6379 42.482 83.8731 42.2847 83.202 41.8902C82.5297 41.4957 81.9973 40.9384 81.6036 40.2182C81.21 39.4992 81.0133 38.6507 81.0133 37.6763C81.0133 36.6781 81.21 35.8189 81.6036 35.0988C81.9973 34.3799 82.5297 33.8226 83.202 33.4268C83.8743 33.0323 84.6379 32.835 85.4951 32.835C86.3523 32.835 87.116 33.0323 87.7883 33.4268C88.4605 33.8214 88.9929 34.3787 89.3866 35.0988C89.7802 35.8189 89.977 36.6781 89.977 37.6763C89.9781 38.6507 89.7802 39.4992 89.3866 40.2182ZM29.7251 31.4602C31.3424 30.052 33.4079 28.9515 35.9216 28.9515V33.5527C32.8673 33.5527 31.3377 34.892 30.5717 36.1553C30.0477 37.0204 29.8034 38.0269 29.8034 39.0381V46.3821H25.0429V28.9682H28.9794L29.7251 31.4602ZM116.999 17.9024V22.2909H113.975C112.307 22.2909 110.952 22.0651 109.91 21.6124C108.867 21.1596 108.103 20.4514 107.616 19.4876C107.13 18.5239 106.887 17.2998 106.887 15.8133V8.84719V6.09619V0.00118769H111.648V4.87695H117V8.84719H111.648V15.4294C111.648 16.2886 111.845 16.916 112.238 17.3105C112.632 17.7051 113.258 17.9024 114.115 17.9024H116.999Z" fill="white"/>
            </svg>
            <img 
              className="logo-item"
              src="https://api.builder.io/api/v1/image/assets/TEMP/ef56966e2de6b95ff6f386c77bbd1ab45f097b12?width=226" 
              alt="Client Logo" 
            />
            <img 
              className="logo-item"
              src="https://api.builder.io/api/v1/image/assets/TEMP/2a8cb98514f245db8a80d21f2fa77f108fa5ca5e?width=226" 
              alt="Client Logo" 
            />
            <img 
              className="logo-item"
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5715d5c2904252b25ebda5501bf97ac51a67336?width=226" 
              alt="Client Logo" 
            />
            <img 
              className="logo-item"
              src="https://api.builder.io/api/v1/image/assets/TEMP/da62f3ec1b4aed7eaba5f6940c9d7b8f13c5d394?width=226" 
              alt="Client Logo" 
            />
          </div>
        </div>
      </div>

      {/* Our Vision Introduction Section */}
      <div className="vision-section">
        <div className="vision-content">
          <div className="vision-header">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/dc201baa2eba33b7ee195e92fd8f435b8e531143?width=1540" 
              className="vision-heading"
              alt="Our Vision" 
            />
            <div className="vision-description">
              Traditional consulting is broken. High fees, opaque processes and misaligned
              incentives create friction between experts and clients.
            </div>
          </div>
          <div className="card-block">
            <div className="problem-card">
              <div className="problem-icon">
                {/* Calendar Icon SVG */}
                <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.833313" y="0.5" width="79" height="79" rx="39.5" fill="url(#paint0_linear_353_29808)"/>
                  <rect x="0.833313" y="0.5" width="79" height="79" rx="39.5" stroke="url(#paint1_linear_353_29808)"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.437 45.5153H32.8216C33.5769 45.5153 34.185 46.1357 34.185 46.9057V48.4274C34.185 49.2008 33.5769 49.8207 32.8216 49.8207H31.437C30.6789 49.8207 30.0708 49.2008 30.0708 48.4274V46.9057C30.0708 46.1357 30.6789 45.5153 31.437 45.5153ZM24.3248 45.5153H25.7086C26.4645 45.5153 27.0753 46.1357 27.0753 46.9057V48.4274C27.0753 49.2008 26.4645 49.8207 25.7086 49.8207H24.3248C23.5692 49.8207 22.9611 49.2008 22.9611 48.4274V46.9057C22.9606 46.1357 23.5692 45.5153 24.3248 45.5153ZM31.437 38.1922H32.8216C33.5769 38.1922 34.185 38.812 34.185 39.582V41.1072C34.185 41.8771 33.5769 42.5004 32.8216 42.5004H31.437C30.6789 42.5004 30.0708 41.8771 30.0708 41.1072V39.582C30.0708 38.812 30.6789 38.1922 31.437 38.1922ZM24.3248 38.1922H25.7086C26.4645 38.1922 27.0753 38.812 27.0753 39.582V41.1072C27.0753 41.8771 26.4645 42.5004 25.7086 42.5004H24.3248C23.5692 42.5004 22.9611 41.8771 22.9611 41.1072V39.582C22.9606 38.812 23.5692 38.1922 24.3248 38.1922ZM22.5799 27.9499C20.7823 27.9499 19.3333 29.427 19.3333 31.263V52.6882C19.3333 54.5229 20.7887 55.8563 22.5799 56H44.04C40.3447 53.6628 38.0928 49.5462 38.0864 45.1157C38.0864 41.7124 39.4118 38.4509 41.7734 36.0438C44.1314 33.6367 47.3341 32.2859 50.6718 32.2859C51.8585 32.289 53.0419 32.4641 54.1807 32.8064V31.263C54.1807 29.427 52.7347 27.9499 50.9344 27.9499H45.0703V29.8909C45.0703 31.6604 43.6271 33.1255 41.8296 33.1255C40.032 33.1255 38.5858 31.6604 38.5858 29.8909V27.9499H34.6568V29.8909C34.6568 31.6604 33.2136 33.1255 31.4161 33.1255C29.6185 33.1255 28.1725 31.6604 28.1725 29.8909V27.9499H22.5799Z" fill="url(#paint2_linear_353_29808)"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.4166 24C32.4175 24 33.1671 24.7675 33.1671 25.7151V29.8909C33.1671 30.8418 32.4175 31.6054 31.4166 31.6054C30.416 31.6054 29.6634 30.8418 29.6634 29.8909V25.7151C29.6634 24.7675 30.4165 24 31.4166 24Z" fill="url(#paint3_linear_353_29808)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29808" x1="40.3333" y1="0" x2="40.3333" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0F0F0F"/>
                      <stop offset="1" stopColor="#030403"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_353_29808" x1="0.135542" y1="0.398696" x2="80.0137" y2="80.2768" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#D7DAE1" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_353_29808" x1="19.3333" y1="24" x2="47.0027" y2="65.5445" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#FB553C"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_353_29808" x1="19.3333" y1="24" x2="47.0027" y2="65.5445" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#FB553C"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="problem-content">
                <div className="problem-title">Time-consuming</div>
                <div className="problem-description">
                  Finding the right expert takes weeks, with lengthy procurement processes and uncertain outcomes.
                </div>
              </div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                {/* Money Icon SVG */}
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" fill="url(#paint0_linear_353_29809)"/>
                  <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="url(#paint1_linear_353_29809)"/>
                  <path d="M25.9771 21.0985L22.3422 43.3454L33.5432 22.3469L25.9771 21.0985Z" fill="url(#paint2_linear_353_29809)"/>
                  <path d="M23.7769 43.475L34.0314 49L25.5539 40.1434L23.7769 43.475Z" fill="url(#paint3_linear_353_29809)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29809" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0F0F0F"/>
                      <stop offset="1" stopColor="#030403"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_353_29809" x1="-0.197771" y1="0.398696" x2="79.6804" y2="80.2768" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#D7DAE1" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_353_29809" x1="21.5" y1="19" x2="60.8559" y2="58.6623" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#FB553C"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_353_29809" x1="21.5" y1="19" x2="60.8559" y2="58.6623" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#FB553C"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="problem-content">
                <div className="problem-title">Expensive</div>
                <div className="problem-description">
                  High fees with minimal transparency on where your money goes and what value you receive.
                </div>
              </div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                {/* Target Icon SVG */}
                <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.16672" y="0.5" width="79" height="79" rx="39.5" fill="url(#paint0_linear_353_29811)"/>
                  <rect x="1.16672" y="0.5" width="79" height="79" rx="39.5" stroke="url(#paint1_linear_353_29811)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29811" x1="40.6667" y1="0" x2="40.6667" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0F0F0F"/>
                      <stop offset="1" stopColor="#030403"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_353_29811" x1="0.468947" y1="0.398696" x2="80.3471" y2="80.2768" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D7DAE1"/>
                      <stop offset="1" stopColor="#D7DAE1" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="problem-content">
                <div className="problem-title">Misaligned</div>
                <div className="problem-description">
                  Traditional incentives reward billable hours, not successful outcomes and long-term value delivered from experts.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Details Section */}
      <div className="vision-details-section">
        <div className="traditional-consulting-section">
          <div className="text-container">
            <div className="section-header">
              <div className="section-title">
                <div className="title-line">Traditional Consulting</div>
                <div className="title-line">No Longer Works</div>
              </div>
              <div className="section-description">
                Today's innovation-driven companies face serious bottlenecks when they seek expert support. 
                Traditional councils are often slow, opaque and ill-suited to the challenges posed by cutting-edge technologies.
              </div>
            </div>
            <div className="pain-points">
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594Z" fill="url(#paint0_linear_353_29948)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29948" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FB553C"/>
                      <stop offset="1" stopColor="#953224"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Weeks lost in sourcing and onboarding the right expertise</div>
              </div>
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594Z" fill="url(#paint0_linear_353_29957)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29957" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FB553C"/>
                      <stop offset="1" stopColor="#953224"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Lack of transparency on deliverables, pricing and performance</div>
              </div>
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594Z" fill="url(#paint0_linear_353_29964)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29964" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FB553C"/>
                      <stop offset="1" stopColor="#953224"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Limited access to truly top-tier, specialized experts</div>
              </div>
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594Z" fill="url(#paint0_linear_353_29967)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29967" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FB553C"/>
                      <stop offset="1" stopColor="#953224"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Engagement models that are rigid, costly and outdated</div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img 
              className="section-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/1e8ad718795c1fdc5f4293bf58e61af1acb92698?width=768" 
              alt="Traditional consulting problems" 
            />
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="traditional-consulting-section">
          <div className="image-container">
            <img 
              className="section-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/e405a715bbcaf7369b91e24473a18d8ba4d6b126?width=774" 
              alt="Our approach" 
            />
          </div>
          <div className="text-container">
            <div className="section-header">
              <div className="section-title">
                <div className="title-line">Our Approach:</div>
                <div className="title-line">Fast, Transparent, Expert-led</div>
              </div>
              <div className="section-description">
                We've reimagined expert consulting to match the pace and complexity of modern tech challenges, 
                with a platform that connects you to the best minds, instantly.
              </div>
            </div>
            <div className="pain-points">
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.4141 8.16406L9.41406 13.1641C9.04688 13.5312 8.45312 13.5312 8.08984 13.1641L5.58984 10.6641C5.22266 10.2969 5.22266 9.70312 5.58984 9.33984C5.95703 8.97656 6.55078 8.97266 6.91406 9.33984L8.75 11.1758L13.0859 6.83594C13.4531 6.46875 14.0469 6.46875 14.4102 6.83594C14.7734 7.20312 14.7773 7.79687 14.4102 8.16016L14.4141 8.16406Z" fill="url(#paint0_linear_353_29947)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29947" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00FF84"/>
                      <stop offset="1" stopColor="#00994F"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Instant matching with vetted top 1% experts</div>
              </div>
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.4141 8.16406L9.41406 13.1641C9.04688 13.5312 8.45312 13.5312 8.08984 13.1641L5.58984 10.6641C5.22266 10.2969 5.22266 9.70312 5.58984 9.33984C5.95703 8.97656 6.55078 8.97266 6.91406 9.33984L8.75 11.1758L13.0859 6.83594C13.4531 6.46875 14.0469 6.46875 14.4102 6.83594C14.7734 7.20312 14.7773 7.79687 14.4102 8.16016L14.4141 8.16406Z" fill="url(#paint0_linear_353_29983)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29983" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00FF84"/>
                      <stop offset="1" stopColor="#00994F"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Transparent deliverables, pricing and timelines</div>
              </div>
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.4141 8.16406L9.41406 13.1641C9.04688 13.5312 8.45312 13.5312 8.08984 13.1641L5.58984 10.6641C5.22266 10.2969 5.22266 9.70312 5.58984 9.33984C5.95703 8.97656 6.55078 8.97266 6.91406 9.33984L8.75 11.1758L13.0859 6.83594C13.4531 6.46875 14.0469 6.46875 14.4102 6.83594C14.7734 7.20312 14.7773 7.79687 14.4102 8.16016L14.4141 8.16406Z" fill="url(#paint0_linear_353_29986)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29986" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00FF84"/>
                      <stop offset="1" stopColor="#00994F"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Modular, flexible engagement formats</div>
              </div>
              <div className="pain-point">
                <svg className="pain-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM14.4141 8.16406L9.41406 13.1641C9.04688 13.5312 8.45312 13.5312 8.08984 13.1641L5.58984 10.6641C5.22266 10.2969 5.22266 9.70312 5.58984 9.33984C5.95703 8.97656 6.55078 8.97266 6.91406 9.33984L8.75 11.1758L13.0859 6.83594C13.4531 6.46875 14.0469 6.46875 14.4102 6.83594C14.7734 7.20312 14.7773 7.79687 14.4102 8.16016L14.4141 8.16406Z" fill="url(#paint0_linear_353_29989)"/>
                  <defs>
                    <linearGradient id="paint0_linear_353_29989" x1="20" y1="20" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00FF84"/>
                      <stop offset="1" stopColor="#00994F"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="pain-text">Tokenized incentives to ensure quality and performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/825f01b5268b9860ca39aa0fb645d1e63f129bd3?width=326" 
                className="footer-logo"
                alt="ELEVATORS Logo" 
              />
              <div className="footer-brand-content">
                <div className="footer-tagline">AI-powered consulting, reimagined.</div>
              </div>
              <div className="footer-social">
                <svg width="126" height="25" viewBox="0 0 126 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.152 0.141724H7.22L13.51 9.13772L21.06 0.141724H23.318L14.37 10.3697L24 24.1417H16.936L10.366 14.7477L2.256 24.1417H0L9.506 13.5177L0.152 0.141724Z" fill="#D7DAE1"/>
                  <path d="M73.3838 2.13621C71.4837 1.20645 69.4265 0.531623 67.2836 0.141724C67.2459 0.142287 67.21 0.158457 67.1836 0.186712C66.9265 0.681584 66.6265 1.32642 66.4265 1.82129C64.1535 1.46161 61.8421 1.46161 59.5691 1.82129C59.3691 1.31142 59.0691 0.681584 58.7977 0.186712C58.7834 0.15672 58.7405 0.141724 58.6977 0.141724C56.5548 0.531623 54.5118 1.20645 52.5975 2.13621C52.5832 2.13621 52.5689 2.1512 52.5546 2.1662C48.6688 8.26962 47.5974 14.2081 48.126 20.0866C48.126 20.1166 48.1402 20.1465 48.1688 20.1615C50.7403 22.141 53.2118 23.3407 55.6547 24.1355C55.6976 24.1505 55.7404 24.1355 55.7547 24.1055C56.3262 23.2807 56.8405 22.411 57.2833 21.4962C57.3119 21.4362 57.2833 21.3762 57.2262 21.3612C56.4119 21.0313 55.6404 20.6414 54.8833 20.1915C54.8261 20.1615 54.8261 20.0716 54.869 20.0266C55.0261 19.9066 55.1833 19.7716 55.3404 19.6517C55.369 19.6217 55.4119 19.6217 55.4404 19.6367C60.3549 21.9911 65.655 21.9911 70.5123 19.6367C70.5409 19.6217 70.5837 19.6217 70.6123 19.6517C70.7694 19.7866 70.9266 19.9066 71.0837 20.0416C71.1409 20.0866 71.1409 20.1765 71.0694 20.2065C70.3266 20.6714 69.5408 21.0463 68.7265 21.3762C68.6694 21.3912 68.6551 21.4662 68.6694 21.5112C69.1265 22.426 69.6408 23.2957 70.198 24.1205C70.2408 24.1355 70.2837 24.1505 70.3266 24.1355C72.7838 23.3407 75.2553 22.141 77.8268 20.1615C77.8553 20.1465 77.8696 20.1166 77.8696 20.0866C78.4982 13.2933 76.8267 7.39984 73.4409 2.1662C73.4266 2.1512 73.4124 2.13621 73.3838 2.13621ZM58.0262 16.5025C56.5548 16.5025 55.3261 15.0779 55.3261 13.3233C55.3261 11.5688 56.5262 10.1441 58.0262 10.1441C59.5406 10.1441 60.7406 11.5838 60.7263 13.3233C60.7263 15.0779 59.5263 16.5025 58.0262 16.5025ZM67.9836 16.5025C66.5122 16.5025 65.2836 15.0779 65.2836 13.3233C65.2836 11.5688 66.4836 10.1441 67.9836 10.1441C69.498 10.1441 70.698 11.5838 70.6837 13.3233C70.6837 15.0779 69.498 16.5025 67.9836 16.5025Z" fill="#D7DAE1"/>
                  <path d="M124.228 0.141724H103.772C103.302 0.141724 102.851 0.328381 102.519 0.660633C102.187 0.992885 102 1.44352 102 1.91339V22.3701C102 22.8399 102.187 23.2906 102.519 23.6228C102.851 23.9551 103.302 24.1417 103.772 24.1417H124.228C124.698 24.1417 125.149 23.9551 125.481 23.6228C125.813 23.2906 126 22.8399 126 22.3701V1.91339C126 1.44352 125.813 0.992885 125.481 0.660633C125.149 0.328381 124.698 0.141724 124.228 0.141724ZM109.153 20.5867H105.545V9.12506H109.153V20.5867ZM107.347 7.53672C106.937 7.53442 106.538 7.41092 106.199 7.18181C105.86 6.9527 105.596 6.62825 105.441 6.24941C105.286 5.87057 105.247 5.45432 105.328 5.05318C105.409 4.65204 105.608 4.284 105.898 3.99551C106.189 3.70701 106.558 3.51099 106.959 3.43218C107.361 3.35338 107.777 3.39532 108.155 3.55271C108.533 3.7101 108.856 3.97589 109.082 4.31654C109.309 4.65718 109.43 5.05742 109.43 5.46672C109.434 5.74076 109.383 6.01276 109.279 6.26653C109.176 6.52029 109.022 6.75062 108.828 6.94379C108.633 7.13696 108.402 7.28901 108.147 7.39087C107.893 7.49274 107.621 7.54234 107.347 7.53672ZM122.453 20.5967H118.847V14.3351C118.847 12.4884 118.062 11.9184 117.048 11.9184C115.978 11.9184 114.928 12.7251 114.928 14.3817V20.5967H111.32V9.13339H114.79V10.7217H114.837C115.185 10.0167 116.405 8.81172 118.267 8.81172C120.28 8.81172 122.455 10.0067 122.455 13.5067L122.453 20.5967Z" fill="#D7DAE1"/>
                </svg>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section-title">Platform</div>
              <div className="footer-section-list">
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Features</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Tokenomics</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Use Cases</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Roadmap</a>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section-title">Join Us</div>
              <div className="footer-section-list">
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Apply as Expert</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Become a Client</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Investor Relations</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Careers</a>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section-title">Resources</div>
              <div className="footer-section-list">
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Pitch Deck</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Legal</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Privacy Policy</a>
                </div>
                <div className="footer-section-item">
                  <a href="#" className="footer-section-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-container">
              <div className="footer-copyright">© 2026 ELEVATORS. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
