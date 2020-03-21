import { __decorate, __metadata, __param } from "tslib";
import { OnDestroy, OnInit, OnChanges, EventEmitter, ElementRef, Input, Output, SimpleChanges, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var BaseChartDirective = /** @class */ (function () {
    function BaseChartDirective(element, platformId) {
        this.element = element;
        this.labels = [];
        this.options = { legend: { display: false } };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) &&
                !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets,
            },
            options: options,
        };
        return new Chart(ctx, opts);
    };
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    BaseChartDirective.prototype.getPointDataAtEvent = function (event) {
        if (event.active.length > 0) {
            var datasetIndex = event.active[0]._datasetIndex;
            var dataIndex = event.active[0]._index;
            var dataObject = this.datasets[datasetIndex].data[dataIndex];
            return dataObject;
        }
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
            datasets = (this.datasets || datasets).map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96],
    ];
    BaseChartDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "datasets", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "labels", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BaseChartDirective.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BaseChartDirective.prototype, "chartType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "colors", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BaseChartDirective.prototype, "legend", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BaseChartDirective.prototype, "chartClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BaseChartDirective.prototype, "chartHover", void 0);
    BaseChartDirective = __decorate([
        Directive({ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' }),
        __param(1, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [ElementRef, String])
    ], BaseChartDirective);
    return BaseChartDirective;
}());
export { BaseChartDirective };
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8),
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1),
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); }),
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); }),
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jaGFydHMvY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLcEQ7SUFtQ0UsNEJBQTBCLE9BQW1CLEVBQXVCLFVBQWtCO1FBQTVELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFqQjdCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7UUFHOUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVkLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNcEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJ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b3ksXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIERpcmVjdGl2ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi9jb2xvcnMuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBDaGFydDogYW55O1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjYW52YXNbbWRiQ2hhcnRdJywgZXhwb3J0QXM6ICdtZGItYmFzZS1jaGFydCcgfSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBDb2xvcnMge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRDb2xvcnM6IEFycmF5PG51bWJlcltdPiA9IFtcbiAgICBbMjU1LCA5OSwgMTMyXSxcbiAgICBbNTQsIDE2MiwgMjM1XSxcbiAgICBbMjU1LCAyMDYsIDg2XSxcbiAgICBbMjMxLCAyMzMsIDIzN10sXG4gICAgWzc1LCAxOTIsIDE5Ml0sXG4gICAgWzE1MSwgMTg3LCAyMDVdLFxuICAgIFsyMjAsIDIyMCwgMjIwXSxcbiAgICBbMjQ3LCA3MCwgNzRdLFxuICAgIFs3MCwgMTkxLCAxODldLFxuICAgIFsyNTMsIDE4MCwgOTJdLFxuICAgIFsxNDgsIDE1OSwgMTc3XSxcbiAgICBbNzcsIDgzLCA5Nl0sXG4gIF07XG5cbiAgQElucHV0KCkgcHVibGljIGRhdGE6IG51bWJlcltdIHwgYW55W107XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhc2V0czogYW55W107XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IGFueSA9IHsgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0gfTtcbiAgQElucHV0KCkgcHVibGljIGNoYXJ0VHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY29sb3JzOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKSBwdWJsaWMgbGVnZW5kID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3R4OiBhbnk7XG4gIHB1YmxpYyBjaGFydDogYW55O1xuXG4gIGN2czogYW55O1xuICBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmN0eCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5kYXRhIHx8IHRoaXMuZGF0YXNldHMpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZXMgYXJlIGluIHRoZSBkYXRhIG9yIGRhdGFzZXRzXG4gICAgICBpZiAoXG4gICAgICAgIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhJykgfHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YXNldHMnKSkgJiZcbiAgICAgICAgIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xhYmVscycpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2RhdGEnXSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKGNoYW5nZXNbJ2RhdGEnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKGNoYW5nZXNbJ2RhdGFzZXRzJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlcndpc2UgcmVidWlsZCB0aGUgY2hhcnRcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hhcnRCdWlsZGVyKGN0eDogYW55KTogYW55IHtcbiAgICBjb25zdCBkYXRhc2V0czogYW55ID0gdGhpcy5nZXREYXRhc2V0cygpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAodGhpcy5sZWdlbmQgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLmxlZ2VuZCA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICB9XG4gICAgLy8gaG9jayBmb3Igb25Ib3ZlciBhbmQgb25DbGljayBldmVudHNcbiAgICBvcHRpb25zLmhvdmVyID0gb3B0aW9ucy5ob3ZlciB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMuaG92ZXIub25Ib3Zlcikge1xuICAgICAgb3B0aW9ucy5ob3Zlci5vbkhvdmVyID0gKGV2ZW50OiBhbnksIGFjdGl2ZTogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlICYmIGFjdGl2ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLm9uQ2xpY2spIHtcbiAgICAgIG9wdGlvbnMub25DbGljayA9IChldmVudDogYW55LCBhY3RpdmU6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoeyBldmVudCwgYWN0aXZlIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdHlwZTogdGhpcy5jaGFydFR5cGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IENoYXJ0KGN0eCwgb3B0cyk7XG4gIH1cblxuICAvLyBmZWF0dXJlKGNoYXJ0KTogYWRkZWQgZ2V0UG9pbnREYXRhQXRFdmVudCB3aGljaCB3aWxsIHJldHVybiBjbGlja2VkIGNoYXJ0J3MgcG9pbnQgZGF0YVxuICBwdWJsaWMgZ2V0UG9pbnREYXRhQXRFdmVudChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkYXRhc2V0SW5kZXggPSBldmVudC5hY3RpdmVbMF0uX2RhdGFzZXRJbmRleDtcbiAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGV2ZW50LmFjdGl2ZVswXS5faW5kZXg7XG4gICAgICBjb25zdCBkYXRhT2JqZWN0ID0gdGhpcy5kYXRhc2V0c1tkYXRhc2V0SW5kZXhdLmRhdGFbZGF0YUluZGV4XTtcbiAgICAgIHJldHVybiBkYXRhT2JqZWN0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hhcnREYXRhKG5ld0RhdGFWYWx1ZXM6IG51bWJlcltdIHwgYW55W10pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdEYXRhVmFsdWVzWzBdLmRhdGEpKSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgZGF0YXNldC5kYXRhID0gbmV3RGF0YVZhbHVlc1tpXS5kYXRhO1xuXG4gICAgICAgIGlmIChuZXdEYXRhVmFsdWVzW2ldLmxhYmVsKSB7XG4gICAgICAgICAgZGF0YXNldC5sYWJlbCA9IG5ld0RhdGFWYWx1ZXNbaV0ubGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGFWYWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRhc2V0cygpOiBhbnkge1xuICAgIGxldCBkYXRhc2V0czogYW55ID0gdm9pZCAwO1xuICAgIC8vIGluIGNhc2UgaWYgZGF0YXNldHMgaXMgbm90IHByb3ZpZGVkLCBidXQgZGF0YSBpcyBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmRhdGFzZXRzIHx8ICghdGhpcy5kYXRhc2V0cy5sZW5ndGggJiYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoKSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YVswXSkpIHtcbiAgICAgICAgZGF0YXNldHMgPSAodGhpcy5kYXRhIGFzIEFycmF5PG51bWJlcltdPikubWFwKChkYXRhOiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGEsIGxhYmVsOiB0aGlzLmxhYmVsc1tpbmRleF0gfHwgYExhYmVsICR7aW5kZXh9YCB9O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXRzID0gW3sgZGF0YTogdGhpcy5kYXRhLCBsYWJlbDogYExhYmVsIDBgIH1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5kYXRhc2V0cyAmJiB0aGlzLmRhdGFzZXRzLmxlbmd0aCkgfHwgKGRhdGFzZXRzICYmIGRhdGFzZXRzLmxlbmd0aCkpIHtcbiAgICAgIGRhdGFzZXRzID0gKHRoaXMuZGF0YXNldHMgfHwgZGF0YXNldHMpLm1hcCgoZWxtOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxtOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCBlbG0pO1xuICAgICAgICBpZiAodGhpcy5jb2xvcnMgJiYgdGhpcy5jb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdFbG0sIHRoaXMuY29sb3JzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdFbG0sIGdldENvbG9ycyh0aGlzLmNoYXJ0VHlwZSwgaW5kZXgsIG5ld0VsbS5kYXRhLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdFbG07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGFzZXRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5nLWNoYXJ0cyBjb25maWd1cmF0aW9uIGVycm9yLFxuICAgICAgZGF0YSBvciBkYXRhc2V0cyBmaWVsZCBhcmUgcmVxdWlyZWQgdG8gcmVuZGVyIGNoYXIgJHt0aGlzLmNoYXJ0VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YXNldHM7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKTogYW55IHtcbiAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRCdWlsZGVyKHRoaXMuY3R4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZ2JhKGNvbG91cjogQXJyYXk8bnVtYmVyPiwgYWxwaGE6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAncmdiYSgnICsgY29sb3VyLmNvbmNhdChhbHBoYSkuam9pbignLCcpICsgJyknO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExpbmVDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC40KSxcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAwLjgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRCYXJDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC42KSxcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC44KSxcbiAgICBob3ZlckJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBpZUNvbG9ycyhjb2xvcnM6IEFycmF5PG51bWJlcltdPik6IGFueSB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuNikpLFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMubWFwKCgpID0+ICcjZmZmJyksXG4gICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIHBvaW50Qm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcbiAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRQb2xhckFyZWFDb2xvcnMoY29sb3JzOiBBcnJheTxudW1iZXJbXT4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuNikpLFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgICBob3ZlckJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAwLjgpKSxcbiAgICBob3ZlckJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogbnVtYmVyW10ge1xuICByZXR1cm4gW2dldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KSwgZ2V0UmFuZG9tSW50KDAsIDI1NSldO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgbGluZXxiYXIgY2hhcnRzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3IoaW5kZXg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgcmV0dXJuIEJhc2VDaGFydERpcmVjdGl2ZS5kZWZhdWx0Q29sb3JzW2luZGV4XSB8fCBnZXRSYW5kb21Db2xvcigpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgcGllfGRvdWdobnV0IGNoYXJ0c1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9ycyhjb3VudDogbnVtYmVyKTogQXJyYXk8bnVtYmVyW10+IHtcbiAgY29uc3QgY29sb3JzQXJyOiBBcnJheTxudW1iZXJbXT4gPSBuZXcgQXJyYXkoY291bnQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb2xvcnNBcnJbaV0gPSBCYXNlQ2hhcnREaXJlY3RpdmUuZGVmYXVsdENvbG9yc1tpXSB8fCBnZXRSYW5kb21Db2xvcigpO1xuICB9XG4gIHJldHVybiBjb2xvcnNBcnI7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGJ5IGNoYXJ0IHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0Q29sb3JzKGNoYXJ0VHlwZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogYW55IHtcbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BpZScgfHwgY2hhcnRUeXBlID09PSAnZG91Z2hudXQnKSB7XG4gICAgcmV0dXJuIGZvcm1hdFBpZUNvbG9ycyhnZW5lcmF0ZUNvbG9ycyhjb3VudCkpO1xuICB9XG5cbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BvbGFyQXJlYScpIHtcbiAgICByZXR1cm4gZm9ybWF0UG9sYXJBcmVhQ29sb3JzKGdlbmVyYXRlQ29sb3JzKGNvdW50KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAnbGluZScgfHwgY2hhcnRUeXBlID09PSAncmFkYXInKSB7XG4gICAgcmV0dXJuIGZvcm1hdExpbmVDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAnYmFyJyB8fCBjaGFydFR5cGUgPT09ICdob3Jpem9udGFsQmFyJykge1xuICAgIHJldHVybiBmb3JtYXRCYXJDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XG4gIH1cbiAgcmV0dXJuIGdlbmVyYXRlQ29sb3IoaW5kZXgpO1xufVxuIl19