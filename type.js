// interface UserInterface {
// 	id: number
// 	name: string
// 	// age: number
// 	// goto(to: string): string
// }
var User = /** @class */ (function () {
    function User(user) {
        this.id = 0;
        this.name = "";
        this.score = {
            english: 0,
            japanese: 0,
            math: 0,
        };
        this.subject = [];
        this.id = user.id;
        this.name = user.name;
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
    return User;
}());
var u = new User({
    id: 1,
    name: 'Smith',
    age: 18,
});
