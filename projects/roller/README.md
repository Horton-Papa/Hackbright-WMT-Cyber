## Overview

R package `"roller"`  contains functions that simulates rolling a multi sided object:

- `device()`: creates a multisided object
- `roll()`: simulates the roll of an object
- `summary()`: creates a summary of performed rolls
- `plot()`: Creates a barplot of the relative frequencies of resulting rolls


## Motivation

The package was created to simulate rolling a multi sided object.

## Usage

__*note =  below are some examples of how to use the package, please view the vignette for a more in depth description.*__

``` r 

#create a basic device
basic_device = device()

# roll the basic device
basic_10 = roll(basic_device, 
                times = 10)
                
#display summary of basic device roll
summary(basic_10)

#plot multi_300
plot(multi_300)

#extract 7th roll of basic_10
basic_10[7]

#replace 7th roll of basic_10 with 2
basic_10[7] = 2

# add 8 more rolls to basic_10
basic_18 = basic_10 + 8

