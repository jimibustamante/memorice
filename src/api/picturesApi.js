
function randomPage(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export const getRandomPic = async (count) => {
  let picsList = await window.fetch(`https://picsum.photos/v2/list?page=${randomPage(1, 10)}&limit=${count}`);
  picsList = await picsList.json();
  console.log({ picsList });
  return picsList;
}