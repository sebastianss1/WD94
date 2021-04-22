
function FollowToggle(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id')
    this.followState = this.$el.data('initial-follow-state')

    this.render();


}

FollowToggle.prototype.render = function () {
    if (this.followState === "unfollowed") {
        this.$el.html("Follow!")
    } else {
        this.$el.html("Unfollow!")
    }
}

module.exports = FollowToggle;