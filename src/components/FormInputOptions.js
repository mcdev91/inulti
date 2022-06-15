const Patterns = {
    fullNamePattern: {
        value: /([a-zA-Z]+\s){1,}([a-zA-Z]+)/
    },
    emailPattern: {
        value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/
    },
    onlyNumbersPattern: {
        value: /^[0-9\b]+$/
    }
}

const inputOptions = {
    fullName: {
        required: "Full Name is required",
        pattern: {
            value: Patterns.fullNamePattern.value,
            message: "Name And Female required"
        }
    },
    email: {
        required: "Email is required",
        pattern: {
            value: Patterns.emailPattern.value,
            message: "Invalid email address"
        }
    },
    zipCode: {
        required: "Zip Code is required",
        pattern: {
            value:  Patterns.onlyNumbersPattern.value,
            message: "Only Numbers Required"
        }, 
        minLength: {
            value: 5,
            message: 'At least 5 digits required'
        }
    },
    birthDay: {
        required: "Birth Day is required"
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
        }
    },
    gender: {
        required: "You must select"
    },
    cardHolderName: {
        required: "Card Holder Name is required"
    },
    cardNumber: {
        required: "Card number is required",
        pattern: {
            value:  Patterns.onlyNumbersPattern.value,
            message: "Only Numbers Required"
        },
        minLength: {
            value: 5,
            message: 'At least 5 digits required'
        }
    },
    expirationDate: {
        required: "Expiration date is required"
    },
    cvv: {
        required: "CVV is required",
        pattern: {
            value:  Patterns.onlyNumbersPattern.value,
            message: "Only Numbers Requireq"
        },
        minLength: {
            value: 3,
            message: 'At least 3 digits required'
        }
    }
};

export default inputOptions;