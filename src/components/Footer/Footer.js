import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
    <div className="footer-left">
      {
        props.footerLinks.map((link,index)=>{
         return <p key={index}>{link}</p>
        })
      }
    
    </div>

    <div className="footer-right">
      <p>Dweep.io</p>
      <p>Made with love in India</p>
      <div className="icons">
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#FFCD9E"
        >
          <path
            d="M24.3513 4.43573H5.05405C4.54655 4.43573 4.13513 4.81937 4.13513 5.29261V23.2871C4.13513 23.7603 4.54655 24.144 5.05405 24.144H24.3513C24.8589 24.144 25.2703 23.7603 25.2703 23.2871V5.29261C25.2703 4.81937 24.8589 4.43573 24.3513 4.43573Z"
            stroke="#FFCD9E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2433 13.4331V19.4313"
            stroke="#FFCD9E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.64865 13.4331V19.4313"
            stroke="#FFCD9E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2433 16.4322C14.2433 15.6368 14.5821 14.874 15.1853 14.3115C15.7884 13.7491 16.6065 13.4331 17.4595 13.4331C18.3125 13.4331 19.1305 13.7491 19.7337 14.3115C20.3368 14.874 20.6757 15.6368 20.6757 16.4322V19.4313"
            stroke="#FFCD9E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.64866 10.8624C10.6637 10.8624 11.4865 10.0951 11.4865 9.14863C11.4865 8.20215 10.6637 7.43488 9.64866 7.43488C8.63365 7.43488 7.81082 8.20215 7.81082 9.14863C7.81082 10.0951 8.63365 10.8624 9.64866 10.8624Z"
            fill="#FFCD9E"
          />
        </svg>
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2973 17.9317C17.4542 17.9317 19.2027 16.3012 19.2027 14.2899C19.2027 12.2787 17.4542 10.6482 15.2973 10.6482C13.1404 10.6482 11.3919 12.2787 11.3919 14.2899C11.3919 16.3012 13.1404 17.9317 15.2973 17.9317Z"
            stroke="#FFCD9E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8108 4.00732H9.78381C6.73878 4.00732 4.27029 6.30915 4.27029 9.1486V19.4312C4.27029 22.2706 6.73878 24.5724 9.78381 24.5724H20.8108C23.8559 24.5724 26.3243 22.2706 26.3243 19.4312V9.1486C26.3243 6.30915 23.8559 4.00732 20.8108 4.00732Z"
            stroke="#FFCD9E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.2703 10.434C22.2853 10.434 23.1081 9.66671 23.1081 8.72023C23.1081 7.77375 22.2853 7.00647 21.2703 7.00647C20.2553 7.00647 19.4324 7.77375 19.4324 8.72023C19.4324 9.66671 20.2553 10.434 21.2703 10.434Z"
            fill="#FFCD9E"
          />
        </svg>
      </div>
      <p>hello@dweep.io</p>
    </div>
  </div>
  )
}

export default Footer