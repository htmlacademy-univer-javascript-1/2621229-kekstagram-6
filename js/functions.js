const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= 10; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фото №${i}`,
      likes: Math.floor(Math.random() * 200) + 15,
      comments: Math.floor(Math.random() * 100)
    });
  }

  return photos;
};

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (photoList) => {
  const fragment = document.createDocumentFragment();

  photoList.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    const img = pictureElement.querySelector('.picture__img');
    img.src = url;
    img.alt = description;

    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;

    fragment.append(pictureElement);
  });

  picturesContainer.append(fragment);
};

const photos = createPhotos();
renderPictures(photos);
