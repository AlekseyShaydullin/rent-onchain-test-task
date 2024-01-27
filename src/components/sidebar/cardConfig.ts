interface IField {
  icon: string;
  title: string;
  approved: boolean;
}

export interface IOptionsCard {
  title: string;
  fields: Array<IField>;
}

export const optionsCard = [
  {
    title: 'ACCOUNT',
    fields: [
      {
        icon: 'user',
        title: 'MY PROFILE',
        approved: false,
      },
      {
        icon: 'credit-card',
        title: 'WALLETS',
        approved: false,
      },
      {
        icon: 'clock',
        title: 'TRANSACTION HISTORY',
        approved: false,
      },
      {
        icon: 'user-card',
        title: 'KYC REGISTRATION',
        approved: true,
      },
    ],
  },
  {
    title: 'INVESTMENTS',
    fields: [
      {
        icon: 'chart-bar',
        title: 'DASHBOARD',
        approved: false,
      },
      {
        icon: 'chart-line',
        title: 'MY INVESTMENTS',
        approved: false,
      },
      {
        icon: 'users-group',
        title: 'MY REFERRALS',
        approved: false,
      },
      {
        icon: 'donate',
        title: 'CLAIM OF YIELDS',
        approved: false,
      },
    ],
  },
  {
    title: 'MARKETPLACE',
    fields: [
      {
        icon: 'tag',
        title: 'MY MARKETPLACE',
        approved: false,
      },
      {
        icon: 'shopping-bag',
        title: 'CATALOG',
        approved: false,
      },
      {
        icon: 'sort-descending',
        title: 'OFFERS MADE',
        approved: false,
      },
    ],
  },
  {
    title: 'RAFFLE',
    fields: [
      {
        icon: 'drag-horizontal',
        title: 'RAFFLE DASHBOARD',
        approved: false,
      },
      {
        icon: 'ticket-voucher',
        title: 'MY TICKETS',
        approved: false,
      },
    ],
  },
  {
    title: 'DOCUMENTS',
    fields: [
      {
        icon: 'file-document',
        title: 'DOCUMENTATION LEGAL',
        approved: false,
      },
    ],
  },
];
