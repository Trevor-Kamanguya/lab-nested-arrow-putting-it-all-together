


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
function createLoginTracker(userinfo) {
  let attemptCount = 0;

  const innerfunction = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed attempts";
    } else if (passwordAttempt === userinfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return innerfunction;
}

// usage
const login = createLoginTracker({
  username: "Trevor",
  password: "password123"
});

console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("password123"));