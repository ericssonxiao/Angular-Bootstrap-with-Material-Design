import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils/index';
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    let placement = data.placement.split(' ')[0];
    let variation = data.placement.split(' ')[1] || '';
    const offsetsHost = data.offsets.host;
    const target = data.instance.target;
    const host = data.instance.host;
    const adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    const flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        const overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        const overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        const overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        const overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        const overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    });
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2ZsaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsTUFBTSxVQUFVLElBQUksQ0FBQyxJQUFVO0lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXpELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxtQ0FDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FDbkIsZ0JBQWdCLENBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUNGLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ2xCLENBQUMsRUFBRSxVQUFVO0lBQ2IsVUFBVSxFQUNWLEtBQUssQ0FBQyxnQkFBZ0I7S0FDdkIsQ0FBQztJQUVGLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENB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QUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxtQ0FDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FDbkIsZ0JBQWdCLENBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXG4gIGdldEJvdW5kYXJpZXMsXG4gIGdldENsaWVudFJlY3QsXG4gIGdldE9wcG9zaXRlVmFyaWF0aW9uLFxuICBnZXRUYXJnZXRPZmZzZXRzLFxuICBpc01vZGlmaWVyRW5hYmxlZFxufSBmcm9tICcuLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxpcChkYXRhOiBEYXRhKTogRGF0YSB7XG4gIGRhdGEub2Zmc2V0cy50YXJnZXQgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy50YXJnZXQpO1xuXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAnZmxpcCcpKSB7XG5cbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgIC4uLmdldFRhcmdldE9mZnNldHMoXG4gICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcbiAgICAgICAgZGF0YS5wbGFjZW1lbnRcbiAgICAgIClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgICd2aWV3cG9ydCcsXG4gICAgZmFsc2UgLy8gcG9zaXRpb25GaXhlZFxuICApO1xuXG4gIGxldCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnJztcblxuICBjb25zdCBvZmZzZXRzSG9zdCA9IGRhdGEub2Zmc2V0cy5ob3N0O1xuICBjb25zdCB0YXJnZXQgPSBkYXRhLmluc3RhbmNlLnRhcmdldDtcbiAgY29uc3QgaG9zdCA9IGRhdGEuaW5zdGFuY2UuaG9zdDtcblxuICBjb25zdCBhZGFwdGl2ZVBvc2l0aW9uID0gdmFyaWF0aW9uXG4gICAgPyBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QsIFsndG9wJywgJ2JvdHRvbSddKVxuICAgIDogY29tcHV0ZUF1dG9QbGFjZW1lbnQoJ2F1dG8nLCBvZmZzZXRzSG9zdCwgdGFyZ2V0LCBob3N0KTtcblxuICBjb25zdCBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBhZGFwdGl2ZVBvc2l0aW9uXTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIGhvc3Qgb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnJpZ2h0KSA+IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QubGVmdCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmJvdHRvbSkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LnRvcCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQudG9wKSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QuYm90dG9tKSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1JpZ2h0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnJpZ2h0KSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9XG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAgJHt2YXJpYXRpb259YCA6ICcnKTtcblxuICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxuICAgICAgICApXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=