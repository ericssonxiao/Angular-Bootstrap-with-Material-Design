import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
let MdbTableDirective = 
// tslint:disable-next-line:component-class-suffix
class MdbTableDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    addRow(newRow) {
        this.getDataSource().push(newRow);
    }
    addRowAfter(index, row) {
        this.getDataSource().splice(index, 0, row);
    }
    removeRow(index) {
        this.getDataSource().splice(index, 1);
    }
    rowRemoved() {
        const rowRemoved = new Observable((observer) => {
            observer.next(true);
        });
        return rowRemoved;
    }
    removeLastRow() {
        this.getDataSource().pop();
    }
    getDataSource() {
        return this._dataSource;
    }
    setDataSource(data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    }
    dataSourceChange() {
        return this._dataSourceChanged;
    }
    filterLocalDataBy(searchKey) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    }
    filterLocalDataByFields(searchKey, keys) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    if (keys.includes(key)) {
                        if (obj[key].toLowerCase().includes(searchKey)) {
                            return obj[key];
                        }
                    }
                }
            });
        });
    }
    filterLocalDataByMultipleFields(searchKey, keys) {
        const items = searchKey.split(' ').map((x) => x.toLowerCase());
        return this.getDataSource().filter((x) => {
            for (const item of items) {
                let flag = false;
                if (keys !== undefined) {
                    for (const prop in x) {
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
                    for (const prop in x) {
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
            return true;
        });
    }
    searchLocalDataBy(searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchLocalDataByFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchLocalDataByMultipleFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys !== undefined) {
            return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
        }
    }
    searchDataObservable(searchKey) {
        const observable = new Observable((observer) => {
            observer.next(this.searchLocalDataBy(searchKey));
        });
        return observable;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'table');
    }
    ngAfterViewInit() {
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            const tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach((child) => {
                this.renderer.addClass(child, 'sticky-top');
                if (this.stickyHeaderBgColor) {
                    this.renderer.setStyle(child, 'background-color', this.stickyHeaderBgColor);
                }
                else {
                    this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (this.stickyHeaderTextColor) {
                    this.renderer.setStyle(child, 'color', this.stickyHeaderTextColor);
                }
                else {
                    this.renderer.setStyle(child, 'color', '#000000');
                }
            });
        }
    }
};
MdbTableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { MdbTableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFXM0MsSUFBYSxpQkFBaUI7QUFEOUIsa0RBQWtEO0FBQ2xELE1BQWEsaUJBQWlCO0lBNkI1QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdEQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUk1QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0Qix1QkFBa0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUhJLENBQUM7SUFLbkUsTUFBTSxDQUFDLE1BQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWEsRUFBRSxHQUFRO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVB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QnpCLGlCQUFpQjtJQVQ3QixTQUFTLENBQUM7UUFDVCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLDJCQUEyQjtRQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztJQUNGLGtEQUFrRDs7cUNBOEJ4QixVQUFVLEVBQW9CLFNBQVM7R0E3QnBELGlCQUFpQixDQStMN0I7U0EvTFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlXScsXG4gIGV4cG9ydEFzOiAnbWRiVGFibGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi8uLi90YWJsZXMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1zdHJpcGVkJylcbiAgc3RyaXBlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLWJvcmRlcmVkJylcbiAgYm9yZGVyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ib3JkZXJsZXNzJylcbiAgYm9yZGVybGVzczogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLWhvdmVyJylcbiAgaG92ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1zbScpXG4gIHNtYWxsOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtcmVzcG9uc2l2ZScpXG4gIHJlc3BvbnNpdmU6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgc3RpY2t5SGVhZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlckJnQ29sb3IgPSAnJztcbiAgQElucHV0KCkgc3RpY2t5SGVhZGVyVGV4dENvbG9yID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgX2RhdGFTb3VyY2U6IGFueSA9IFtdO1xuICBwcml2YXRlIF9kYXRhU291cmNlQ2hhbmdlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGFkZFJvdyhuZXdSb3c6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnB1c2gobmV3Um93KTtcbiAgfVxuXG4gIGFkZFJvd0FmdGVyKGluZGV4OiBudW1iZXIsIHJvdzogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkuc3BsaWNlKGluZGV4LCAwLCByb3cpO1xuICB9XG5cbiAgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcm93UmVtb3ZlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByb3dSZW1vdmVkID0gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvd1JlbW92ZWQ7XG4gIH1cblxuICByZW1vdmVMYXN0Um93KCkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnBvcCgpO1xuICB9XG5cbiAgZ2V0RGF0YVNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuXG4gIHNldERhdGFTb3VyY2UoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGE7XG4gICAgdGhpcy5fZGF0YVNvdXJjZUNoYW5nZWQubmV4dCh0aGlzLmdldERhdGFTb3VyY2UoKSk7XG4gIH1cblxuICBkYXRhU291cmNlQ2hhbmdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VDaGFuZ2VkO1xuICB9XG5cbiAgZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCkuZmlsdGVyKChvYmo6IEFycmF5PGFueT4pID0+IHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvbWUoKGtleTogYW55KSA9PiB7XG4gICAgICAgIGlmIChvYmpba2V5XSkge1xuICAgICAgICAgIC8vIEZpeCh0YWJsZVNlYXJjaCk6IHRhYmxlIHNlYXJjaCB3aWxsIG5vdyBhYmxlIHRvIGZpbHRlciB0aHJvdWdoIG5lc3RlZCBkYXRhXG5cbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hLZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXk6IHN0cmluZywga2V5czogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCkuZmlsdGVyKChvYmo6IEFycmF5PGFueT4pID0+IHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvbWUoKGtleTogYW55KSA9PiB7XG4gICAgICAgIGlmIChvYmpba2V5XSkge1xuICAgICAgICAgIGlmIChrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGlmIChvYmpba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZmlsdGVyTG9jYWxEYXRhQnlNdWx0aXBsZUZpZWxkcyhzZWFyY2hLZXk6IHN0cmluZywga2V5cz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgaXRlbXMgPSBzZWFyY2hLZXkuc3BsaXQoJyAnKS5tYXAoKHg6IHsgdG9Mb3dlckNhc2U6ICgpID0+IHZvaWQgfSkgPT4geC50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCkuZmlsdGVyKCh4OiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoa2V5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHgpIHtcbiAgICAgICAgICAgIGlmICh4W3Byb3BdKSB7XG4gICAgICAgICAgICAgIGlmIChrZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhbcHJvcF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGl0ZW0pICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB4KSB7XG4gICAgICAgICAgICBpZiAoeFtwcm9wXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaXRlbSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBzZWFyY2hMb2NhbERhdGFCeShzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIGlmICghc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaExvY2FsRGF0YUJ5RmllbGRzKHNlYXJjaEtleTogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSkge1xuICAgIGlmICghc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaEtleSAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5RmllbGRzKHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpLCBrZXlzKTtcbiAgICB9XG4gICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeShzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICB9XG4gIHNlYXJjaExvY2FsRGF0YUJ5TXVsdGlwbGVGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM/OiBzdHJpbmdbXSkge1xuICAgIGlmICghc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hLZXkgJiYga2V5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeU11bHRpcGxlRmllbGRzKHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpLCBrZXlzKTtcbiAgICB9XG4gIH1cbiAgc2VhcmNoRGF0YU9ic2VydmFibGUoc2VhcmNoS2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnNlYXJjaExvY2FsRGF0YUJ5KHNlYXJjaEtleSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0YWJsZScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEZpeChzdGlja3lIZWFkZXIpOiByZXNvbHZlZCBwcm9ibGVtIHdpdGggbm90IHdvcmtpbmcgc3RpY2t5SGVhZGVyPVwidHJ1ZVwiIG9uIENocm9tZVxuICAgIGlmICh0aGlzLnN0aWNreUhlYWRlcikge1xuICAgICAgY29uc3QgdGFibGVIZWFkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJyk7XG5cbiAgICAgIEFycmF5LmZyb20odGFibGVIZWFkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY2hpbGQsICdzdGlja3ktdG9wJyk7XG4gICAgICAgIGlmICh0aGlzLnN0aWNreUhlYWRlckJnQ29sb3IpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuc3RpY2t5SGVhZGVyQmdDb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2JhY2tncm91bmQtY29sb3InLCAnI2YyZjJmMicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0aWNreUhlYWRlclRleHRDb2xvcikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdjb2xvcicsIHRoaXMuc3RpY2t5SGVhZGVyVGV4dENvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnY29sb3InLCAnIzAwMDAwMCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==