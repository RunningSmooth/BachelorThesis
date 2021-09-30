const express = require('express');

const router = express.Router();

// Add Posts
router.post('/', async (req, res) => {
    const plan = await loadPostCollection();
    console.log(plan)
    res.status(201).send()
});


async function loadPostCollection() {
    const plan = {
        "test": "test"
    }
    return plan
}

module.exports = router;