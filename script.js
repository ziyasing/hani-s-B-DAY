const audioInput = document.getElementById("audioFile");
const player = document.getElementById("player");
const audioName = document.getElementById("audioName");

audioInput.addEventListener("change", () => {
  const file = audioInput.files[0];
  if (!file) return;
  if (!file.type.startsWith("audio/")) {
    audioName.textContent = "File harus berupa audio/MP3.";
    return;
  }
  player.src = URL.createObjectURL(file);
  player.classList.add("ready");
  audioName.textContent = `🎵 ${file.name}`;
});

function makeHearts(){
  for(let i=0;i<18;i++){
    const h=document.createElement("div");
    h.className="floating-heart";
    h.textContent=["💙","🤍","✨","🌙"][Math.floor(Math.random()*4)];
    h.style.left=(35+Math.random()*30)+"vw";
    h.style.bottom=(12+Math.random()*8)+"vh";
    h.style.setProperty("--x",(Math.random()*240-120)+"px");
    h.style.animationDelay=(Math.random()*.5)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}
