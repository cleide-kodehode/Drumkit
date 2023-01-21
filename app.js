

const allButtons = document.querySelectorAll("button")

const allSounds = [
  "snare",
  "clap",
  "hihat",
  "kick",
  "openhat",
  "ride",
  "tink",
  "tom"
];

for (let index = 0; index < allButtons.length; index++) {
  const button = allButtons[index];
  const sound  = allSounds[index];
  
  button.addEventListener("click", function() {
    console.log("clicked")
    let audio = new Audio(`./sounds/${ sound }.wav`)
    audio.play()
  });
}



