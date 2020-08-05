import { ViewerOptions, FeaturesList } from './interfaces';
declare class Commons {
    fvLength: number;
    events: {
        FEATURE_SELECTED_EVENT: string;
        CLEAR_SELECTION_EVENT: string;
        FLAG_SELECTED_EVENT: string;
        FLAG_SELECTED_INTERRUPTED_EVENT: string;
        TAG_SELECTED_EVENT: string;
        ZOOM_EVENT: string;
        ANIMATIONS_FALSE_EVENT: string;
    };
    viewerOptions: ViewerOptions;
    mobilesize: number;
    radius: number;
    flagsHeight: number;
    maxNumberOfButtons: number;
    features: FeaturesList;
    yData: any;
    seqShift: number;
    scalingPosition: any;
    lineYScale: any;
    featureSelected: any;
    flagSelected: any[];
    animation: boolean;
    trigger: any;
    level: number;
    svgElement: any;
    svg: any;
    svgContainer: any;
    tagsContainer: any;
    tooltipDiv: any;
    customTooltipDiv: any;
    divId: string;
    right_chevron: any;
    down_chevron: any;
    yAxisSVG: any;
    yAxisSVGGroup: any;
    xAxis: any;
    line: any;
    lineBond: any;
    brush: any;
    extent: any;
    pathLevel: number;
    step: number;
    elementHeight: number;
    YPosition: number;
    scaling: any;
    lineGen: any;
    headMargin: number;
    stringSequence: string;
    calculatedTransitions: any;
    d3helper: any;
    style: any;
    logger: any;
    backgroundcolor: string;
    currentposition: number;
    currentzoom: number;
    private _current_extend;
    current_extend: any;
    constructor();
}
export default Commons;
