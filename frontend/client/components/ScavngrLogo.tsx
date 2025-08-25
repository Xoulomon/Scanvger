interface ScavngrLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export default function ScavngrLogo({ 
  size = 'medium', 
  showText = true, 
  className = '' 
}: ScavngrLogoProps) {
  const sizes = {
    small: {
      circle: 'w-9 h-9',
      text: 'text-[25px]',
      spacing: 'mr-1'
    },
    medium: {
      circle: 'w-14 h-14',
      text: 'text-[31px]',
      spacing: 'mr-2'
    },
    large: {
      circle: 'w-14 h-14',
      text: 'text-[47px]',
      spacing: 'mr-2'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Circle with SVG */}
      <div className={`${currentSize.circle} ${showText ? currentSize.spacing : ''} rounded-full bg-gradient-to-r from-scavngr-green-primary to-scavngr-green-light flex items-center justify-center relative overflow-hidden`}>
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 56 56" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.1892 50.6578L36.3177 53.0312C35.1046 45.0068 36.849 37.5198 40.1989 30.3264C34.2434 36.9752 27.4345 40.6392 19.8189 41.4811L23.4278 44.413C19.66 47.96 14.9861 49.8463 10.345 49.8621V62.1194C18.7314 61.3849 26.9935 57.5498 33.1892 50.6584V50.6578Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.6193 3.30679C39.9659 1.54362 26.8874 7.33777 21.3189 13.6232L18.0958 10.2103C18.2062 18.4172 15.794 26.4197 10.6549 32.7161C18.0782 28.0252 24.3776 24.4103 31.8003 24.9671L29.3165 22.3881C32.5936 16.4818 48.1571 10.0138 54.2873 16.4909L48.6193 3.30619V3.30679Z"
            fill="white"
          />
        </svg>
      </div>
      
      {/* Text Logo */}
      {showText && (
        <div className={`font-bold ${currentSize.text} tracking-tight leading-none`}>
          <span className="bg-gradient-to-r from-scavngr-green-primary to-scavngr-green-light bg-clip-text text-transparent">
            Sca
          </span>
          <span className="text-black">vngr</span>
        </div>
      )}
    </div>
  );
}
