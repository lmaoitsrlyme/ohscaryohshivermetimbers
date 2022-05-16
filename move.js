AFRAME.registerComponent("movements", {
    init: function () {
        this.move()
    },
    move: function () {
        var el = document.querySelector("#cameramain")
        var pos = el.getAttribute("position")

        window.addEventListener(
            "keydown", function (e){
                if (e.code === "ArrowLeft" && pos.x > -2) {
                    pos.x -= 2
                }

                if (e.code === "ArrowRight" && pos.x < 2) {
                    pos.x += 2
                }
            })

        el.setAttribute("position", {x: pos.x, y: 1, z: pos.z})
    }
  });