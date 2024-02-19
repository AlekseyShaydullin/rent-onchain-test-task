interface IField {
  icon: string;
  title: string;
  approved: boolean;
  currentPage: boolean;
}

export interface IOptionsCard {
  title: string;
  icon: string;
  fields: Array<IField>;
}

export const optionsCard = [
  {
    title: 'ACCOUNT',
    icon: 'user',
    fields: [
      {
        icon: 'user',
        title: 'MY PROFILE',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'credit-card',
        title: 'WALLETS',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'clock',
        title: 'TRANSACTION HISTORY',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'user-card',
        title: 'KYC REGISTRATION',
        approved: true,
        currentPage: false,
      },
    ],
  },
  {
    title: 'INVESTMENTS',
    icon: 'chart-line',
    fields: [
      {
        icon: 'chart-bar',
        title: 'DASHBOARD',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'chart-line',
        title: 'MY INVESTMENTS',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'users-group',
        title: 'MY REFERRALS',
        approved: false,
        currentPage: true,
      },
      {
        icon: 'donate',
        title: 'CLAIM OF YIELDS',
        approved: false,
        currentPage: false,
      },
    ],
  },
  {
    title: 'MARKETPLACE',
    icon: 'shopping-bag',
    fields: [
      {
        icon: 'tag',
        title: 'MY MARKETPLACE',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'shopping-bag',
        title: 'CATALOG',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'sort-descending',
        title: 'OFFERS MADE',
        approved: false,
        currentPage: false,
      },
    ],
  },
  {
    title: 'RAFFLE',
    icon: 'ticket-voucher',
    fields: [
      {
        icon: 'drag-horizontal',
        title: 'RAFFLE DASHBOARD',
        approved: false,
        currentPage: false,
      },
      {
        icon: 'ticket-voucher',
        title: 'MY TICKETS',
        approved: false,
        currentPage: false,
      },
    ],
  },
  {
    title: 'DOCUMENTS',
    icon: 'file-document',
    fields: [
      {
        icon: 'file-document',
        title: 'DOCUMENTATION LEGAL',
        approved: false,
        currentPage: false,
      },
    ],
  },
];
