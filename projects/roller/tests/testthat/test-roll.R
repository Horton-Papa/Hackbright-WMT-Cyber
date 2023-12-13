context("Check if roll works as expected")

test_that("roll() works with valid arguments", {

  set.seed(123)
  test_roll_1 = roll(device(), times = 6)

  expect_equal(length(test_roll_1$rolls), 6)
  expect_equal(length(test_roll_1), 4)
  expect_equal(test_roll_1$rolls[6],2)
  expect_equal(test_roll_1$prob, c(0.5, 0.5))
  expect_equal(test_roll_1$total, 6)
  expect_equal(test_roll_1$sides, c(1,2))
  expect_equal(class(test_roll_1), "rolls")


})


test_that("roll() fails with bad inputs", {

  expect_error(roll(device(c(1,2,1))))
  expect_error(roll(
    device(letters[1-5], rep(1/4,4))))
  expect_error(roll(
    device(letters[1-5], c(rep(1/4,4), 1/3))))
  expect_error(roll(
    device(letters[1-5], rep(1/5,5)),
    times = -2))
  expect_error(roll(
    device(letters[1-5], rep("h",5)),
    times = 4))
})
