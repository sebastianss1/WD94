const FollowToggle = require('./follow_toggle.js')

$(() => {
    $('button.follow-toggle').each( (idx, ele) => new FollowToggle(ele)); 

})