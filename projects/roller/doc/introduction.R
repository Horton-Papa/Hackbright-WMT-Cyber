## ----setup, include = FALSE----------------------------------------------
knitr::opts_chunk$set(
  collapse = TRUE,
  comment = "#>"
)

library(roller)

## ------------------------------------------------------------------------
basic_device = device()
basic_device

## ------------------------------------------------------------------------
multi_side = device(sides = letters[1:8], 
                    prob = rep(1/8, 8))
multi_side

## ------------------------------------------------------------------------
# roll the basic device
basic_10 = roll(basic_device, 
                times = 10)

basic_10

#roll the multi sided device
multi_300 = roll(multi_side,
                 times = 300)
multi_300


## ------------------------------------------------------------------------
#display summary of basic device roll
summary(basic_10)

#display summary of multi sided device roll
summary(multi_300)

## ---- fig.width= 6, fig.height=5-----------------------------------------
#plot multi_300
plot(multi_300)

## ------------------------------------------------------------------------
#extract 7th roll of basic_10
basic_10[7]

#extract 213th roll value of multi_300
multi_300[213]

## ------------------------------------------------------------------------
#replace 7th roll of basic_10 with 2
basic_10[7] = 2
basic_10[7]

#replace 213th roll with a "c"
multi_300[213] = "c"
multi_300[213]

## ------------------------------------------------------------------------
# add 8 more rolls to basic_10
basic_18 = basic_10 + 8
basic_18

# add 100 more rolls to multi_300
multi_400 = multi_300 + 100
multi_400

