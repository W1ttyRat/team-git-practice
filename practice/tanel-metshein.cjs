function isValidTitle(value) {
    if (!value || typeof value !== 'string') {
        return false;
    }

    const trimmedTitle = value.trim();

    if (trimmedTitle.length >= 1 && trimmedTitle.length <= 80) {
        return true;
    }

    return false;
}

module.exports = { isValidTitle };