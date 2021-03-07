import { expect } from 'chai';
import { describe } from 'mocha';
import { normalizeFromPercents, normalizeToPercents, PercentNormalizerOption } from '../src';

describe('percent Normalizer - TESTS', () => {

    describe('To Percents', () => {

        it(`Negative range to percents`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : -100,
                bottomRangeBorder : -200,
                value : -150,   
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(50);
        });

        it(`Positive range to percents`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 200,
                bottomRangeBorder : 100,
                value : 150,   
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(50);
        });

        it(`Mixed range to percents`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 50,
                bottomRangeBorder : -150,
                value : -50,   
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(50);
        });
    });

    describe('From Percents', () => {

        it(`Negative range to percents`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : -100,
                bottomRangeBorder : -200,
                value : 50,   
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(-150);
        });

        it(`Positive range to percents`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 200,
                bottomRangeBorder : 100,
                value : 50,   
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(150);
        });

        it(`Mixed range to percents`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 50,
                bottomRangeBorder : -150,
                value : 50,   
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(-50);
        });
    });

    describe('To permille', () => {

        it(`Negative range to permille`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : -100,
                bottomRangeBorder : -200,
                value : -150,
                percentsTopRangeBorder : 1000,
                percentsBottomRangeBorder : 0,   
            };

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(500);
        });

        it(`Positive range to permille`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 200,
                bottomRangeBorder : 100,
                value : 150,  
                percentsTopRangeBorder : 1000,
                percentsBottomRangeBorder : 0,  
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(500);
        });

        it(`Mixed range to permille`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 50,
                bottomRangeBorder : -150,
                value : -50,   
                percentsTopRangeBorder : 1000,
                percentsBottomRangeBorder : 0, 
            };

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(500);
        });
    });

    describe('From Permille', () => {

        it(`Negative range to permille`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : -100,
                bottomRangeBorder : -200,
                value : 500,   
                percentsTopRangeBorder : 1000,
                percentsBottomRangeBorder : 0, 
            };

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(-150);
        });

        it(`Positive range to permille`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 200,
                bottomRangeBorder : 100,
                value : 500,  
                percentsTopRangeBorder : 1000,
                percentsBottomRangeBorder : 0,  
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(150);
        });

        it(`Mixed range to permille`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 50,
                bottomRangeBorder : -150,
                value : 500,   
                percentsTopRangeBorder : 1000,
                percentsBottomRangeBorder : 0, 
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(-50);
        });
    });

    describe('To Percents + 100', () => {

        it(`Negative range to percents + 100`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : -100,
                bottomRangeBorder : -200,
                value : -150,
                percentsTopRangeBorder : 200,
                percentsBottomRangeBorder : 100   
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(150);
        });

        it(`Positive range to percents + 100`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 200,
                bottomRangeBorder : 100,
                value : 150,   
                percentsTopRangeBorder : 200,
                percentsBottomRangeBorder : 100   
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(150);
        });

        it(`Mixed range to percents + 100`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 50,
                bottomRangeBorder : -150,
                value : -50,   
                percentsTopRangeBorder : 200,
                percentsBottomRangeBorder : 100   
            }

            const percents = normalizeToPercents(percentNormalizerOption);
            expect(percents).equal(150);
        });
    });

    describe('From Percents + 100', () => {

        it(`Negative range to percents + 100`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : -100,
                bottomRangeBorder : -200,
                value : 150,  
                percentsTopRangeBorder : 200,
                percentsBottomRangeBorder : 100    
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(-150);
        });

        it(`Positive range to percents + 100`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 200,
                bottomRangeBorder : 100,
                value : 150,   
                percentsTopRangeBorder : 200,
                percentsBottomRangeBorder : 100}

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(150);
        });

        it(`Mixed range to percents + 100`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 50,
                bottomRangeBorder : -150,
                value : 150,   
                percentsTopRangeBorder : 200,
                percentsBottomRangeBorder : 100
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(-50);
        });
    });

    describe('Fraction test', () => {

        it(`Get exact fraction`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 100,
                bottomRangeBorder : 0,
                value : 25,
                percentsTopRangeBorder: 200,
                percentsBottomRangeBorder: 0,
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(12.5);
        });

        it(`Floor fraction`, () => {
            const percentNormalizerOption : PercentNormalizerOption = {
                topRangeBorder : 100,
                bottomRangeBorder : 0,
                value : 25,
                percentsTopRangeBorder: 200,
                percentsBottomRangeBorder: 0,
                returnsInteger : true
            }

            const percents = normalizeFromPercents(percentNormalizerOption);
            expect(percents).equal(12);
        });
    });
});