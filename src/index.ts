import * as lab from './_lab';
import * as legacy from './legacy';
import * as next from './next';
import * as react from './react';

export * from './add-id';
export * from './class-name';
export * from './clear-local-storage-and-reload';
export * from './create-html-elem';
export * from './error-handler';
export * from './get-common-values';
export * from './get-current-date-in-ms';
export * from './get-different-values';
export * from './get-elem-by-key';
export * from './get-formatted-date';
export * from './get-index-by-key';
export * from './get-indexes-of-non-empty-elements';
export * from './get-match';
export * from './get-obj-key-by-value';
export * from './get-random-hexcolor';
export * from './get-random-number';
export * from './get-random-rgb-color';
export * from './get-scroll-direction';
export * from './get-today';
export * from './group-by';
export * from './hide-email';
export * from './is-client';
export * from './is-object-empty';
export * from './is-object-has-value';
export * from './is-object-valid';
export * from './is-object';
export * from './join-with';
export * from './join';
export * from './log';
export * from './parse-current-date-from-ms';
export * from './react';
export * from './remove-empty-values';
export * from './set-interval-counts';
export * from './shuffle-array';
export * from './sort-array-local-compare';
export * from './sort-array-of-obj';
export * from './string-cut';
export * from './to-time-format';
export * from './trim-end-empty-values';
export * from './trimStartEmptyValues';
export * from './write-text-to-clipboard';

export { lab, legacy, react, next };

const a = {
	lab,
	legacy,
	react,
	next,
};

export default a;
