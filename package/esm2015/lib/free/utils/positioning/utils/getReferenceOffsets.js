/**
 * Get offsets to the reference element
 */
import { findCommonOffsetParent } from './findCommonOffsetParent';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getFixedPositionOffsetParent } from './getFixedPositionOffsetParent';
export function getReferenceOffsets(target, host, fixedPosition = null) {
    const commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
    return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UmVmZXJlbmNlT2Zmc2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzlFLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsTUFBbUIsRUFDbkIsSUFBaUIsRUFDakIsZ0JBQXFCLElBQUk7SUFFekIsTUFBTSxrQkFBa0IsR0FBRyxhQUFhO1FBQ3RDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUM7UUFDdEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV6QyxPQUFPLG9DQUFvQyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN2RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqL1xuaW1wb3J0IHsgZmluZENvbW1vbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgeyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgaG9zdDogSFRNTEVsZW1lbnQsXG4gIGZpeGVkUG9zaXRpb246IGFueSA9IG51bGxcbik6IE9mZnNldHMge1xuICBjb25zdCBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uXG4gICAgPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHRhcmdldClcbiAgICA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQodGFyZ2V0LCBob3N0KTtcblxuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGhvc3QsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG4iXX0=