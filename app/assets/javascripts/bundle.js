/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
         return $.ajax({
            method: 'POST',
            url: `${id}/follow`,
            dataType: 'json'
        })
    },

    unfollowUser: id => {
         return $.ajax({
            method: 'DELETE',
            url: `${id}/follow`,
            dataType: 'json'
        })
    }
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js")



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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")

$(() => {
    $('button.follow-toggle').each( (idx, ele) => new FollowToggle(ele)); 

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map