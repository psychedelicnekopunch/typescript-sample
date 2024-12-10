// interface UserInterface {
// 	id: number
// 	name: string
// 	// age: number
// 	// goto(to: string): string
// }
var User = /** @class */ (function () {
    function User(user) {
        this.id = 0;
        this.id2 = 0; // UserInterface に存在しないのにエラーにならない
        this.name = "";
        this.score = {
            english: 0,
            japanese: 0,
            math: 0,
        };
        this.subject = [];
        this.id = user.id;
        this.name = user.name;
        console.log(user);
        console.log(this);
    }
    Object.defineProperty(User.prototype, "greeting", {
        get: function () {
            return "Hi, I'm ".concat(this.name, ".");
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.goto = function (to) {
        return "I'm going to go to ".concat(to, ".");
    };
    User.prototype.set = function (name) {
        this.name = name;
    };
    return User;
}());
var u = new User({
    id: 1,
    // id2: 123,// Object literal may only specify known properties, and 'id2' does not exist in type 'UserProps'.
    name: 'Smith',
    age: 18,
});
var u2 = new User({
    id: 2,
    // id2: 123,// Object literal may only specify known properties, and 'id2' does not exist in type 'UserProps'.
    name: 'Bob',
    age: 28,
});
