import { __decorate, __metadata } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config, elem) {
        this.elem = elem;
        this.containerClass = '';
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "tooltipClasses", {
        get: function () {
            return "tooltip-fadeIn tooltip in tooltip-" + this.placement + " bs-tooltip-" + this.placement + " " + this.placement + " " + this.containerClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig },
        { type: ElementRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TooltipContainerComponent.prototype, "containerClass", void 0);
    __decorate([
        ViewChild('tooltipInner', { static: true }),
        __metadata("design:type", ElementRef)
    ], TooltipContainerComponent.prototype, "tooltipInner", void 0);
    __decorate([
        ViewChild('tooltipArrow', { static: true }),
        __metadata("design:type", ElementRef)
    ], TooltipContainerComponent.prototype, "tooltipArrow", void 0);
    __decorate([
        HostBinding('class.show'),
        __metadata("design:type", Object)
    ], TooltipContainerComponent.prototype, "show", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TooltipContainerComponent.prototype, "tooltipClasses", null);
    TooltipContainerComponent = __decorate([
        Component({
            selector: 'mdb-tooltip-container',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div #tooltipArrow class=\"tooltip-arrow arrow\"></div>\n    <div #tooltipInner class=\"tooltip-inner\">\n      <ng-content></ng-content>\n    </div>\n  ",
            encapsulation: ViewEncapsulation.None,
            styles: ["a .tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}a .tooltip.show{opacity:.9}a .tooltip.bs-tether-element-attached-bottom,a .tooltip.tooltip-top{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,a .tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-.8rem;content:\"\";border-width:.8rem .8rem 0}a .tooltip.bs-tether-element-attached-left,a .tooltip.tooltip-right{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-left .tooltip-inner::before,a .tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-.8rem;content:\"\";border-width:.8rem .8rem .8rem 0}a .tooltip.bs-tether-element-attached-top,a .tooltip.tooltip-bottom{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-top .tooltip-inner::before,a .tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-.8rem;content:\"\";border-width:0 .8rem .8rem}a .tooltip.bs-tether-element-attached-right,a .tooltip.tooltip-left{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-right .tooltip-inner::before,a .tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-.8rem;content:\"\";border-width:.8rem 0 .8rem .8rem}.tooltip-inner{max-width:200px;padding:.2rem .4rem;text-align:center;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}@-webkit-keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}@keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}.tooltip-fadeIn{-webkit-animation-name:fadeInTooltip;animation-name:fadeInTooltip;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.single-tooltip{padding:.75rem 0 0}.single-tooltip a{padding:0!important}a[tooltip]{margin-left:0!important;padding:0 .5rem}.tooltip-arrow.left{position:relative;margin-right:-.6rem;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tooltip-arrow.right{position:relative;margin-left:-.6rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tooltip-arrow.top{position:relative;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tooltip-top{padding:.4rem 0}.tooltip-top .arrow{bottom:0}.tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tooltip-right{padding:0 .4rem}.tooltip-right .arrow{left:0}.tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-bottom{padding:.4rem 0}.tooltip-bottom .arrow{top:0}.tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tooltip-left{padding:0 .4rem}.tooltip-left .arrow{right:0}.tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}"]
        }),
        __metadata("design:paramtypes", [TooltipConfig, ElementRef])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());
export { TooltipContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFjdEQ7SUFtQkUsbUNBQW1CLE1BQXFCLEVBQVMsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWJ4RCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUdGLFNBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFXNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVZELHNCQUFJLHFEQUFjO2FBQWxCO1lBQ0UsT0FBTyx1Q0FBcUMsSUFBSSxDQUFDLFNBQVMsb0JBQWUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxjQUFnQixDQUFDO1FBQ3JJLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNENBQUs7YUFBaEI7WUFDRSxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBTU0sbURBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBakIwQixhQUFhO2dCQUFlLFVBQVU7O0lBYnhEO1FBQVIsS0FBSyxFQUFFOztxRUFBcUI7SUFDZ0I7UUFBNUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBZSxVQUFVO21FQUFDO0lBQ3pCO1FBQTVDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWUsVUFBVTttRUFBQztJQUMzQztRQUExQixXQUFXLENBQUMsWUFBWSxDQUFDOzsyREFBb0I7SUFFOUM7UUFEQyxXQUFXLENBQUMsT0FBTyxDQUFDOzs7bUVBR3BCO0lBYlUseUJBQXlCO1FBWnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLGlLQUtUO1lBRUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7eUNBb0IyQixhQUFhLEVBQWUsVUFBVTtPQW5CdEQseUJBQXlCLENBcUNyQztJQUFELGdDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuc2VydmljZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRvb2x0aXAtY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjdG9vbHRpcEFycm93IGNsYXNzPVwidG9vbHRpcC1hcnJvdyBhcnJvd1wiPjwvZGl2PlxuICAgIDxkaXYgI3Rvb2x0aXBJbm5lciBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgY2xhc3NNYXA6IGFueTtcbiAgcHVibGljIHBsYWNlbWVudDogc3RyaW5nO1xuICBwdWJsaWMgcG9wdXBDbGFzczogc3RyaW5nO1xuICBwdWJsaWMgYW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBJbm5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHRvb2x0aXBJbm5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcEFycm93JywgeyBzdGF0aWM6IHRydWUgfSkgdG9vbHRpcEFycm93OiBFbGVtZW50UmVmO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKSBzaG93ID0gIXRoaXMuaXNCczM7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgdG9vbHRpcENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGB0b29sdGlwLWZhZGVJbiB0b29sdGlwIGluIHRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH0gYnMtdG9vbHRpcC0ke3RoaXMucGxhY2VtZW50fSAke3RoaXMucGxhY2VtZW50fSAke3RoaXMuY29udGFpbmVyQ2xhc3N9YDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBUb29sdGlwQ29uZmlnLCBwdWJsaWMgZWxlbTogRWxlbWVudFJlZikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgaW46IGZhbHNlLCBmYWRlOiBmYWxzZSB9O1xuICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5wbGFjZW1lbnRdID0gdHJ1ZTtcbiAgICB0aGlzLmNsYXNzTWFwWyd0b29sdGlwLScgKyB0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuXG4gICAgdGhpcy5jbGFzc01hcC5pbiA9IHRydWU7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwLmZhZGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvcHVwQ2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5wb3B1cENsYXNzXSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=