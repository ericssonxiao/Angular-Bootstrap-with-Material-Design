import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
var MdbCardComponent = /** @class */ (function () {
    function MdbCardComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardComponent.prototype, "narrower", {
        set: function (narrower) {
            if (narrower) {
                this._r.addClass(this._el.nativeElement, 'narrower');
            }
            else if (!narrower && this._el.nativeElement.classList.contains('narrower')) {
                this._r.removeClass(this._el.nativeElement, 'narrower');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "reverse", {
        set: function (reverse) {
            if (reverse) {
                this._r.addClass(this._el.nativeElement, 'reverse');
            }
            else if (!reverse && this._el.nativeElement.classList.contains('reserse')) {
                this._r.removeClass(this._el.nativeElement, 'reverse');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "dark", {
        set: function (dark) {
            if (dark) {
                this._r.addClass(this._el.nativeElement, 'card-dark');
            }
            else if (!dark && this._el.nativeElement.classList.contains('card-dark')) {
                this._r.removeClass(this._el.nativeElement, 'card-dark');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "bgColor", {
        set: function (color) {
            if (color) {
                this._r.addClass(this._el.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "borderColor", {
        set: function (color) {
            if (color) {
                this._r.addClass(this._el.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    MdbCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbCardComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MdbCardComponent.prototype, "cascade", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MdbCardComponent.prototype, "wider", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbCardComponent.prototype, "imageBackground", void 0);
    __decorate([
        ViewChild('card', { static: true }),
        __metadata("design:type", ElementRef)
    ], MdbCardComponent.prototype, "card", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbCardComponent.prototype, "narrower", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbCardComponent.prototype, "reverse", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbCardComponent.prototype, "dark", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MdbCardComponent.prototype, "bgColor", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MdbCardComponent.prototype, "borderColor", null);
    MdbCardComponent = __decorate([
        Component({
            selector: 'mdb-card',
            template: "<ng-content></ng-content>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: [".card{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0;font-weight:400}.card[class*=border]{border:1px solid #9e9e9e;box-shadow:none}.card .card-body h1,.card .card-body h2,.card .card-body h3,.card .card-body h4,.card .card-body h5,.card .card-body h6{font-weight:400}.card .card-body .card-title a,.card .card-body .card-title a:hover{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.card .card-body .card-text{color:#747373;font-size:.9rem;font-weight:400}.card .md-form label{font-weight:300}.card-text:last-child{margin-bottom:1rem!important}mdb-card-img img.img-fluid{width:100%}"]
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbCardComponent);
    return MdbCardComponent;
}());
export { MdbCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jYXJkcy9tZGItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBNENFLDBCQUFvQixHQUFlLEVBQVUsRUFBYTtRQUF0QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFHLENBQUM7SUFwQ3JELHNCQUFJLHNDQUFRO2FBQVosVUFBYSxRQUFpQjtZQUNyQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN0RDtpQkFBTSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQzs7O09BQUE7SUFFUSxzQkFBSSxxQ0FBTzthQUFYLFVBQVksT0FBZ0I7WUFDbkMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDckQ7aUJBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFB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O21EQUlQO0lBRVE7UUFBUixLQUFLLEVBQUU7Ozt1REFJUDtJQTFDVSxnQkFBZ0I7UUFQNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsdUNBQXdDO1lBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO3lDQTZDeUIsVUFBVSxFQUFjLFNBQVM7T0E1Qy9DLGdCQUFnQixDQStENUI7SUFBRCx1QkFBQztDQUFBLEFBL0RELElBK0RDO1NBL0RZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZHMtbW9kdWxlLnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjYXNjYWRlOiBib29sZWFuO1xuICBASW5wdXQoKSB3aWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgaW1hZ2VCYWNrZ3JvdW5kOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnY2FyZCcsIHsgc3RhdGljOiB0cnVlIH0pIGNhcmQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgc2V0IG5hcnJvd2VyKG5hcnJvd2VyOiBib29sZWFuKSB7XG4gICAgaWYgKG5hcnJvd2VyKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgIH0gZWxzZSBpZiAoIW5hcnJvd2VyICYmIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXJyb3dlcicpKSB7XG4gICAgICB0aGlzLl9yLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByZXZlcnNlKHJldmVyc2U6IGJvb2xlYW4pIHtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncmV2ZXJzZScpO1xuICAgIH0gZWxzZSBpZiAoIXJldmVyc2UgJiYgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc2Vyc2UnKSkge1xuICAgICAgdGhpcy5fci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncmV2ZXJzZScpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBkYXJrKGRhcms6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGFyaykge1xuICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1kYXJrJyk7XG4gICAgfSBlbHNlIGlmICghZGFyayAmJiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1kYXJrJykpIHtcbiAgICAgIHRoaXMuX3IucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtZGFyaycpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBiZ0NvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBib3JkZXJDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQnKTtcbiAgICBpZiAodGhpcy5jYXNjYWRlKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjYXJkLWNhc2NhZGUnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkZXIpIHtcbiAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3dpZGVyJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hcnJvd2VyKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jbGFzcykge1xuICAgICAgdGhpcy5jbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=