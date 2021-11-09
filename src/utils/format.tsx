import 'intl';
import 'intl/locale-data/jsonp/en';
import parsePhoneNumber from 'libphonenumber-js';
import {Contact} from 'react-native-contacts';

export const formatMoney = (amount: string) => {
  const formatType = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    maximumSignificantDigits: 12,
  });

  const currency = formatType.format(parseInt(amount, 10));

  return currency.replace('NGN', '\u20A6');
};

export const formatMoneyWithoutSymbol = (amount: string) => {
  const formatType = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    maximumSignificantDigits: 12,
  });

  const currency = formatType.format(parseInt(amount, 10));

  return currency.replace('NGN', '');
};

export const msToTime = (s: number, hasHours?: boolean) => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  s = (s - mins) / 60;
  const hrs = s % 60;

  if (hasHours) {
    return `${hrs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${mins.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${secs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  } else {
    return `${mins.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${secs.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  }
};

export const formatPhone = (phone: string) => {
  return parsePhoneNumber(phone)?.formatInternational() || phone;
};

export const sortString = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const formatContact = (contact: Contact) => {
  return {
    id: contact.recordID,
    name: `${contact.givenName} ${contact.familyName}`,
    phone: contact.phoneNumbers.filter(p => p.label !== 'mobile' || 'main')[0]
      .number,
    image: contact.thumbnailPath,
    isHallaMeUser: true, // Check if the user is a halla me user.
  };
};
