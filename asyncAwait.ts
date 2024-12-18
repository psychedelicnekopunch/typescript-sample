
// 非同期処理


function countUp(i: number) {
	console.log(i)
	setTimeout(() => {
		if (i < 5) {
			countUp(++i)
		}
	}, 1000)
}




function getA(): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// throw new Error("error A")
			reject(Error("error A"))
			resolve("A")
			// reject(Error("error A"))
		}, 3000)
	})
}

async function initA(): Promise<void> {
	console.log(">>>> start initA()")
	try {
		let res = await getA()
		console.log(res)
	} catch (error: any) {
		console.log(typeof error)
		console.log(error)
	}
	console.log("<<<< finish initA()")
}




function getB(): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject("error B")
			resolve("B")
		}, 2000)
	})
}

async function initB(): Promise<void> {
	console.log(">>>> start initB()")
	await getB()
		.then((result: string) => {
			console.log(result)
		})
		.catch((error: string) => {
			console.log(typeof error)
			console.log(error)
		})
	console.log("<<<< finish initB()")
}




function getC(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("C")
		}, 1000)
	})
}

async function initC(): Promise<void> {
	console.log(">>>> start initC()")
	await getC()
		.then((result: string) => {
			console.log(result)
		})
		.catch((error: string) => {
			console.log(error)
		})
	console.log("<<<< finish initC()")
}




// (function common() {
// 	console.log("===== START COMMON =====")
// 	countUp(0)
// 	initA()
// 	initB()
// 	initC()
// 	console.log("===== FNISH COMMON =====")
// }())

// (async function waterfall() {
// 	console.log("===== START WATERFALL =====")
// 	countUp(0)
// 	await initA()
// 	await initB()
// 	await initC()
// 	console.log("===== FNISH WATERFALL =====")
// }())

// (async function parallel() {
// 	console.log("===== START PARALLEL =====")
// 	countUp(0)
// 	await Promise.all([
// 		initA(),
// 		initB(),
// 		initC(),
// 	])
// 	console.log("===== FNISH PARALLEL =====")
// }())

(async function mix() {
	console.log("===== START MIX =====")
	countUp(0)
	await initA()
	await Promise.all([
		initB(),
		initC(),
	])
	console.log("===== FNISH MIX =====")
}())
