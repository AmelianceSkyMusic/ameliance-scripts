# Ameliance SkyMusic TypeScript Scripts Collection

A collection of my personal scripts, scripts I found on the Internet, maybe even modified

## Installation

```
npm i ameliance-scripts
```

## Usage

Import like this

```ts
import { getRandomRGBColor } from "ameliance-scripts";

const randomRGBColor = getRandomRGBColor();
```

or

```ts
import a from "ameliance-scripts";

const randomRGBColor = getRandomRGBColor();
```

## Functions list

```ts
const arr = ["a", "b", "c"];
addId(arr);
// [
//    { a: 'a', id: 0 },
//    { b: 'b', id: 0 },
//    { c: 'c', id: 0 }
// ]

const arr = [{ key: "a" }, { key: "b" }, { key: "c" }];
addId(arr);
// [
//    { key: 'a', id: 0 },
//    { key: 'b', id: 0 },
//    { key: 'c', id: 0 }
// ]

const arr = [{ key: "a" }, { key: "b" }, { key: "c" }];
const ids = [2923, 0292, 8347];
addId(arr, ids);
// [
//    { key: 'a', id: 2923 },
//    { key: 'b', id: 0292 },
//    { key: 'c', id: 8347 }
// ]
```

```ts
const someVar = 'class-b'
const someArr = [null, '', 'icon', '', '', undefined, '']
<Component {...className(['class-a', undefined, someVar, someArr.length > 0 && someArr]);}/>
// <Component className='class-a class-b icon'/>
```

```ts
clearLocalStorageAndReload();
```

```ts
createHTMLElem();
```

```ts
detectValueType("some string");
// 'string'

detectValueType(123);
// 'number'

detectValueType(true);
// 'boolean'

detectValueType(new Date());
// 'date'
```

```ts
errorHandler(error);

export function handleAppError(error: unknown, code?: number): ReturnError {
	return errorHandler({
		error,
		code,
		errorTitle: process.env.APP_NAME,
		wrapperCount: 1,
	});
}

// '{status: 520, message: "Unknown Error", code?: "UNKNOWN_ERROR" }';
```

```ts
const originalObject = { a: 1, b: 2, c: 3 };
const updatedObject = { a: 2, b: 2, d: 5 };
getChangedProperties(obj1, obj2);
// { a:2, c: 3, d: 5 }
```

```ts
getCommonValues(["1", "2", "3"], ["3", "4"], ["3", "5"]);
// ['3']

getCommonValues([1, 2, 3], [3, 4], [3, 5]);
// [3]

getCommonValues(["1", "2", "3", 1], ["3", "4", 1], [1, "3", "5"]);
// ['3', 1]
```

```ts
getCurrentDateInMs();
// 1675366990061
```

```ts
getDifferentValues(["1", "2", "3"], ["3", "4"], ["3", "5"]);
// ['1', '2']

getDifferentValues([1, 2, 3], [3, 4], [3, 5]);
// [1, 2]

getDifferentValues(["1", "2", "3", 1, 3], ["3", "4", 1], [1, "3", "5"]);
// ['1', '2', 3]
```

```ts
const arr = [
	{ a: 1, b: 2 },
	{ a: 3, b: 4 },
	{ a: 3, b: 2 },
];
getElemByKey(arr, a, 3);
// { a: 3, b: 4 }
```

```ts
getFormattedDate("2023-06-01");
// June 1, 2023

getFormattedDate("2023-06-01", "short");
// 6/1/23

getFormattedDate("2023-06-01", "full", "uk-UA");
// четвер, 1 червня 2023 р.

getFormattedDate("2023-06-01", "full", "ja-JP");
// 2023年6月1日木曜日
```

```ts
const arr = [
	{ a: 1, b: 2 },
	{ a: 3, b: 4 },
	{ a: 3, b: 2 },
];
getIndexByKey(arr, a, 3);
// 2
```

```ts
getIndexesOfNonEmptyElements(["1", "", "3"]);
// [0, 2]
```

```ts
const code = 999;
getMatchSoft(code, {
	403: "Forbidden ",
	500: "Server Error",
	_: "Unknown error",
});
// "Unknown error"

const code = 999;
getMatchSoft(code, {
	403: "Forbidden ",
	500: "Server Error",
	_: "Unknown error",
});
// null
```

```ts
const code = 403;
getMatch(code, {
	403: "Forbidden ",
	500: "Server Error",
	_: "Unknown error",
});
// Forbidden
```

```ts
getObjKeyByValue();
```

```ts
getRandomHEXColor();
// '#FFAA00'
```

```ts
getRandomNumber(0, 7);
// 5
```

```ts
getRandomRGBColor();
// [255, 10, 8]
```

```ts
getScrollDirection();
// 'UP'
// 'DOWN'
```

```ts
getToday();
// 2024-12-09
```

```ts
getValueType("some string");
// 'string'

getValueType(123);
// 'number'
```

```ts
groupBy(["aa", "aq", "ab", "bx", "ba"]);
// [
//   [a, ['aa', 'aq', 'ab]],
//   [b, ['bx', ba]]
// ]

groupBy([
	{ key1: "aa", key2: 1 },
	{ key1: "aq", key2: 3 },
	{ key1: "ab", key2: "2" },
	{ key1: "bx", key2: "5" },
	{ key1: "ba", key2: 4 },
]),
	"key1";
//[
//   [a, [
//      {key1:'aa', key2: 1 },
//      {key1:'ab', key2: '2' },
//      {key1:'aq', key2: 3 },
//   ]],
//   [b, [
//      {key1:'ba', key2: 4 }
//      {key1:'bx', key2: '5' },
//   ]]
//]
```

```ts
hideEmail("ameliaceskymusic@gmail.com");
// a***************c@gmail.com
```

```ts
isArraysEqual([1, 2, 3], [1, 2, 3]);
// true

isArraysEqual([1, 2, 3], [1, 2]);
// false
```

```ts
isClient(); // on client
// true

isClient(); // on server
// false
```

```ts
isObjectEmpty({ a: "a" });
// false
```

```ts
isObjectHasValue({ a: "world", b: "hello" }, "react");
// false

isObjectHasValue({ a: "world", b: "hello" }, "world");
// true
```

```ts
isObjectValid("a");
// false
isObjectValid(null);
// false
isObjectValid({});
// false
isObjectValid({ a: "a" });
// true
```

```ts
isObject({ a: "a" });
// true
```

```ts
console.log(isValidUrl("https://example.com"));
// true - a valid URL with a protocol

console.log(isValidUrl("http://example.com"));
// true - a valid URL with another protocol

console.log(isValidUrl("ftp://example.com"));
// true - a valid URL with the FTP protocol

console.log(isValidUrl("www.example.com"));
// false - missing protocol

console.log(isValidUrl("example.com"));
// false - missing protocol

console.log(isValidUrl(""));
// false - empty string

console.log(isValidUrl("random_string"));
// false - not a valid URL format

console.log(isValidUrl("https://"));
// false - protocol exists, but domain is missing

console.log(isValidUrl("https://example.com/path?query=123"));
// true - valid URL with a path and query parameters

console.log(isValidUrl("https://example.com:8080"));
// true - valid URL with a port

console.log(isValidUrl("https://invalid_domain"));
// true - technically valid format, but the domain looks suspicious
```

```ts
joinWith(" ", ["a", "b", "c"]);
// 'a b c'

joinWith(", ", ["a", "b", "c", null, undefined]);
// 'a, b, c'

const someVar = "class-b";
const someArr = [null, "", "icon", "", "", undefined, ""];
joinWith(",", ["class-a", undefined, someVar, someVar, someArr.length > 0 && someArr]);
// 'class-a, class-b, icon'
```

```ts
const someVar = "class-b";
const someArr = [null, "", "icon", "", "", undefined, ""];
const someObj = { "active-class-name": false, "another-class": a === b };
join([
	"class-a",
	undefined,
	someVar,
	someVar,
	someArr.length > 0 && someArr,
	someObj,
	path === curPath && "active",
]);
// 'class-a class-b icon another-class'
```

```ts
const someVar = "class-b";
const someArr = [null, "", "icon", "", "", undefined, ""];
const someObj = { "active-class-name": false, "another-class": a === b };
join([
	"class-a",
	undefined,
	someVar,
	someVar,
	someArr.length > 0 && someArr,
	someObj,
	path === curPath && "active",
]);
// 'class-a class-b icon another-class'
```

```ts
kebabToCamelCase("some-class-name");
// someClassName
```

```ts
log.warn(
	errorTitle,
	errorSubtitle,
	new Error().stack?.split("\n").splice(errorCount, errorDeep).join("\n"),
);

log.error(
	errorTitle,
	[errorSubtitle, "background-color: red;"],
	[`\n${new Error().stack?.split("\n").splice(errorCount, errorDeep).join("\n")}`, ""],
);
```

```ts
parseCurrentDateFromMs(1675366990061);
// Thu Feb 02 2023 21:43:10 GMT+0200
```

```ts
removeEmptyValues(["", "", "a", "", "b", "", ""]);
// ['a', 'b']

removeEmptyValues(
	[
		{ key1: "", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "a", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "b", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "", key2: "someKey" },
	],
	"key1",
);
// [
//    {key1: 'a', key2: 'someKey'},
//    {key1: 'b', key2: 'someKey'}
// ]
```

```ts
setIntervalCounts({ () => console.log('Hello'), 1000, 3 })
// Hello // 1st time after delay 1s
// Hello // 2nd time after delay 2s
// Hello // 3rd time after delay 3s
```

```ts
shuffleArray(["a", "b", "c"]);
// ['b', 'c', 'a']
```

```ts
sortArrayLocalCompare(["Яблуко", "ćma", "BBC", "10", "fast"]);
// ['10', 'Яблуко', 'BBC', 'ćma', 'fast']

sortArrayLocalCompare(
	[
		{ key1: "Яблуко", key2: "someKey" },
		{ key1: "ćma", key2: "someKey" },
		{ key1: "BBC", key2: "someKey" },
		{ key1: "10", key2: "someKey" },
		{ key1: "fast", key2: "someKey" },
	],
	"key1",
);
// [
//    {key1: '10', key2: 'someKey'},
//    {key1: 'Яблуко', key2: 'someKey'},
//    {key1: 'BBC', key2: 'someKey'},
//    {key1: 'ćma', key2: 'someKey'},
//    {key1: 'fast', key2: 'someKey'},
// ]
```

```ts
sortArrayOfObj();
```

```ts
stringCut("long string", 5);
// 'long...'

stringCut("long string", 8, "=)");
// 'long str=)'
```

```ts
toTimeFormat(60); // 00:60
```

```ts
trimEndEmptyValues(["", "", "a", "", "b", "", ""]);
// ['', '', 'a', '', 'b']

trimEndEmptyValues(
	[
		{ key1: "", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "a", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "b", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "", key2: "someKey" },
	],
	"key1",
);
// [
//    {key1: '', key2: 'someKey'},
//    {key1: '', key2: 'someKey'},
//    {key1: 'a', key2: 'someKey'},
//    {key1: '', key2: 'someKey'},
//    {key1: 'b', key2: 'someKey'}
// ]
```

```ts
trimStartEmptyValues(["", "", "a", "", "b", "", ""]);
// ['a', '', 'b', '', '']

trimStartEmptyValues(
	[
		{ key1: "a", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "b", key2: "someKey" },
		{ key1: "", key2: "someKey" },
		{ key1: "", key2: "someKey" },
	],
	"key1",
);
// [
//    {key1: 'a', key2: 'someKey'},
//    {key1: '', key2: 'someKey'},
//    {key1: 'b', key2: 'someKey'},
//    {key1: '', key2: 'someKey'},
//    {key1: '', key2: 'someKey'}
// ]
```

```ts
writeTextToClipboard("some text string");
```

### lab

```ts
lab.getLocalStorage(APP_NAME, "user", "displayName", "Ameliance SkyMusic");
```

```ts
lab.setLocalStorage(APP_NAME, "user", "displayName", "Ameliance SkyMusic");
```

### legacy

```ts
legacy.join();
```

```ts
legacy.returnError2();
```

```ts
legacy.returnError1();
```

## History

```
0.4.001 [2024_11_21]:
	^: move useActiveClass script to library to https://www.npmjs.com/package/ameliance-react-scripts

0.4.0 [2024_11_18]:
	^: move react scripts to library to https://www.npmjs.com/package/ameliance-react-scripts
   *: rename get-random-hexcolor to get-random-hex-color

0.3.4 [2024_11_18]:
   +: add detectValueType
   +: add getChangedProperties
   +: add getCurrentTimeWithOffset
   +: add getMatchSoft
   +: add getValueType
   +: add isArraysEqual
   +: add іsValidUrl
   +: add kebabToCamelCase
   +: add trimStartEmptyValues
   *: update getMatch
   *: update sortArrayOfObj

0.3.3 [2024_10_04]:
   +: add log
   #: add styles error-handler console.log

0.3.2 [2024_09_11]:
   #: fix publish issues

0.3.1 [2024_09_11]:
   *: update code style

0.3.0 [2024_09_10]:
   +: add generate-response-json-error
   +: add generate-response-json-success
   ^: update error-handler
   *: rename return-error to error-handler
   *: update function file names to kebab-case name convention
   *: reorganize structure
   *: migrate to use tsup bundler
   #: fixes during migration to tsup

0.2.4 [2023_12_01]:
   *: update returnError
   +: add hideEmail
   +: add isClient
   +: add getElemByKey
   +: add getIndexByKey
   +: add getMatch
   +: add splitTextByBr
   +: add getObjKeyByValue

0.2.3 [2023_06_01]:
   *: extend join function
   +: add getFormattedDate
   +: add isObjectHasValue
   +: add isObjectValid
   +: add useActiveClass


0.2.2 [2023_05_07]:
   ^: add deep fourth param to returnError
   #: fix work with numbers groupBy
   #: fix work with numbers removeEmptyValues
   #: fix work with numbers sortArrayLocalCompare

0.2.1 [2023_05_02]:
   *: update naming

0.2.0 [2023_05_02]:
   ^: rename and move library to https://www.npmjs.com/package/ameliance-scripts

0.1.104 [2023_05_02]:
   +: add writeTextToClipboard
   +: add toTimeFormat
   +: add returnError
   +: add joinWith
   +: add getToday
   +: add clearLocalStorageAndReload
   +: add setLocalStorage to _LAB
   +: add getLocalStorage to _LAB
   *: update types anc add some improvements sortBy
   *: update types anc add some improvements removeEmptyValues
   *: update types anc add some improvements sortArrayLocalCompare

0.1.103 [2023_03_06]:
   +: add addId

0.1.102 [2023_02_02]:
   *: rename joinClasses to join
   #: fix join
   +: add className
   +: add setIntervalCounts
   +: add getCurrentDateInMs
   +: add parseCurrentDateFromMs

0.1.101 [2023_01_02]:
   #: fixes

0.1.1 [2023_01_02]:
   +: add isObject
   +: add getCommonValues
   +: add removeEmptyValues
   +: add getDifferentValues
   +: add trimEndEmptyValues
   +: add trimStartEmptyValues
   +: add getIndexesOfNonEmptyElements
   ^: add support sorting objects in groupBy
   ^: add support sorting objects in sortArrayLocalCompare
   *: rename combineListToSortedArray to groupBy
   *: rename sortStringArrayLocalCompare to sortArrayLocalCompare
   *: refactor code

0.0.107 [2022_12_22]:
   ^: update readme file

0.0.106 [2022_12_22]:
   ^: update readme file

0.0.105 [2022_12_22]:
   #: fix export
   ^: update readme file

0.0.104 [2022_12_22]:
   +: add sortStringArrayLocalCompare
   #: fix stringCut
   ^: clean code

0.0.103 [2022_12_22]:
   +: add combineListToSortedArray
   #: fix joinClasses

0.0.102 [2022_12_17]:
   ^: update readme file

0.0.101 [2022_12_17]:
   ^: update readme file

0.0.100 [2022_12_17]:
   +: add createHTMLElem
   +: add getRandomHEXColor
   +: add getRandomNumber
   +: add getRandomRGBColor
   +: add getScrollDirection
   +: add isObjectEmpty
   +: add joinClasses
   +: add shuffleArray
   +: add sortArrayOfObj
   +: add stringCut
```
