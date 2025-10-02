import React, { createContext, useContext, useState, useEffect } from 'react';

interface OnboardingData {
  budget: string;
  country: string;
  gameType: string;
  completed: boolean;
}

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  isCompleted: boolean;
}

const defaultData: OnboardingData = {
  budget: '',
  country: '',
  gameType: '',
  completed: false,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<OnboardingData>(() => {
    const saved = localStorage.getItem('onboarding');
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('onboarding', JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData, isCompleted: data.completed }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error('useOnboarding must be used within OnboardingProvider');
  return context;
};
