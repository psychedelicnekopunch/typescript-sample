type Props = {
	methods: (obj: Methods) => void
}

type Methods = {
	doSomething: () => void
}

function test({ methods }: Props): void {
	methods({
		doSomething: () => {
			console.log("do something")
		},
		// error TS2353: Object literal may only specify known properties, and 'name' does not exist in type 'Methods'.
		// name: "name",
	})
}

test({
	methods: (obj: Methods): void => {
		console.log(obj)
		obj.doSomething()
	},
})
