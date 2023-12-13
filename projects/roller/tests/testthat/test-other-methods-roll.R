context("Test other methods for roll function")


set.seed(123)
  test_roll_2 = roll(
    device = device(1:6, rep(1/6,6)),
    times = 250)

test_that("Extractor method works", {

  expect_equal(test_roll_2[39], 3)

})

test_that("Replacement method works", {

  replace_test =
    test_roll_2[39] <- 4

  expect_equal(replace_test, 4)
})

test_that("add more rolls works as expected", {

  test_roll_3 = test_roll_2 + 100

  expect_equal(length(test_roll_3$rolls), 350)
  expect_equal(length(test_roll_3), 4)
  expect_equal(class(test_roll_3), "rolls")

  })







