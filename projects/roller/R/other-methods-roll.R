#################################################
#' @title Extraction method
#' @description extract value of given roll
#' @param x list of class rolls
#' @param i integer
#' @return value of a particular roll
#' @export



'[.rolls' = function(x, i) {
  x$rolls[i]
}

#################################################
#' @title Replacement method
#' @description replace value of given roll with another value
#' @param x list of class rolls
#' @param i integer
#' @param value new value of
#' @return replaces the value of vector, at a particular index
#' @export

'[<-.rolls' = function(x,i,value) {
  if (value %in% x$sides == FALSE ) {
    stop("value must be one of the sides of the device")
  }

  if (i > x$total) {
    stop("cannot be more than times the device is rolled")
  }

  x$rolls[i] = value
  return(x)
}



#################################################
#' @title add method
#' @description adds certain number of rolls according to
#' user input
#' @param x list of class rolls
#' @param y integer for additional number of rolls
#' @return adds more rolls
#' @export

"+.rolls" = function(x, y) {

  #ensure y is a valid number to be added

  if (y <= 0 | length(y) >1 | (is.numeric(y) == FALSE )) {
    stop("additional rolls must be a single integer greater than or equal to 1")
  }

  new_rolls = roll (device = device(x$sides, x$prob),
                    times = y)

  #append new rolls to original rolls
  x$rolls = append(x$rolls, new_rolls$rolls)
  return(x)

}










