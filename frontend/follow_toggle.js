
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
        this.followState = "followed"
        this.render()
       return $.ajax({
           
            method: 'POST',
            url: `${this.userId}/follow`,
            dataType: 'json'
            
        })

    }
    else if (this.followState === "followed"){
        this.followState = "unfollowed"
        this.render()
       return $.ajax({
            method: 'DELETE',
            url: `${this.userId}/follow`,
            dataType: 'json'
        })
    }

}

FollowToggle.prototype.render = function () {
    if (this.followState === "unfollowed") {
        this.$el.html("Follow!")
    } else {
        this.$el.html("Unfollow!")
    }
}

module.exports = FollowToggle;