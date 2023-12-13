context("Check Device Arguments")

test_that("check_sides ok with valid argument",{

  expect_null(check_sides(c(1:3)))
  expect_null(check_sides(letters[1-4]))
  expect_null(check_sides(c('a', 1, "b"))) #weird sides, but still ok
})

test_that("check_sides fails with invalid input", {

  expect_error(check_sides(c(2,2)))
  expect_error(check_sides(rep(2,4)))
  expect_error(check_sides(c("a","a")))
  expect_error(check_sides("a"))
  expect_error(check_sides(1))
})

test_that("check_prob ok with valid arguments", {

  expect_null(check_prob(rep(1/6, 6)))
  expect_null(check_prob(c(0.5, 0.5)))
  expect_null(check_prob(c(1/5, 4/5)))


})

test_that("check_prob fails with invalid input",{

  expect_error(check_prob(c(1,2)))
  expect_error(check_prob(c(-5,6)))
  expect_error(check_prob(c(-.5, 0.5)))
  expect_error(check_prob(c(-.5, -0.5)))
  expect_error(check_prob(c("a", "b", "C")))
  expect_error(check_prob(c(0.5,0.5, 0.3)))

})


context("Check if device() works as expected")

test_that("device() ok with valid arguments" , {

  test = device()

  expect_equal(test$sides,c(1,2) )
  expect_equal(test$prob,c(0.5,0.5) )

  expect_equal(length(device()), 2)
  expect_equal(class(device()), "device")
})

test_that("device() fails with invalid arguments", {

  expect_error(device(sides = c(1,1)))
  expect_error(device(sides = c(1,2), prob = c(-.5, 0.5)))
  expect_error(device(sides = c(1,2,3), prob = c(rep(1/4, 4), 1/3)))
  expect_error(device(sides = c(1,1), prob = c("a", "b")))
  expect_error(device(2))


})

test_that('is.device() works as expected', {

  expect_true(is.device(device()))
  expect_true(is.device(device(c(1:3), rep(1/3, 3))))
})

