import { __decorate, __metadata } from "tslib";
import { NavbarService } from './navbar.service';
import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output, Renderer2, } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService, renderer) {
        this._navbarService = _navbarService;
        this.renderer = renderer;
        this.linkClick = new EventEmitter();
    }
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.links.forEach(function (link) {
                _this.renderer.listen(link.nativeElement, 'click', function () {
                    _this._navbarService.setNavbarLinkClicks();
                });
            });
        }, 0);
    };
    NavlinksComponent.ctorParameters = function () { return [
        { type: NavbarService },
        { type: Renderer2 }
    ]; };
    __decorate([
        ContentChildren(RouterLinkWithHref, { read: ElementRef, descendants: true }),
        __metadata("design:type", QueryList)
    ], NavlinksComponent.prototype, "links", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavlinksComponent.prototype, "linkClick", void 0);
    NavlinksComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'navlinks',
            template: "\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [NavbarService, Renderer2])
    ], NavlinksComponent);
    return NavlinksComponent;
}());
export { NavlinksComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2bGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9uYXZiYXJzL25hdmxpbmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBU3JEO0lBTUUsMkJBQW9CLGNBQTZCLEVBQVUsUUFBbUI7UUFBMUQsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRnBFLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW1DLENBQUM7SUFFbEYsOENBQWtCLEdBQWxCO1FBQUEsaUJBUUM7UUFQQyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQTZCO2dCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRTtvQkFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBVm1DLGFBQWE7Z0JBQW9CLFNBQVM7O0lBSjlFO1FBREMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQ3RFLFNBQVM7b0RBQWE7SUFFbkI7UUFBVCxNQUFNLEVBQUU7O3dEQUFxQztJQUpuQyxpQkFBaUI7UUFQN0IsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxxQ0FFVDtTQUNGLENBQUM7eUNBT29DLGFBQWEsRUFBb0IsU0FBUztPQU5uRSxpQkFBaUIsQ0FpQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgUXVlcnlMaXN0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmF2bGlua3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2bGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgcmVhZDogRWxlbWVudFJlZiwgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlua3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubGlua3MuZm9yRWFjaCgobGluazogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4obGluay5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbmF2YmFyU2VydmljZS5zZXROYXZiYXJMaW5rQ2xpY2tzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==