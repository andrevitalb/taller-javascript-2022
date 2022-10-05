// every
console.log("Every")
const isBelowThreshold = (currentValue) => currentValue < 40

const array1 = [1, 30, 39, 29, 10, 13]
console.log(array1.every(isBelowThreshold))

// some
console.log("Some")
const array2 = [1, 2, 3, 4, 5]
console.log(
	array2.some((element) => {
		console.log(element)
		return element % 2 === 0
	}),
)

// fill
console.log("Fill")
const array3 = [1, 2, 3, 4]
console.log(array3.fill(0, 2, 4))

// filter
console.log("Filter")
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
const result = words.filter((word) => word.length > 6)
console.log(result)

// find
console.log("Find")
const array4 = [5, 12, 8, 130, 44]
const found = array4.find((element) => element > 10)
console.log(found)

// findIndex
console.log("FindIndex")
const array5 = [5, 12, 8, 130, 44]
const index = array5.findIndex((element) => element > 13)
console.log(index)

// indexOf
console.log("IndexOf")
const beasts = ["ant", "bison", "camel", "duck", "bison"]
console.log(beasts.indexOf("bison"))
console.log(beasts.indexOf("bin"))

// includes
console.log("Includes")
const array6 = [1, 2, 3]
console.log(array6.includes(2))

// join
console.log("Join")
const elements = ["Fire", "Air", "Water"]
console.log(elements.join())
console.log(elements.join(""))
console.log(elements.join("--"))

// slice
console.log("Slice")
const animals = ["ant", "bison", "camel", "duck", "elephant"]
console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice())

// splice
console.log("Splice")
const months = ["Jan", "March", "April", "June"]
months.splice(1, 0, "Feb")
months.splice(1, 0, "Test1", "Test2")
months.splice(1, 2)
console.log(months)

// push
console.log("Push")
const animals2 = ["pigs", "goats", "sheep"]
const count = animals2.push("cows")
console.log(animals2)
console.log(count)

// pop
console.log("Pop")
const animals3 = ["pigs", "goats", "sheep"]
const last = animals3.pop()
console.log(animals3)
console.log(last)

// unshift
console.log("Unshift")
const array7 = [1, 2, 3]
array7.unshift(4, 5)
console.log(array7)

// shift
console.log("Shift")
const array8 = [1, 2, 3]
const first = array8.shift()
console.log(array8)
console.log(first)

// sort
console.log("Sort")
const months2 = ["March", "Jan", "Feb", "Dec"]
months2.sort()
console.log(months2)

const nums = [1, 30, 4, 21, 100000]
nums.sort((first, second) => first - second)
console.log(nums)

// reverse
console.log("Reverse")
const array9 = ["one", "two", "three"]
const reversed = array9.reverse()
console.log(reversed)

// reduce
console.log("Reduce")
const array10 = [1, 2, 3, 4]
console.log(array10.reduce((accumulator, currentValue) => accumulator + currentValue, 5))

// flat
console.log("Flat")
const array11 = [1, 2, [3, 4]]
console.log(array11.flat())

// flatMap
console.log("FlatMap")
const array12 = [1, 2, 3, 4]
console.log(array12.flatMap((x) => [x * 2]))
