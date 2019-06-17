<p align="center">
  <a href="https://sigeosrl.com/" rel="noopener" target="_blank"><img width="280" src="https://sigeosrl.eu/wp-content/uploads/2018/07/SigeoDarkRetina-350x92.png" alt="SIGEO logo"></a></p>
</p>

# Export to CSV
Simple way to generate **a CSV from Vanilla JS**!

We working on ***live demo***, give us little more time!

## Installation
This package is available as an [npm package](https://www.npmjs.com/package/@sigeo/export-to-csv).

```sh
// With npm
npm install @sigeo/export-to-csv

// With yarn
yarn add @sigeo/export-to-csv
```

## Usage
Pass an array of arrays to `exportToCsv` function imported by `@sigeo/export-to-csv` package. Each array will be a row in the CSV.

Here is a quick example to get you started, **it's all you need**:

```js
import exportToCsv from '@sigeo/export-to-csv';

exportToCsv([
  ['Header1', 'Header2', 'Header3'],
  ['Row 1 - Data 1', 'Row 1 - Data 2', 'Row 1 - Data 3'],
  ['Row 2 - Data 1', 'Row 2 - Data 2', 'Row 2 - Data 3'],
  ['Row 3 - Data 1', 'Row 3 - Data 2', 'Row 3 - Data 3', 'Row 3 - Data 4']
]);
```
## License
Copyright © 2019 [Sigeo S.R.L](https://sigeosrl.com/)

Licensed under a GPL3+ license: http://www.gnu.org/licenses/gpl-3.0.txt
