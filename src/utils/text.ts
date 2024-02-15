export const truncateString = (str: string, num = 100) => {
  const trncatedString = str?.length > num ? str?.slice(0, num) + '...' : str;
  return trncatedString;
};

export const commafy = (num: number | string) => {
  const str = num.toString().split('.');

  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }

  if (str[1] && str[1].length >= 4) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }

  return str.join('.');
};

export const insertDecimal = (num: number) => {
  return (num / 100).toFixed(2);
};

export const capitalize = (str: string) => {
  return str?.toLowerCase()?.replace(/\b(\w)/g, x => x?.toUpperCase());
};

export const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const getInitials = (str: string) => {
  return (
    str
      .match(/\b(\w)/g)
      ?.join('')
      ?.toUpperCase() || ''
  );
};

function getStringBeforeSubstring(parentString: string, substring: string) {
  return parentString?.substring(0, parentString?.indexOf(substring));
}

export function formatTitleUrl(str: string) {
  const firstPart = str?.split('//')[1];
  const formattedUrl = getStringBeforeSubstring(firstPart, '/');
  return formattedUrl;
}
