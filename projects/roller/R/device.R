#################################################
#Title: Device
#Code: Creates object 'device'
#Author: Horton Papa
#################################################



#################################################
#' @title Check_Sides
#' @description aux function: checks validity of 'sides' argument in device()
#' @param sides any vector that has length greater than 1
#' @return error message if not valid
#' @export

check_sides = function(sides) {

  #acculumulate errors
  Check <- ArgumentCheck::newArgCheck()

  if (length(sides) < 2){

    ArgumentCheck::addError(
      msg = "'sides' must be a vector of length greater than 1",
      argcheck = Check
      )
  }

  if (anyDuplicated(sides) != 0) {
    ArgumentCheck::addError(
      msg = "'sides' cannot have duplicated elements",
      argcheck = Check
      )
  }


  #display errors
  ArgumentCheck::finishArgCheck(Check)

}


#################################################
#' @title Check_Prob
#' @description aux function: checks validity of 'prob' argument in
#' device()
#' @param prob numerical vector
#' @return error message if not valid
#' @export

check_prob = function(prob) {

  Check <- ArgumentCheck::newArgCheck()

  if(is.numeric(prob) == FALSE){
    ArgumentCheck::addError(
      msg = "'prob' must be a numeric vector",
      argcheck = Check
      )}



  if(sum(prob) != 1){
    ArgumentCheck::addError(
      msg ="elements in 'prob' must add up to 1",
      argcheck = Check
      )}

  if(any(prob < 0 | prob > 1)){
    ArgumentCheck::addError(
      msg ="elements in 'prob' must be between 0 and 1",
      argcheck = Check
    )}



  ArgumentCheck::finishArgCheck(Check)

}

#################################################
#' @title Device Function
#' @description Creates an object of class 'device'
#' @param sides any vector
#' @param prob numeric vector
#' @return data frame indicating sides and corresponding
#' probabilities
#' @export
#' @examples
#'
#' #fair die
#' device(sides = 1:6,
#'        prob = rep(1/6, 6)
#'
#' #loaded die
#' device(sides = 1:6,
#'        prob = c(.15, .2, .3, .15, .1, .1))
#'
#' #weird die
#' device(sides = c(letters[1:3], 2:5),
#'        prob = rep(1/7,7))


device = function(sides = c(1,2),
                  prob = rep(.5, 2)) {


  Check <- ArgumentCheck::newArgCheck()

  check_sides(sides)
  check_prob(prob)

  if(length(sides) != length(prob))
    ArgumentCheck::addError(
      msg = "'sides' and 'prob' have different lengths",
      argcheck = Check
    )

  ArgumentCheck::finishArgCheck(Check)

  obj = list(
    sides = sides,
    prob = prob
  )

  class(obj) = "device"
  return(obj)

}

#################################################
#' @title Print method for class 'device'
#' @export

print.device = function(x) {
  cat('object "device"\n\n')
  device_df = data.frame(
    sides = x$sides,
    prob = x$prob
  )

  print(device_df)
  invisible(x)
}


#################################################
#' @title is.device
#' @description tests an argument if it is of class "device"
#' @param x object
#' @return TRUE if it is of class "device", FALSE othewise
#' @export
#' @example
#'
#' #create a basic device
#' basic_device = device()
#'
#' is.device(basic_device)
#'
#'

is.device = function(x) {

  if(class(x) == "device") {
    return(TRUE)
  }

  else{
    return(FALSE)
    }
}






