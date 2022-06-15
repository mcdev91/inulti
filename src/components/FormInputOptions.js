let FullNamePattern = /([a-zA-Z]+\s){1,}([a-zA-Z]+)/;
let EmailPattern = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
let OnlyNumbers = /^[0-9\b]+$/;

const inputOptions = {
    fullName: {
        required: "Full Name is required",
        pattern: {
            value: FullNamePattern,
            message: "Name And Female required"
        }
    },
    email: {
        required: "Email is required",
        pattern: {
            value: EmailPattern,
            message: "Invalid email address"
        }
    },
    zipCode: {
        required: "Zip Code is required",
        minLength: {
            value: 5,
            message: "At least 5 digits"
        },
        pattern: {
            value: OnlyNumbers,
            message: "Only Numbers Requireq"
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
            value: OnlyNumbers,
            message: "Only Numbers Requireq"
        }
    },
    expirationDate: {
        required: "Expiration date is required"
    },
    cvv: {
        required: "CVV is required",
        pattern: {
            value: OnlyNumbers,
            message: "Only Numbers Requireq"
        }
    }
};

export default inputOptions;