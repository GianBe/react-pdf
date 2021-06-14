/* eslint-disable import/prefer-default-export */

import * as R from 'ramda';

const matchNumber = v => R.is(String, v) && R.test(/^-?\d*\.?\d*$/, v);

export const castFloat = R.when(matchNumber, v => parseFloat(v, 10));
