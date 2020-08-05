import { FeaturesList, UserOptions } from './interfaces';
declare class FeatureViewer {
    private commons;
    private divId;
    private sequence;
    private transition;
    private subfeaturesTransition;
    private fillSVG;
    private calculate;
    private tool;
    private parseUserOptions;
    private addYAxis;
    private updateYAxis;
    private brushend;
    private resizeForMobile;
    private calcFlagWidth;
    private updateWindow;
    private transition_data;
    private init;
    private addFeatureCore;
    private drawFeatures;
    private recursivelyRemove;
    private recursiveClose;
    private changeFeature;
    private resetTooltip;
    getCurrentPosition(): number;
    getCurrentZoom(): number;
    showHelp(): void;
    resetHighlight(): void;
    resetZoom(): void;
    resetAll(): void;
    downloadJpeg(): void;
    downloadPNG(): void;
    clickFlag(d: any): void;
    emptyFeatures(): any;
    flagLoading(id: any): void;
    highlightRegion(region: any, featureid: any): void;
    highlightPosition(object: any): void;
    private recursiveClick;
    collapseAll(): void;
    expandAll(): void;
    onRegionSelected(listener: any): void;
    removeResizeListener(): void;
    onFeatureSelected(listener: any): void;
    onButtonSelected(listener: any): void;
    onZoom(listener: any): void;
    onClearSelection(listener: any): void;
    onAnimationOff(listener: any): void;
    stopFlagLoading: (id: any) => void;
    resizeViewer: () => void;
    private addFeature;
    addFeatures(featureList: FeaturesList): void;
    private getLevel;
    constructor(sequence: string, div: string, options?: UserOptions, features?: FeaturesList);
}
export { FeatureViewer };
