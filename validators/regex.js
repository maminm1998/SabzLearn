const testEmail = (value) => {
    const emailPattent = /^[a-z0-9A-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/g
    return emailPattent.test(value)
}

const testCodeMelli = (value) => {
    // Test
}

const testPhoneNumber = (value) => {
    // Test
}

export default {
    testEmail,
    testCodeMelli,
    testPhoneNumber
}