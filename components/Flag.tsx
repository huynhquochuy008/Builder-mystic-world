interface FlagProps {
  country: "US" | "CA" | "AU" | "GB" | "DE" | "FR";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Flag = ({ country, size = "md", className = "" }: FlagProps) => {
  const sizeClasses = {
    sm: "w-6 h-4",
    md: "w-8 h-6",
    lg: "w-12 h-8",
    xl: "w-16 h-12",
  };

  const baseClasses = `inline-block rounded border border-gray-300 ${sizeClasses[size]} ${className}`;

  switch (country) {
    case "US":
      return (
        <div className={baseClasses} title="United States">
          <div className="w-full h-full bg-gradient-to-b from-red-500 via-white to-blue-600 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-800 flex flex-wrap">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="text-white text-xs leading-none">
                  ★
                </div>
              ))}
            </div>
            {[...Array(13)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-full h-px ${i % 2 === 0 ? "bg-red-600" : "bg-white"}`}
                style={{ top: `${(i * 100) / 13}%` }}
              />
            ))}
          </div>
        </div>
      );

    case "CA":
      return (
        <div className={baseClasses} title="Canada">
          <div className="w-full h-full bg-white flex">
            <div className="w-1/4 bg-red-600"></div>
            <div className="w-1/2 bg-white flex items-center justify-center">
              <div className="text-red-600 text-lg font-bold">🍁</div>
            </div>
            <div className="w-1/4 bg-red-600"></div>
          </div>
        </div>
      );

    case "AU":
      return (
        <div className={baseClasses} title="Australia">
          <div className="w-full h-full bg-blue-800 relative">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800">
              <div className="absolute top-1 left-1 w-6 h-4 bg-gradient-to-br from-red-500 via-white to-blue-600"></div>
            </div>
            <div className="absolute top-1 right-1 text-white text-xs">★</div>
            <div className="absolute bottom-1 right-2 text-white text-xs">
              ★
            </div>
            <div className="absolute bottom-2 right-1 text-white text-xs">
              ★
            </div>
            <div className="absolute top-1/2 right-1 text-white text-xs">★</div>
            <div className="absolute bottom-1 left-1/2 text-white text-xs">
              ★
            </div>
          </div>
        </div>
      );

    case "GB":
      return (
        <div className={baseClasses} title="United Kingdom">
          <div className="w-full h-full bg-blue-800 relative">
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-600 transform -translate-x-0.5"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-red-600 transform -translate-y-0.5"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-600 to-transparent opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-red-600 to-transparent opacity-30"></div>
          </div>
        </div>
      );

    case "DE":
      return (
        <div className={baseClasses} title="Germany">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/3 bg-black"></div>
            <div className="h-1/3 bg-red-600"></div>
            <div className="h-1/3 bg-yellow-400"></div>
          </div>
        </div>
      );

    case "FR":
      return (
        <div className={baseClasses} title="France">
          <div className="w-full h-full flex">
            <div className="w-1/3 bg-blue-600"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-red-600"></div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`${baseClasses} bg-gray-300`} title="Unknown Country">
          <div className="w-full h-full bg-gray-300"></div>
        </div>
      );
  }
};

export default Flag;
