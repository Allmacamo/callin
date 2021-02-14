import axios, {AxiosResponse} from 'axios';
import {apiServer} from '../Constants';

/**
 * Helper function to generate UUIDs
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Returns full url of a server uploaded image
 * @param url url of the image
 */
export const serverImg = (url: string) => {
  return {uri: apiServer + url};
};
