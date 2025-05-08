export interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
  }
  
  export interface DonationAmount {
    amount: number;
    perMonth: boolean;
    label: string;
  }
  
  export interface StatisticItem {
    value: string;
    label: string;
    icon: React.ReactNode;
  }
  
  export interface ProcessStep {
    title: string;
    description: string;
  }