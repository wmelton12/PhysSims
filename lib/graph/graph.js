// Generated by CoffeeScript 1.6.3
(function() {
  var Grapher;

  Grapher = (function() {
    function Grapher(svg) {
      var box;
      this.svg = svg;
      this.arrayOfThings = [];
      this.origin = [Math.round(this.svg.attr('width') / 2), Math.round(this.svg.attr('height') / 2)];
      box = this.svg.append('rect').attr('width', '100%').attr('height', '100%').attr('stroke', 'black').attr('stroke-width', '2px').attr('fill', 'none');
      this.axes = [];
      this.axes[0] = this.svg.append('line').attr('x1', 0).attr('y1', this.origin[1]).attr('x2', this.origin[0] * 2).attr('y2', this.origin[1]).attr('stroke', 'black').attr('stroke-width', '1px');
      this.axes[1] = this.svg.append('line').attr('x1', this.origin[0]).attr('y1', 0).attr('x2', this.origin[0]).attr('y2', this.origin[1] * 2).attr('stroke', 'black').attr('stroke-width', '1px');
    }

    Grapher.prototype.drawVector = function(vec) {
      var points, t, _i, _len, _ref;
      _ref = this.arrayOfThings;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        t = _ref[_i];
        t.remove();
      }
      this.arrayOfThings = [];
      points = [vec.getX() + this.origin[0], this.origin[1] - vec.getY()];
      return this.arrayOfThings[0] = this.svg.append('line').attr('x1', this.origin[0]).attr('y1', this.origin[1]).attr('x2', points[0]).attr('y2', points[1]).attr('stroke', 'red').attr('stroke-width', '2px');
    };

    Grapher.prototype.drawSingleBar = function(val) {
      var t, _i, _len, _ref;
      _ref = this.arrayOfThings;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        t = _ref[_i];
        t.remove();
      }
      this.arrayOfThings = [];
      return this.arrayOfThings[0] = this.svg.append('rect').attr('x', this.origin[0]).attr('y', this.origin[1] - val).attr('width', 10).attr('height', val);
    };

    Grapher.prototype.drawAXPlusB = function(vec) {
      var m, x1, x2, y1, y2;
      this.drawVector(vec);
      m = -(vec.x / vec.y);
      x1 = -this.origin[0];
      y1 = this.origin[1] - this.evalLin(m, 0, x1);
      x1 = 0;
      x2 = this.origin[0];
      y2 = this.origin[1] - this.evalLin(m, 0, x2);
      x2 = this.svg.attr('width');
      return this.arrayOfThings[1] = this.svg.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2).attr('stroke', 'green').attr('stroke-width', '2px');
    };

    Grapher.prototype.evalLin = function(m, d, x) {
      return m * x + d;
    };

    return Grapher;

  })();

  this.Grapher = Grapher;

}).call(this);
