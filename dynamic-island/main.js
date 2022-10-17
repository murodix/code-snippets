let island = document.querySelector('.dynamic-island-container');

console.log(document)

island.onclick =  () => {
    island.classList.toggle('active');
}