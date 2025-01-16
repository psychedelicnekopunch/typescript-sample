

// interface UserInterface {
// 	id: number
// 	name: string
// 	// age: number
// 	// goto(to: string): string
// }


type UserInterface = {
	id: number
	name: string
	age?: number
	greeting: string
	// score: {
	// 	english: number
	// 	japanese: number
	// 	math: number
	// }
	score: UserScoreInterface
	subject: string[]
	// goto(to: string)?: string
	goto(to: string): string
	set(name: string): void
}


type UserScoreInterface = {
	english: number
	japanese: number
	math: number
}


type UserProps = {
	id: number
	name: string
	age: number
}


class User implements UserInterface {

	id: number = 0
	id2: number = 0// UserInterface に存在しないのにエラーにならない
	name: string = ""
	score: UserScoreInterface = {
		english: 0,
		japanese: 0,
		math: 0,
	}
	subject: string[] = []

	constructor(user: UserProps) {
		this.id = user.id
		this.name = user.name
		console.log(user)
		console.log(this)
	}

	get greeting(): string {
		return `Hi, I'm ${this.name}.`
	}

	goto(to: string): string {
		return `I'm going to go to ${to}.`
	}

	set(name: string) {
		this.name = name
	}

}


let u: User = new User({
	id: 1,
	// id2: 123,// Object literal may only specify known properties, and 'id2' does not exist in type 'UserProps'.
	name: 'Smith',
	age: 18,
})


let u2: UserInterface = new User({
	id: 2,
	// id2: 123,// Object literal may only specify known properties, and 'id2' does not exist in type 'UserProps'.
	name: 'Bob',
	age: 28,
})


console.log(u.id2)
// console.log(u2.id2)// error TS2339: Property 'id2' does not exist on type 'UserInterface'.

