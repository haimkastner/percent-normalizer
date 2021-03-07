# percent-normalizer

## A small and simple converter library to normalize from/to percents

The convert from/to presents or any range to any other range.

## Install via NPM

```bash 

npm install percent-normalizer

```

# How to convert


```typescript
import { 
    normalizeFromPercents, 
    normalizeToPercents, 
    PercentNormalizerOption
} from 'percent-normalizer;

// To Percents
let percentNormalizerOption : PercentNormalizerOption = {
        topRangeBorder : -100,
        bottomRangeBorder : -200,
        value : -150,   
    };

let percents = normalizeToPercents(percentNormalizerOption);
console.log(percents + '%') // 50%

// From Percents
percentNormalizerOption = {
        topRangeBorder : 200,
        bottomRangeBorder : 100,
        value : 50,   
    };

let value = normalizeFromPercents(percentNormalizerOption);
console.log(value) // 150


// To Permille
percentNormalizerOption = {
        topRangeBorder : 200,
        bottomRangeBorder : 100,
        value : 150,  
        percentsTopRangeBorder : 1000,
        percentsBottomRangeBorder : 0, 
    };

let permille = normalizeToPercents(percentNormalizerOption);
console.log(permille) // 500

// From Permille
percentNormalizerOption = {
        topRangeBorder : 200,
        bottomRangeBorder : 100,
        value : 500,  
        percentsTopRangeBorder : 1000,
        percentsBottomRangeBorder : 0,      
    };

let value = normalizeFromPercents(percentNormalizerOption);
console.log(value) // 150

// Floor fraction
percentNormalizerOption = {
        topRangeBorder : 100,
        bottomRangeBorder : 0,
        value : 25,
        percentsTopRangeBorder: 200,
        percentsBottomRangeBorder: 0,
        returnsInteger : true    
    };

let value = normalizeFromPercents(percentNormalizerOption);
console.log(value) // 12

```
