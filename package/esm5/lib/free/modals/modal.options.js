import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions = __decorate([
        Injectable()
    ], ModalOptions);
    return ModalOptions;
}());
export { ModalOptions };
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    MDBModalRef.prototype.hide = function () { };
    MDBModalRef = __decorate([
        Injectable()
    ], MDBModalRef);
    return MDBModalRef;
}());
export { MDBModalRef };
var ɵ0 = {};
export var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: ɵ0,
};
export var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show',
};
export var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed',
};
export var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150,
};
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbW9kYWxzL21vZGFsLm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBQTtJQThCQSxDQUFDO0lBOUJZLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWSxDQThCeEI7SUFBRCxtQkFBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLFlBQVk7QUFpQ3pCO0lBQUE7SUFTQSxDQUFDO0lBSkM7O09BRUc7SUFDSCwwQkFBSSxHQUFKLGNBQWMsQ0FBQztJQVJKLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVyxDQVN2QjtJQUFELGtCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksV0FBVztTQXFCaEIsRUFBRTtBQVZWLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFpQjtJQUMvQyxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsS0FBSyxFQUFFLEVBQUU7SUFDVCxjQUFjLEVBQUUsRUFBRTtJQUNsQixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxJQUFJO0NBQ1QsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBUTtJQUM1QixrQkFBa0IsRUFBRSx5QkFBeUI7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFRO0lBQzNCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBUTtJQUN0QyxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRztJQUM3QixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0NBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LCBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnIHwgYW55O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICBmb2N1cz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xuICAgKi9cbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXG4gICAqL1xuICBjb250YWluZXJDbGFzcz86IHN0cmluZztcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICBzY3JvbGw/OiBib29sZWFuO1xuICBkYXRhPzogT2JqZWN0O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTURCTW9kYWxSZWYge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIGEgY29tcG9uZW50IGluc2lkZSB0aGUgbW9kYWwuIE51bGwgaWYgbW9kYWwncyBiZWVuIGNyZWF0ZWQgd2l0aCBUZW1wbGF0ZVJlZlxuICAgKi9cbiAgY29udGVudD86IGFueSB8IG51bGw7XG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgbW9kYWxcbiAgICovXG4gIGhpZGUoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBzaG93OiBmYWxzZSxcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gIGNsYXNzOiAnJyxcbiAgY29udGFpbmVyQ2xhc3M6ICcnLFxuICBhbmltYXRlZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZSxcbiAgZGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3QgQ2xhc3NOYW1lOiBhbnkgPSB7XG4gIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgRkFERTogJ2ZhZGUnLFxuICBJTjogJ2luJywgLy8gYnMzXG4gIFNIT1c6ICdzaG93JywgLy8gYnM0XG59O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0b3I6IGFueSA9IHtcbiAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25EdXJhdGlvbnM6IGFueSA9IHtcbiAgTU9EQUw6IDMwMCxcbiAgQkFDS0RST1A6IDE1MCxcbn07XG5cbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlMgPSB7XG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxuICBFU0M6ICdlc2MnLFxufTtcbiJdfQ==