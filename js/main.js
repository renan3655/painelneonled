function arrasta() {
  class Draggable {
    constructor(elemento) {
      const that = this;
      this.elemento = elemento;
      this.posX = 0;
      this.posY = 0;
      this.top = 0;
      this.left = 0;
      this.refMouseUp = function (event) {
        that.onMouseUp(event);
      };

      this.refMouseMove = function (event) {
        that.onMouseMove(event);
      };

      this.elemento.addEventListener("mousedown", function (event) {
        that.onMouseDown(event);
      });
    }
    onMouseDown(event) {
      this.posX = event.x;
      this.posY = event.y;

      this.elemento.classList.add("dragging");
      window.addEventListener("mousemove", this.refMouseMove);
      window.addEventListener("mouseup", this.refMouseUp);
    }
    onMouseMove(event) {
      const diffX = event.x - this.posX;
      const diffY = event.y - this.posY;
      this.elemento.style.top = this.top + diffY + "px";
      this.elemento.style.left = this.left + diffX + "px";
    }
    onMouseUp(event) {
      this.top = parseInt(this.elemento.style.top.replace(/\D/g, "")) || 0;
      this.left = parseInt(this.elemento.style.left.replace(/\D/g, "")) || 0;
      this.elemento.classList.remove("dragging");
      window.removeEventListener("mousemove", this.refMouseMove);
      window.removeEventListener("mouseup", this.refMouseUp);
    }
  }

  const draggables = document.getElementsByClassName("draggable");
  [].forEach.call(draggables, function (draggable, indice) {
    new Draggable(draggable);
  });
}
arrasta();



function alteraT(){
  const inputRange = document.getElementById('range');
  if(inputRange.value == "0")
  input2.style.fontSize = "50px"
  if(inputRange.value == "1")
  input2.style.fontSize = "60px"
  if(inputRange.value == "2")
  input2.style.fontSize = "70px"
  if(inputRange.value == "3")
  input2.style.fontSize = "80px"
  if(inputRange.value == "4")
  input2.style.fontSize = "90px"
  if(inputRange.value == "5")
  input2.style.fontSize = "100px"
  
}
alteraT()
