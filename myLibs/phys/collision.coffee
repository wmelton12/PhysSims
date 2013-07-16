class Collider
    constructor: ()->
   	circleAndHorizontalLine: (c, l) ->
   		x1 = l.attr('x1')
   		x2 = l.attr('x2')
   		y = l.attr('y1')
   		if y != l.attr('y2')
   			alert('invalid line')
   		if(x2 < x1)
   			temp = x1
   			x1 = x2
   			x2 = temp
   		cx = c.attr('cx')
   		cy = c.attr('cy')
   		r = c.attr('r')
   		top = cy - r
   		bottom = cy + r
   		leftMargin = cx - r
   		rightMargin = cx + r
   		if leftMargin < x2 && rightMargin > x1
   			return top < y < bottom
   			
    distance: (ax,ay,bx,yb) ->
        return Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(yb - ay, 2))
            
this.Collider = Collider