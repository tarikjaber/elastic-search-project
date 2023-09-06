module.exports = {
    // ... other webpack configuration ...

    resolve: {
        // ... other resolve configuration ...

        fallback: {
            "util": false
        }
    }
};
