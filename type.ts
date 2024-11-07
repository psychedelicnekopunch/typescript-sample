

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
	}

	get greeting(): string {
		return `Hi, I'm ${this.name}.`
	}

	goto(to: string): string {
		return `I'm going to go to ${to}.`
	}

}


let u: User = new User({
	id: 1,
	name: 'Smith',
	age: 18,
})


