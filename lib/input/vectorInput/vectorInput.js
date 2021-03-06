// Generated by CoffeeScript 1.6.3
(function() {
  var VectorInputer;

  VectorInputer = (function() {
    function VectorInputer(svg) {
      var _this = this;
      this.svg = svg;
      this.xPos = this.svg.attr('x');
      this.yPos = this.svg.attr('y');
      this.box = this.svg.append('rect').attr('width', '100%').attr('height', '100%').attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', '1px');
      this.scaleX = d3.scale.linear().domain([-this.svg.attr('width') / 2, this.svg.attr('width') / 2]).range([-this.svg.attr('width') / 2, this.svg.attr('width') / 2]);
      this.scaleY = d3.scale.linear().domain([-this.svg.attr('height') / 2, this.svg.attr('height') / 2]).range([this.svg.attr('height') / 2, -this.svg.attr('height') / 2]);
      this.origin = [this.svg.attr('width') / 2, this.svg.attr('height') / 2];
      this.label = this.svg.append('text').attr('x', 6).attr('y', 11);
      this.axes = [];
      this.axes[0] = this.svg.append('line').attr('x1', 0).attr('y1', this.origin[1]).attr('x2', this.svg.attr('width')).attr('y2', this.origin[1]).attr('stroke', 'black');
      this.axes[1] = this.svg.append('line').attr('x1', this.origin[0]).attr('y1', 0).attr('x2', this.origin[0]).attr('y2', this.svg.attr('width')).attr('stroke', 'black');
      this.line = this.svg.append('line');
      this.svgpoint = this.svg.append('circle').attr('r', 0);
      this.point = [];
      $('#' + this.svg.attr('id')).mousedown(function(e) {
        var x, y;
        x = e.pageX - _this.xPos;
        y = e.pageY - _this.yPos;
        _this.point = [x - _this.origin[0], _this.origin[1] - y];
        _this.line.remove();
        _this.svgpoint.remove();
        _this.svgpoint = _this.svg.append('circle').attr('r', 4).attr('cx', x).attr('cy', y).attr('fill', 'black');
        return _this.line = _this.svg.append('line').attr('x1', _this.origin[0]).attr('y1', _this.origin[1]).attr('x2', x).attr('y2', y).attr('stroke', 'red');
      });
    }

    VectorInputer.prototype.drawLabel = function(x) {
      return this.label.text(x);
    };

    VectorInputer.prototype.setScaleX = function(toSet) {
      return this.scaleX.range(toSet);
    };

    VectorInputer.prototype.setScaleY = function(toSet) {
      return this.scaleY.range(toSet);
    };

    VectorInputer.prototype.getMostRecentPointAsVector = function() {
      if (this.point.length !== 0) {
        return new Vector(this.scaleX(this.point[0]), this.scaleY(this.point[1]));
      } else {
        return new Vector(0, 0);
      }
    };

    return VectorInputer;

  })();

  this.VectorInputer = VectorInputer;

}).call(this);
