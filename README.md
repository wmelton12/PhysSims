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
        * if the mag is over the limit, it returns a new Vector with limit as
          its magnitude, 
        * else it returns a clone of this vector

        
