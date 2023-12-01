# Ameliance SkyMusic TypeScript Scripts Collection

A collection of my personal scripts, scripts I found on the Internet, maybe even modified

## Installation

```
npm i ameliance-scripts
```

## Usage

```js
import a from "ameliance-scripts";

const randomRGBColor = a.getRandomRGBColor();
```

or

```js
import { getRandomRGBColor } from "ameliance-scripts";

const randomRGBColor = getRandomRGBColor();
```

## Functions list

```js
const arr = ["a", "b", "c"];
a.addId(arr);
// [
//    { a: 'a', id: 0 },
//    { b: 'b', id: 0 },
//    { c: 'c', id: 0 }
// ]

const arr = [{ key: "a" }, { key: "b" }, { key: "c" }];
a.addId(arr);
// [
//    { key: 'a', id: 0 },
//    { key: 'b', id: 0 },
//    { key: 'c', id: 0 }
// ]

const arr = [{ key: "a" }, { key: "b" }, { key: "c" }];
const ids = [2923, 0292, 8347];
a.addId(arr, ids);
// [
//    { key: 'a', id: 2923 },
//    { key: 'b', id: 0292 },
//    { key: 'c', id: 8347 }
// ]
```

```js
const someVar = 'class-b'
const someArr = [null, '', 'icon', '', '', undefined, '']
<Component {...a.className(['class-a', undefined, someVar, someArr.length > 0 && someArr]);}/>
// <Component className='class-a class-b icon'/>
```

```js
a.clearLocalStorageAndReload();
```

```js
a.createHTMLElem();
```

```js
a.getCommonValues(["1", "2", "3"], ["3", "4"], ["3", "5"]);
// ['3']

a.getCommonValues([1, 2, 3], [3, 4], [3, 5]);
// [3]

a.getCommonValues(["1", "2", "3", 1], ["3", "4", 1], [1, "3", "5"]);
// ['3, 1]
```

```js
a.getCurrentDateInMs();
// 1675366990061
```

```js
a.getDifferentValues(["1", "2", "3"], ["3", "4"], ["3", "5"]);
// ['1', '2']

a.getDifferentValues([1, 2, 3], [3, 4], [3, 5]);
// [1, 2]

a.getDifferentValues(["1", "2", "3", 1, 3], ["3", "4", 1], [1, "3", "5"]);
// ['1', '2', 3]
```

```js
const arr = [
   { a: 1, b: 2 },
   { a: 3, b: 4 },
   { a: 3, b: 2 },
];
a.getElemByKey(arr, a, 3);
// { a: 3, b: 4 }
```

```js
a.getFormattedDate("2023-06-01");
// June 1, 2023

a.getFormattedDate("2023-06-01", "short");
// 6/1/23

a.getFormattedDate("2023-06-01", "full", "uk-UA");
// четвер, 1 червня 2023 р.

a.getFormattedDate("2023-06-01", "full", "ja-JP");
// 2023年6月1日木曜日
```

```js
const arr = [
   { a: 1, b: 2 },
   { a: 3, b: 4 },
   { a: 3, b: 2 },
];
a.getIndexByKey(arr, a, 3);
// 2
```

```js
a.getIndexesOfNonEmptyElements(["1", "", "3"]);
// [0, 2]
```

```js
const code = 403;
a.getMatch(code, {
   403: "Forbidden ",
   500: "Server Error",
   _: "Unknown error",
});
// Forbidden
```

```js
a.getObjKeyByValue();
```

```js
a.getRandomHEXColor();
// '#FFAA00'
```

```js
a.getRandomNumber(0, 7);
// 5
```

```js
a.getRandomRGBColor();
// [255, 10, 8]
```

```js
a.getScrollDirection();
// 'UP'
// 'DOWN'
```

```js
a.groupBy(["aa", "aq", "ab", "bx", "ba"]);
// [
//   [a, ['aa', 'aq', 'ab]],
//   [b, ['bx', ba]]
// ]

a.groupBy([
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

```js
a.getToday();
// 2024-12-09
```

```js
a.hideEmail("ameliaceskymusic@gmail.com");
// a***************c@gmail.com
```

```js
a.isClient(); // on client
// true

a.isClient(); // on server
// false
```

```js
a.isObject({ a: "a" });
// true
```

```js
a.isObjectEmpty({ a: "a" });
// false
```

```js
a.isObjectHasValue({ a: "world", b: "hello" }, "react");
// false

a.isObjectHasValue({ a: "world", b: "hello" }, "world");
// true
```

```js
a.isObjectValid("a");
// false
a.isObjectValid(null);
// false
a.isObjectValid({});
// false
a.isObjectValid({ a: "a" });
// true
```

```js
const someVar = "class-b";
const someArr = [null, "", "icon", "", "", undefined, ""];
const someObj = { "active-class-name": false, "another-class": a === b };
a.join([
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

```js
const someVar = "class-b";
const someArr = [null, "", "icon", "", "", undefined, ""];
a.joinWith(",", ["class-a", undefined, someVar, someVar, someArr.length > 0 && someArr]);
// 'class-a, class-b, icon'
```

```js
a.parseCurrentDateFromMs(1675366990061);
// Thu Feb 02 2023 21:43:10 GMT+0200
```

```js
a.removeEmptyValues(["", "", "a", "", "b", "", ""]);
// ['a', 'b']

a.removeEmptyValues(
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

```js
a.returnError(error);

const APP_NAME = "app-name";
export function returnError() {
   a.returnError(string, APP_NAME, 1);
}
```

```js
a.setIntervalCounts({ () => console.log('Hello'), 1000, 3 })
// Hello // 1st time after delay 1s
// Hello // 2nd time after delay 2s
// Hello // 3rd time after delay 3s
```

```js
a.shuffleArray(["a", "b", "c"]);
// ['b', 'c', 'a']
```

```js
a.sortArrayLocalCompare(["Яблуко", "ćma", "BBC", "10", "fast"]);
// ['10', 'Яблуко', 'BBC', 'ćma', 'fast']

a.sortArrayLocalCompare(
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

```js
a.sortArrayOfObj();
```

```js
a.splitTextByBr("Some\nfew\nlines");
// <>
// 	some
// 	<br/>
// 	few
// 	<br/>
// 	lines
// 	<br/>
// </>
```

```js
a.stringCut("long string", 5);
// 'long...'

a.stringCut("long string", 8, "=)");
// 'long str=)'
```

```js
a.toTimeFormat(60); // 00:60
```

```js
a.trimEndEmptyValues(["", "", "a", "", "b", "", ""]);
// ['', '', 'a', '', 'b']

a.trimEndEmptyValues(
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

```js
a.trimStartEmptyValues(["", "", "a", "", "b", "", ""]);
// ['a', '', 'b', '', '']

a.trimStartEmptyValues(
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

```js
const isActiveClass = a.useActiveClass("some-class another-class");

function SomeComponent() {
   return <Link className={isActiveClass(link.path === path)} />;
}
```

```js
a.writeTextToClipboard("some text string");
```

### \_LAB

```js
a.getLocalStorage(APP_NAME, "user", "displayName", "Ameliance SkyMusic");
```

```js
a.setLocalStorage(APP_NAME, "user", "displayName", "Ameliance SkyMusic");
```

## History

```
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
