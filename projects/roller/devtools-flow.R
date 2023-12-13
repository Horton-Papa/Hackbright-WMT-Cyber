####################################
#Devtools WOrkflow
#library(devtools)
####################################

devtools::document()          # generate documentation

devtools::check_man()         # check documentation

devtools::test()              # run tests

devtools::use_vignette(       # use first time only
   name = "Introduction")

devtools::build_vignettes()   # build vignettes

devtools::build()             # build bundle

devtools::install(
  build_vignettes = TRUE)     # install package
