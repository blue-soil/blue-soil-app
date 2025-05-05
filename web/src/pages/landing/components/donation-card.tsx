import { useState } from 'react';

export default function DonationCard() {
  const [donationType, setDonationType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  
  const handleDonationTypeChange = (type: any) => {
    setDonationType(type);
  };
  
  const handleAmountSelect = (amount: any) => {
    if (amount === 'other') {
      setShowCustomInput(true);
    } else {
      setSelectedAmount(amount);
      setShowCustomInput(false);
    }
  };
  
  const handleCustomAmountChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(value);
    setSelectedAmount(parseFloat(value) || 0);
  };

  const getButtonLabel = () => {
    return donationType === 'once' ? 'Give Once' : 'Monthly';
  };
  
  const getWaterImpact = () => {
    const yearlyImpact = Math.floor(selectedAmount / 3.33);
    return yearlyImpact > 0 ? yearlyImpact : 0;
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          className={`py-3 border rounded-md text-center transition-colors ${
            donationType === 'once' 
              ? 'bg-green-500 text-white border-green-500' 
              : 'bg-white border-gray-200 hover:border-green-500'
          }`}
          onClick={() => handleDonationTypeChange('once')}
        >
          Start Contributing
        </button>
        <button 
          className={`py-3 border rounded-md text-center transition-colors ${
            donationType === 'monthly' 
              ? 'bg-green-500 text-white border-green-500' 
              : 'bg-white border-gray-200 hover:border-green-500'
          }`}
          onClick={() => handleDonationTypeChange('monthly')}
        >
          Monthly
        </button>
      </div>
      
      <p className="text-center font-medium mb-4">
        Choose an amount to give {donationType === 'monthly' ? 'per month' : ''}
      </p>
      
      <p className="text-gray-700 text-sm mb-6">
        Your ${selectedAmount.toFixed(2)} {donationType === 'monthly' ? 'monthly' : ''} donation can give {getWaterImpact()} people clean water {donationType === 'monthly' ? 'every year' : ''}. 100% funds water projects.
      </p>
      
            <div className="h-40">
        {showCustomInput ? (
          <div className="mb-4">
            <div className="relative">
              <span className="absolute left-3 top-3">$</span>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full py-3 pl-6 pr-3 border border-gray-200 rounded-md focus:outline-none focus:border-green-500"
                placeholder="Enter amount"
                autoFocus
              />
            </div>
            <div className="mt-2 flex">
              <button 
                className="text-green-500 underline text-sm"
                onClick={() => setShowCustomInput(false)}
              >
                Cancel
              </button>
            </div>
            {/* Empty space to maintain height */}
            <div className="h-16"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[10, 20, 40].map((amount) => (
                <button 
                  key={amount}
                  className={`py-3 px-2 rounded-md text-center transition-colors ${
                    selectedAmount === amount 
                      ? 'border-2 border-green-500 bg-white' 
                      : 'bg-gray-100 hover:border hover:border-green-500'
                  }`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  <span className="font-medium">${amount}</span>
                  <span className="text-gray-500 text-xs">{donationType === 'monthly' ? '/mo' : ''}</span>
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                className={`py-3 px-2 rounded-md text-center transition-colors ${
                  selectedAmount === 100 
                    ? 'border-2 border-green-500 bg-white' 
                    : 'bg-gray-100 hover:border hover:border-green-500'
                }`}
                onClick={() => handleAmountSelect(100)}
              >
                <span className="font-medium">$100</span>
                <span className="text-gray-500 text-xs">{donationType === 'monthly' ? '/mo' : ''}</span>
              </button>
              <button 
                className="bg-gray-100 py-3 px-2 rounded-md text-center hover:border hover:border-green-500 transition-colors"
                onClick={() => handleAmountSelect('other')}
              >
                Other amount
              </button>
            </div>
          </>
        )}
      </div>
      
      <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-800 transition-colors">
        {getButtonLabel()}
      </button>
    </div>
  );
}