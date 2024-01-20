class Form {
  constructor() {
  this.input= createInput("").attribute("placeholder","Enter your name")
  this.playButton = createButton ("Play")
this.titleImage = createImg("./assets/title.png","gameTitle")
this.greeting = createElement("h2")
}
setElementsPosition(){
this.titleImage.position(120,100);
this.input.position(width/2-110,height/2-90);
this.playButton.position(width/2-90,height/2-20);
this.greeting.position(width/2-300,height/2-100);
}
hide(){
  this.playButton.hide() 
  this.input.hide()
  this.greeting.hide()
 
}
display(){
  this.setElementsPosition()
}

}