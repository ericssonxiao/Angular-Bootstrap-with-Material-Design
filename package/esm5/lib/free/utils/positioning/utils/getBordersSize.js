/**
 * Helper to detect borders of a given element
 */
export function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles["border" + sideA + "Width"]) +
        parseFloat(styles["border" + sideB + "Width"]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm9yZGVyc1NpemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldEJvcmRlcnNTaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUEyQixFQUFFLElBQVk7SUFDdEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsSUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFcEQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBUyxLQUFLLFVBQWMsQ0FBQyxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBUyxLQUFLLFVBQWMsQ0FBQyxDQUFDLENBQ2pELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgYXhpczogc3RyaW5nKSB7XG4gIGNvbnN0IHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYCBhcyBhbnldKSArXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUJ9V2lkdGhgIGFzIGFueV0pXG4gICk7XG59XG4iXX0=