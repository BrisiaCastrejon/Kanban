let containerOne = document.getElementsByClassName('row');
let containerTwo = document.querySelector('.container');
containerTwo.addEventListener('dragover', listMoveContainer, false );
containerTwo.addEventListener('dragleave', listMoveContainerEnd, false);
containerOne.addEventListener('dragstart', listMoveStar, false);
containerOne.addEventListener('dragend', listMoveEnd, false);
const listMoveContainer = (event) => {

}
const listMoveContainerEnd = (event) => {

}
const listMoveStar = (event) => {
  containerOne.style.display = 'none';
}
const listMoveEnd = (event) => {
  containerOne.style.display = 'none';
}

