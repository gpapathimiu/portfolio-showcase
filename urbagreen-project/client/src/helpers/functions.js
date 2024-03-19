// export const handleTitleError = (title, setTitleError) => {
//   if (title.length === 0) {
//     setTitleError("Please enter a title!");
//   } else if (title.length < 2) {
//     setTitleError("Title must be longer than 2 characters");
//   } else {
//     setTitleError("");
//   }
// };

// export const handleDescriptionError = (description, setDescriptionError) => {
//   if (description.length === 0) {
//     setDescriptionError("Please enter a description!");
//   } else if (description.length < 3) {
//     setDescriptionError("Description must be longer than 3 characters");
//   } else {
//     setDescriptionError("");
//   }
// };

// export const handleImageError = (image, setImageError) => {
//   if (!image) {
//     setImageError("Please select a valid file!");
//   } else {
//     setImageError("");
//   }
// };

export const handleUsernameError = (username, setUsernameError) => {
        if (username.length < 1) {
            setUsernameError('Please input a username!');
        } else if (username.length < 3) {
            setUsernameError('Username must be longer than 3 characters.');
        } else {
            setUsernameError('');
        }
    };

export const handleEmailError = (email, setEmailError) => {
        if (email.length < 1) {
            setEmailError('Please input an email!');
        } else if (email.length < 3) {
            setEmailError('Email must be longer than 3 characters.');
        } else {
            setEmailError('');
        }
    };

export const handlePasswordError = (password, setPasswordError) => {
        if (password.length < 1) {
            setPasswordError('Please input a password!');
        } else if (password.length < 6) {
            setPasswordError('Password must be longer than 6 characters.');
        } else {
            setPasswordError('');
        }
    };

export const handleConfirmPasswordError = (password, confirmPassword, setConfirmPasswordError) => {
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords must match!');
        } else {
            setConfirmPasswordError('');
        }
    };
