function createLoginTracker(userInfo) {
  let attemptCount = 0; // tracks attempts

  return (passwordAttempt) => {
    // if already locked
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++; // increment on each try

    // correct password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // wrong password but still within limit
    if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }

    // just in case (extra safety)
    return "Account locked due to too many failed login attempts";
  };
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


