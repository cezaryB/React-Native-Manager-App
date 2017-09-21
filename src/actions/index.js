import { EMAIL_CHANGED } from './types';

export const emailChange = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
    });

