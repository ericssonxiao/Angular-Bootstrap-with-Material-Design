import { setStyles } from './setStyles';
import { getOffsets } from './getOffsets';
export function setAllStyles(data, renderer) {
    var target = data.instance.target;
    var offsets = getOffsets(data);
    setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    if (data.placementAuto) {
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement));
            renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement));
            renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, "s" + data.placement));
            if (target.className.match(/popover/g)) {
                renderer.addClass(target, 'popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                renderer.addClass(target, 'tooltip-auto');
            }
        }
        else {
            target.className = target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement);
            target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement);
            target.className = target.className.replace(/\sauto/g, "s" + data.placement);
            if (target.className.match(/popover/g)) {
                target.classList.add('popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                target.classList.add('tooltip-auto');
            }
        }
    }
    if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, "" + data.placement.split(' ')[0]));
    }
    else {
        target.className = target.className.replace(/left|right|top|bottom/g, "" + data.placement.split(' ')[0]);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0QWxsU3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9zZXRBbGxTdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBVSxFQUFFLFFBQW9CO0lBQzNELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBRXBDLElBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ2hCLGFBQWEsRUFBRSxXQUFXO1FBQzFCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsaUJBQWUsT0FBTyxDQUFDLElBQUksWUFBTyxPQUFPLENBQUMsR0FBRyxhQUFVO0tBQ25FLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RDtJQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUN0QixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUM3RSxDQUFDO1lBQ0YsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxnQkFBYyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQzdFLENBQUM7WUFFRixRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFLLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FDM0QsQ0FBQztZQUVGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDM0M7U0FHRjthQUFNO1lBQ0wsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxnQkFBYyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7WUFDaEcsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxnQkFBYyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7WUFDaEcsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBSyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7WUFFOUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN0QztTQUNGO0tBQ0Y7SUFFRCxJQUFJLFFBQVEsRUFBRTtRQUNaLFFBQVEsQ0FBQyxZQUFZLENBQ25CLE1BQU0sRUFDTixPQUFPLEVBQ1AsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUN0RixDQUFDO0tBQ0g7U0FBTTtRQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0tBQzFHO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IHNldFN0eWxlcyB9IGZyb20gJy4vc2V0U3R5bGVzJztcbmltcG9ydCB7IGdldE9mZnNldHMgfSBmcm9tICcuL2dldE9mZnNldHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWxsU3R5bGVzKGRhdGE6IERhdGEsIHJlbmRlcmVyPzogUmVuZGVyZXIyKTogdm9pZCB7XG4gIGNvbnN0IHRhcmdldCA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0O1xuXG4gIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRzKGRhdGEpO1xuXG4gIHNldFN0eWxlcyh0YXJnZXQsIHtcbiAgICAnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7b2Zmc2V0cy5sZWZ0fXB4LCAke29mZnNldHMudG9wfXB4LCAwcHgpYFxuICB9LCByZW5kZXJlcik7XG5cbiAgaWYgKGRhdGEuaW5zdGFuY2UuYXJyb3cpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5hcnJvdywgZGF0YS5vZmZzZXRzLmFycm93LCByZW5kZXJlcik7XG4gIH1cblxuICBpZiAoZGF0YS5wbGFjZW1lbnRBdXRvKSB7XG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXBvcG92ZXItYXV0by9nLCBgYnMtcG9wb3Zlci0ke2RhdGEucGxhY2VtZW50fWApXG4gICAgICApO1xuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcbiAgICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy10b29sdGlwLWF1dG8vZywgYGJzLXRvb2x0aXAtJHtkYXRhLnBsYWNlbWVudH1gKVxuICAgICAgKTtcblxuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcbiAgICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9cXHNhdXRvL2csIGBcXHMke2RhdGEucGxhY2VtZW50fWApXG4gICAgICApO1xuXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvcG9wb3Zlci9nKSkge1xuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsICdwb3BvdmVyLWF1dG8nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3Rvb2x0aXAvZykpIHtcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCAndG9vbHRpcC1hdXRvJyk7XG4gICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy1wb3BvdmVyLWF1dG8vZywgYGJzLXBvcG92ZXItJHtkYXRhLnBsYWNlbWVudH1gKTtcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXRvb2x0aXAtYXV0by9nLCBgYnMtdG9vbHRpcC0ke2RhdGEucGxhY2VtZW50fWApO1xuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvXFxzYXV0by9nLCBgXFxzJHtkYXRhLnBsYWNlbWVudH1gKTtcblxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3BvcG92ZXIvZykpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItYXV0bycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvdG9vbHRpcC9nKSkge1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9vbHRpcC1hdXRvJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlbmRlcmVyKSB7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGFyZ2V0LFxuICAgICAgJ2NsYXNzJyxcbiAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvbGVmdHxyaWdodHx0b3B8Ym90dG9tL2csIGAke2RhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF19YClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2xlZnR8cmlnaHR8dG9wfGJvdHRvbS9nLCBgJHtkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdfWApO1xuICB9XG59XG4iXX0=