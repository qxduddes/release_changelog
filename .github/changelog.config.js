'use strict'
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
    "types": [
        { type: 'feat', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'refactor', section: 'Enhancements' },
        { type: 'chore', section: 'Maintainance' },
        { type: 'test', section: 'Maintainance' },
        { type: 'docs', section: 'Documents' },
    ]
})
