import { __decorate, __metadata, __values } from "tslib";
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    MdbTableDirective.prototype.addRow = function (newRow) {
        this.getDataSource().push(newRow);
    };
    MdbTableDirective.prototype.addRowAfter = function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    MdbTableDirective.prototype.removeRow = function (index) {
        this.getDataSource().splice(index, 1);
    };
    MdbTableDirective.prototype.rowRemoved = function () {
        var rowRemoved = new Observable(function (observer) {
            observer.next(true);
        });
        return rowRemoved;
    };
    MdbTableDirective.prototype.removeLastRow = function () {
        this.getDataSource().pop();
    };
    MdbTableDirective.prototype.getDataSource = function () {
        return this._dataSource;
    };
    MdbTableDirective.prototype.setDataSource = function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    MdbTableDirective.prototype.dataSourceChange = function () {
        return this._dataSourceChanged;
    };
    MdbTableDirective.prototype.filterLocalDataBy = function (searchKey) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    };
    MdbTableDirective.prototype.filterLocalDataByFields = function (searchKey, keys) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (obj[key]) {
                    if (keys.includes(key)) {
                        if (obj[key].toLowerCase().includes(searchKey)) {
                            return obj[key];
                        }
                    }
                }
            });
        });
    };
    MdbTableDirective.prototype.filterLocalDataByMultipleFields = function (searchKey, keys) {
        var items = searchKey.split(' ').map(function (x) { return x.toLowerCase(); });
        return this.getDataSource().filter(function (x) {
            var e_1, _a;
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    var flag = false;
                    if (keys !== undefined) {
                        for (var prop in x) {
                            if (x[prop]) {
                                if (keys.includes(prop)) {
                                    if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                        flag = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (keys === undefined) {
                        for (var prop in x) {
                            if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                flag = true;
                                break;
                            }
                        }
                    }
                    if (!flag) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        });
    };
    MdbTableDirective.prototype.searchLocalDataBy = function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableDirective.prototype.searchLocalDataByFields = function (searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableDirective.prototype.searchLocalDataByMultipleFields = function (searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys !== undefined) {
            return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
        }
    };
    MdbTableDirective.prototype.searchDataObservable = function (searchKey) {
        var _this = this;
        var observable = new Observable(function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        });
        return observable;
    };
    MdbTableDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
    };
    MdbTableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            var tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach(function (child) {
                _this.renderer.addClass(child, 'sticky-top');
                if (_this.stickyHeaderBgColor) {
                    _this.renderer.setStyle(child, 'background-color', _this.stickyHeaderBgColor);
                }
                else {
                    _this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (_this.stickyHeaderTextColor) {
                    _this.renderer.setStyle(child, 'color', _this.stickyHeaderTextColor);
                }
                else {
                    _this.renderer.setStyle(child, 'color', '#000000');
                }
            });
        }
    };
    MdbTableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        HostBinding('class.table-striped'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "striped", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-bordered'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "bordered", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-borderless'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "borderless", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-hover'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "hover", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-sm'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "small", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-responsive'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "responsive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeaderBgColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeaderTextColor", void 0);
    MdbTableDirective = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[mdbTable]',
            exportAs: 'mdbTable',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None,
            styles: ["table th{font-size:.9rem;font-weight:400}table td{font-size:.9rem;font-weight:300}table.table thead th{border-top:none}table.table td,table.table th{padding-top:1.1rem;padding-bottom:1rem}table.table .label-table{margin:0;padding:0;line-height:.94rem;height:.94rem}table.table.btn-table td{vertical-align:middle}table.table-hover tbody tr:hover{-webkit-transition:.5s;transition:.5s;background-color:rgba(0,0,0,.075)}table .th-lg{min-width:9rem}table .th-sm{min-width:6rem}table.table-sm td,table.table-sm th{padding-top:.6rem;padding-bottom:.6rem}.table-scroll-vertical{max-height:300px;overflow-y:auto}.table-fixed{table-layout:fixed}.table-responsive-lg>.table-bordered,.table-responsive-md>.table-bordered,.table-responsive-sm>.table-bordered,.table-responsive-xl>.table-bordered,.table-responsive>.table-bordered{border-top:1px solid #dee2e6}"]
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbTableDirective);
    return MdbTableDirective;
}());
export { MdbTableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFXM0M7SUE2QkUsMkJBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUp0RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBSTVCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSEksQ0FBQztJQUtuRSxrQ0FBTSxHQUFOLFVBQU8sTUFBVztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksS0FBYSxFQUFFLEdBQVE7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxD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QUFSLEtBQUssRUFBRTs7a0VBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOztvRUFBNEI7SUEzQnpCLGlCQUFpQjtRQVQ3QixTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLDJCQUEyQjtZQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQztRQUNGLGtEQUFrRDs7eUNBOEJ4QixVQUFVLEVBQW9CLFNBQVM7T0E3QnBELGlCQUFpQixDQStMN0I7SUFBRCx3QkFBQztDQUFBLEFBL0xELElBK0xDO1NBL0xZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJUYWJsZV0nLFxuICBleHBvcnRBczogJ21kYlRhYmxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vLi4vdGFibGVzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc3RyaXBlZCcpXG4gIHN0cmlwZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ib3JkZXJlZCcpXG4gIGJvcmRlcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYm9yZGVybGVzcycpXG4gIGJvcmRlcmxlc3M6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ob3ZlcicpXG4gIGhvdmVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc20nKVxuICBzbWFsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXJlc3BvbnNpdmUnKVxuICByZXNwb25zaXZlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJCZ0NvbG9yID0gJyc7XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlclRleHRDb2xvciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIF9kYXRhU291cmNlOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBhZGRSb3cobmV3Um93OiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5wdXNoKG5ld1Jvdyk7XG4gIH1cblxuICBhZGRSb3dBZnRlcihpbmRleDogbnVtYmVyLCByb3c6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnNwbGljZShpbmRleCwgMCwgcm93KTtcbiAgfVxuXG4gIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJvd1JlbW92ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3Qgcm93UmVtb3ZlZCA9IG5ldyBPYnNlcnZhYmxlPGJvb2xlYW4+KChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByb3dSZW1vdmVkO1xuICB9XG5cbiAgcmVtb3ZlTGFzdFJvdygpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5wb3AoKTtcbiAgfVxuXG4gIGdldERhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cblxuICBzZXREYXRhU291cmNlKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhO1xuICAgIHRoaXMuX2RhdGFTb3VyY2VDaGFuZ2VkLm5leHQodGhpcy5nZXREYXRhU291cmNlKCkpO1xuICB9XG5cbiAgZGF0YVNvdXJjZUNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZDtcbiAgfVxuXG4gIGZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigob2JqOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb21lKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICAvLyBGaXgodGFibGVTZWFyY2gpOiB0YWJsZSBzZWFyY2ggd2lsbCBub3cgYWJsZSB0byBmaWx0ZXIgdGhyb3VnaCBuZXN0ZWQgZGF0YVxuXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoS2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigob2JqOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb21lKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBpZiAob2JqW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZpbHRlckxvY2FsRGF0YUJ5TXVsdGlwbGVGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGl0ZW1zID0gc2VhcmNoS2V5LnNwbGl0KCcgJykubWFwKCh4OiB7IHRvTG93ZXJDYXNlOiAoKSA9PiB2b2lkIH0pID0+IHgudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigoeDogQXJyYXk8YW55PikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB4KSB7XG4gICAgICAgICAgICBpZiAoeFtwcm9wXSkge1xuICAgICAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmICh4W3Byb3BdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpdGVtKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4geCkge1xuICAgICAgICAgICAgaWYgKHhbcHJvcF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGl0ZW0pICE9PSAtMSkge1xuICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgc2VhcmNoTG9jYWxEYXRhQnkoc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXk6IHN0cmluZywga2V5czogc3RyaW5nW10pIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSwga2V5cyk7XG4gICAgfVxuICAgIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuICBzZWFyY2hMb2NhbERhdGFCeU11bHRpcGxlRmllbGRzKHNlYXJjaEtleTogc3RyaW5nLCBrZXlzPzogc3RyaW5nW10pIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoS2V5ICYmIGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnlNdWx0aXBsZUZpZWxkcyhzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSwga2V5cyk7XG4gICAgfVxuICB9XG4gIHNlYXJjaERhdGFPYnNlcnZhYmxlKHNlYXJjaEtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5zZWFyY2hMb2NhbERhdGFCeShzZWFyY2hLZXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGFibGUnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGaXgoc3RpY2t5SGVhZGVyKTogcmVzb2x2ZWQgcHJvYmxlbSB3aXRoIG5vdCB3b3JraW5nIHN0aWNreUhlYWRlcj1cInRydWVcIiBvbiBDaHJvbWVcbiAgICBpZiAodGhpcy5zdGlja3lIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHRhYmxlSGVhZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0aGVhZCcpO1xuXG4gICAgICBBcnJheS5mcm9tKHRhYmxlSGVhZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNoaWxkLCAnc3RpY2t5LXRvcCcpO1xuICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJCZ0NvbG9yKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLnN0aWNreUhlYWRlckJnQ29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmMmYyZjInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJUZXh0Q29sb3IpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnY29sb3InLCB0aGlzLnN0aWNreUhlYWRlclRleHRDb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2NvbG9yJywgJyMwMDAwMDAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=