import moment from 'moment';

export function getPostedDate(post) {
  return moment(post.updatedAt || post.createdAt).format('DD MMM');
}

function getContent(obj) {
  if (!obj || typeof obj === 'string') {
    return '';
  }

  if (Array.isArray(obj)) {
    return obj.map(getContent);
  }

  if (obj.value) {
    return obj.value;
  }

  return Object.keys(obj).reduce((result, key) => {
    const nextResult = result + getContent(obj[key]);
    return nextResult;
  }, '');
}

export function getPostReadLength(post) {
  const bodyRaw = post.body?.raw || null;
  const rawObj = JSON.parse(bodyRaw);
  const content = getContent(rawObj);
  return `${Math.floor(content.length / 238)} min read`;
}
