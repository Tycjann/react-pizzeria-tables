export const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3131/api';

export const Config = {
  peopleAmountMini: 0,
  peopleAmountMax: 10,
  status: [
    {
      id: 'free',
      name: 'Free'
    },
    {
      id: 'reserved',
      name: 'Reserved'
    },
    {
      id: 'busy',
      name: 'Busy'
    },
    {
      id: 'cleaning',
      name: 'Cleaning'
    },
  ],
};

export const FormErrorsMessages = {
  thisFieldRequired: 'This field is required',
};