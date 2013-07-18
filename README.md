# Physics Simulation

## basics
  * written in d3
  * uses svg
  * vector based

## classes written
### Vector
   * provides basic functions for vectors
   * mult
     * by scalar
     * returns new Vector which is this multiplied by scalar
     * does not modify this scalar
   * divide
     * works exactly like mult, but divides
   * add
     * adds a second vector to this vector
     * returns new Vector
     * does not modify either vector
   * subtract
     * works exactly like add, but subtracts
   * mag
     * returns the magnitude of the vector
   * setMag
     * returns a new vector with the magnitude of the  given value
     * returns new Vector
   * normalize
     * returns new Vector
     * mag of 1
     * same angle
   * clone
     * returns new Vector which is exactly like this one
   * heading
     * should return the heading
   * limit
     * if the mag is over the limit, it returns a new Vector with limit as its magnitude, 
     * else it returns a clone of this vector
     
### Collider
   * provides some basic collision
   * can detect the collision of a circle and a line
   * circleAndHorizontalLine
   	 * returns true if the circle and horizontal line are colliding
   	 
### Grapher
   * provides basix graphing capability
   * accepts an svg in constructor
     * draws in that svg
   * drawVector
     * draws a vector in a cartesian coordinate system
   * drawSingleBar (height)
     * draws a bar in the graph, bottom left of bar at 0,0 in plane

### Mover 
    * moves in a plane
    * can bounce off 1 horizontal line
    * bounces off edges
    * uses vectors as forces
    * constructor
      * @svg: what to draw in
      * @x: initial x position
      * @y: initial y position
      * @g:  grapher used to draw magnitude of vector
        * if null, doesn't draw bar graph
      * @g2:  grapher used to draw vector
        * if null, doesn't draw vector
    * 
