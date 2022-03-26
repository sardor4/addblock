const btn = document.querySelector('.btn'),
      box = document.querySelector('.box');


const removeElement = ()=>{
    setTimeout(()=>{
        box.firstChild.remove()
    }, 5000);
}
const randomPlace = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const addElement = ()=>{
    block = document.createElement('div');
    block.className = 'block';
    const w = window.innerWidth,
          h = window.innerHeight,
          dx = randomPlace(0, w - 100),
          dy = randomPlace(0, h - 100);
    block.style = `top: ${dy}px;
                   left: ${dx}px;`;
    removeElement();
    return box.append(block);
}

btn.addEventListener('click', addElement);