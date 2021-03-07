export interface PercentNormalizerOption {
    /** The max top range border */
    topRangeBorder : number;
    /** The min bottom range border */
    bottomRangeBorder : number;
    /** The original value */
    value: number;
    /** Returns the greatest integer, default false */
    returnsInteger? : boolean;
    /** The percents system top range, as default it's 100 */
    percentsTopRangeBorder? : number;
    /** The percents system bottom range, as default it's 0 */
    percentsBottomRangeBorder? : number;
}

/**
 * Get the relation factor of the value in the original range system
 * @param percentNormalizer The normalization props
 */
function getRangeFactor(percentNormalizer: PercentNormalizerOption) : { factor : number; } {
    const range = percentNormalizer.topRangeBorder - percentNormalizer.bottomRangeBorder;
    const destinationRange = (percentNormalizer.percentsTopRangeBorder || 100) - (percentNormalizer.percentsBottomRangeBorder || 0);
    const factor = range / destinationRange;
    return { factor };
}

/**
 * Normalize value from number range to presents system.
 * For example, the 150 in the 100:200 range is 50%
 * @param toPercentNormalizerOption The normalization properties
 * @returns The normalized value
 */
export function normalizeToPercents(toPercentNormalizerOption: PercentNormalizerOption) : number {
    const { factor } = getRangeFactor(toPercentNormalizerOption);
    // Calculate the value in the percents range
    const percent = ((toPercentNormalizerOption.value - toPercentNormalizerOption.bottomRangeBorder) / factor);
    
    // Add the percents system bottom to the final percents value (if exists)
    const finalPercent = percent + (toPercentNormalizerOption.percentsBottomRangeBorder || 0);

    if(toPercentNormalizerOption.returnsInteger) {
        return Math.floor(finalPercent);
    }
    return finalPercent;
}

/**
 * Normalize percents to other range system.
 * For example, the 50% is 150 in the 100:200 range
 * @param toPercentNormalizerOption The normalization properties
 * @returns The normalized value
 */
export function normalizeFromPercents(fromPercentNormalizerOption: PercentNormalizerOption) : number {
    const { factor } = getRangeFactor(fromPercentNormalizerOption);
    // Get the value in the same source range, but normalize bottom of the range to zero 
    // (the rest calculation based on the source range and not depend on the acutal min/max numbers. so flat the value as same range start from 0)
    const flatValue = fromPercentNormalizerOption.value - (fromPercentNormalizerOption.percentsBottomRangeBorder || 0);
    // Calculate the value in the new range
    const value = (flatValue * factor) + fromPercentNormalizerOption.bottomRangeBorder;

    if(fromPercentNormalizerOption.returnsInteger) {
        return Math.floor(value);
    }
    return value;
}
