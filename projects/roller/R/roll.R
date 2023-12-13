#################################################
#Title: Roll
#Code: Creates object 'rolls'
#Author: Horton Papa
#################################################

#################################################
#' @title Check_Times
#' @description aux function: checks validity of 'times' argument in roll()
#' @param times an integer
#' @return error message if not valid per condition
#' @export


check_times = function(times) {
  if(times < 1 | times < 0 | (times %% 1 != 0)){
    stop("times must be a positive integer greater than or equal to 1")
  }


}

#################################################
#' @title Roll Function
#' @description Rolls an object. By default, the number of rolls is 1
#' @param device object of class device
#' @param times integer
#' @return prints the class name and the number result of rolls
#' @export
#' @examples
#'
#' #create a fair coin
#' fair_coin = device(c("heads", "tails"), c(0.5, 0.5))
#'
#' #use roll to simulate a coin toss
#' roll(fair_coin)
#'
#' #toss same coin 15 times
#' roll(fair_coin, times = 15)


roll = function (device, times = 1) {

  check_times(times)

  if(class(device) != 'device') {
    stop('device argument is not of class "device"')
  }

  rolls = sample(device$sides,
                 size = times,
                 replace = TRUE,
                 prob = device$prob)

  output = list(
    rolls = rolls,
    sides = device$sides,
    prob = device$prob,
    total = times

  )
  class(output) = "rolls"
  return(output)
}

#################################################
#' @title Print method for class 'rolls'
#' @export


print.rolls = function(x) {
  cat('object "rolls"\n\n')
  rolls_list = list(
    rolls = x$rolls
  )

  print(rolls_list)
  invisible(x)

}


#################################################
#' @title Summary method for class Roll
#' @description Creates Summary for Roll Function
#' @param  x of class 'rolls'
#' @return object(list) with summary for rolls()
#' @export

summary.rolls = function(x) {

  count_vec = c()

  for(i in 1:length(x$sides)) {
        count_vec[i] = length(x$rolls[x$rolls == (x$sides[i])])
      }


  df <- data.frame(
    sides = x$sides,
    count = count_vec,
    prop = count_vec / x$total

    )

  output <- list(freqs = df)
  class(output) = "summary.rolls"
  return(output)


}

#################################################
#' @title Print method for class 'summary.roll'
#' @export


print.summary.rolls = function(x) {
  cat('summary "rolls"\n\n')

  print(x$freqs)
  invisible(x)
}






