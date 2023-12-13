#################################################
#' @title Plot of object rolls
#' @description Plots the relative frequencies of rolls
#' @param x an object of class \code{"rolls"}
#' @param \dots arguments to be passed to/from other methods
#' @export



plot.rolls = function(x,...) {
  list = summary(x)


  barplot(list$freqs$prop,
          names.arg = list$freqs$sides,
          border = NA,
          xlab = 'sides of device',
          ylab = 'relative frequencies',
          main = paste("Relative Frequencies in a series of", x$total, "rolls"),
          las = 1)
  }
