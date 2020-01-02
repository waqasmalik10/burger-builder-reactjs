const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(rules && rules.required) {
        isValid = (value.trim() !== '' &&  isValid);
    }

    if(rules && rules.minLength) {
        isValid = (value.trim().length >= 5 &&  isValid)
    }

    if(rules && rules.maxLength) {
        isValid = (value.trim().length <=5 &&  isValid)
    }

    return isValid;
}

export default updateObject;