/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {


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