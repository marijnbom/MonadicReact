"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.none = function () {
    return {
        kind: "none",
        map: function (f) { return map(f)(this); }
    };
};
exports.some = function (x) {
    return {
        kind: "some", value: x,
        map: function (f) { return map(f)(this); }
    };
};
var map = function (f) { return function (x) { return x.kind == "none" ? exports.none() : exports.some(f(x.value)); }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlYWN0X21vbmFkL29wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdXLFFBQUEsSUFBSSxHQUFHO0lBQTRCLE1BQU0sQ0FBQztRQUNuRCxJQUFJLEVBQUMsTUFBTTtRQUNYLEdBQUcsRUFBQyxVQUE0QixDQUFVLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7S0FBRSxDQUFBO0FBQzNFLENBQUMsQ0FBQTtBQUNVLFFBQUEsSUFBSSxHQUFHLFVBQVksQ0FBRztJQUFnQixNQUFNLENBQUM7UUFDdEQsSUFBSSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUNwQixHQUFHLEVBQUMsVUFBNEIsQ0FBVSxJQUFHLE1BQU0sQ0FBQyxHQUFHLENBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDO0tBQUUsQ0FBQTtBQUFDLENBQUMsQ0FBQTtBQUU3RSxJQUFJLEdBQUcsR0FBRyxVQUFjLENBQVUsSUFBaUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLEdBQUcsWUFBSSxFQUFLLEdBQUcsWUFBSSxDQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQSxDQUFDLENBQUMsQ0FBQSJ9