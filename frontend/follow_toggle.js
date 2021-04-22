const APIUtil = require('./api_util.js')



function FollowToggle(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id')
    this.followState = this.$el.data('initial-follow-state')

    this.render();
    this.$el.on("click", this.handleClick.bind(this))

}

FollowToggle.prototype.handleClick = function(e) {

    e.preventDefault();
    if (this.followState === "unfollowed") {
        const successFollow = function () {
        this.followState = "followed"
        this.render()
        }.bind(this)
        APIUtil.followUser(this.userId).then(successFollow())
    }
    else if (this.followState === "followed") {
        const successUnfollow = function() {
        this.followState = "unfollowed"
        this.render()
        }.bind(this)

        APIUtil.unfollowUser(this.userId).then(successUnfollow())
    }

}

FollowToggle.prototype.render = function () {
    if (this.followState === "unfollowed") {
        this.$el.prop('disabled', false)
        this.$el.html("Follow!")
    } else {
        this.$el.prop('disabled', false)        
        this.$el.html("Unfollow!")
    }
}

module.exports = FollowToggle;